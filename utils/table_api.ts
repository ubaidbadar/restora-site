import SITE from '@/constants/site';
import type TableMenu from '@/types/table_menu';

/** What a table's QR code can hold: anything else is never sent to the API. */
export const TABLE_CODE = /^[a-zA-Z0-9_-]{3,64}$/;

/**
 * Calls the public table API from this site's server. Answers the JSON, or `{ message }` with what went wrong, said
 * for a guest. The browser never talks to the API, so it needs no CORS and the API's address stays private.
 */
export async function tableApi<T>(code: string, path = '', body?: unknown): Promise<{ ok: true; data: T } | { ok: false; status: number; message: string }> {
  if (!TABLE_CODE.test(code)) return { ok: false, status: 404, message: 'This QR code does not belong to a table.' };
  try {
    const res = await fetch(`${SITE.apiUrl}/api/v1/public/t/${code}${path}`, {
      method: body === undefined ? 'GET' : 'POST',
      headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok) return { ok: true, data: json as T };
    return { ok: false, status: res.status, message: typeof json.message === 'string' ? json.message : 'Something went wrong. Please ask a waiter.' };
  } catch {
    return { ok: false, status: 503, message: 'We could not reach the restaurant. Check your connection and try again.' };
  }
}

/** The table's menu, fresh on every visit (sold-out dishes change during service). Null when the code is not a table. */
export async function getTableMenu(code: string) {
  const res = await tableApi<TableMenu>(code);
  if (res.ok) return res.data;
  if (res.status === 404) return null;
  throw new Error(res.message);
}
