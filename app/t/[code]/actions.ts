'use server';

import { tableApi } from '@/utils/table_api';

/** What the guest page shows after an action: lean on purpose, never the API's records. */
export type ActionResult = { ok: true; message: string; token?: number } | { ok: false; message: string };

interface OrderLine {
  itemId: string;
  sizeId: string;
  addonIds: string[];
  note?: string;
  qty: number;
}

const ID = /^[a-zA-Z0-9]{1,64}$/;
const isLine = (line: OrderLine) =>
  ID.test(line.itemId) &&
  ID.test(line.sizeId) &&
  Array.isArray(line.addonIds) &&
  line.addonIds.length <= 30 &&
  line.addonIds.every((id) => ID.test(id)) &&
  (line.note === undefined || (typeof line.note === 'string' && line.note.length <= 200)) &&
  Number.isInteger(line.qty) &&
  line.qty >= 1 &&
  line.qty <= 20;

/**
 * Sends the guest's cart to the kitchen's queue. Staff accept it before it is cooked. `clientId` is made once per cart,
 * so a retry after a dropped connection gives the same order, not a second one. Prices are the API's, never the page's.
 */
export async function sendOrder(code: string, lines: OrderLine[], clientId: string): Promise<ActionResult> {
  // Anyone can post here, not only this page: the shape is checked before anything is forwarded.
  if (!Array.isArray(lines) || lines.length === 0 || lines.length > 30 || !lines.every(isLine)) return { ok: false, message: 'Your order could not be read. Please try again.' };
  if (typeof clientId !== 'string' || !/^[a-zA-Z0-9-]{8,64}$/.test(clientId)) return { ok: false, message: 'Please reload the page and try again.' };

  const items = lines.map(({ itemId, sizeId, addonIds, note, qty }) => ({ itemId, sizeId, addonIds, note: note?.trim() || undefined, qty }));
  const res = await tableApi<{ dailyToken: number }>(code, '/order', { items, clientId });
  if (!res.ok) return { ok: false, message: res.message };
  return { ok: true, token: res.data.dailyToken, message: 'Sent. A waiter will confirm your order in a moment.' };
}

/** Calls a waiter to the table, or asks for the bill. Tapping again while one is open does not call twice. */
export async function callStaff(code: string, kind: 'waiter' | 'bill'): Promise<ActionResult> {
  if (kind !== 'waiter' && kind !== 'bill') return { ok: false, message: 'Please try again.' };
  const res = await tableApi(code, '/call', { kind });
  if (!res.ok) return { ok: false, message: res.status === 404 ? res.message : 'We could not reach the staff. Please wave to a waiter.' };
  return { ok: true, message: kind === 'waiter' ? 'A waiter is on the way.' : 'Your bill is on the way.' };
}
