'use client';

import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react';
import type { CartLine } from '@/types/table_menu';

interface Cart {
  code: string;
  lines: CartLine[];
  /** Made afresh whenever the cart changes: sending the same cart twice is one order. */
  clientId: string;
  /** Orders this phone sent from the table in this visit, newest first. */
  sent: { token: number; at: string }[];
  add: (line: Omit<CartLine, 'qty'>, qty: number) => void;
  setQty: (key: string, qty: number) => void;
  markSent: (token: number) => void;
}

const CartContext = createContext<Cart | null>(null);

type Saved = Pick<Cart, 'lines' | 'sent' | 'clientId'>;
const EMPTY: Saved = { lines: [], sent: [], clientId: '' };
const newId = () => crypto.randomUUID();
const storageKey = (code: string) => `restora.table.${code}`;

// The cart lives outside React, in this tab's session storage (a reload or a phone call does not empty it).
const listeners = new Set<() => void>();
const snapshots = new Map<string, Saved>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => void listeners.delete(listener);
};
function read(code: string): Saved {
  let snapshot = snapshots.get(code);
  if (!snapshot) {
    let saved: Partial<Saved> = {};
    try {
      saved = JSON.parse(sessionStorage.getItem(storageKey(code)) ?? '{}');
    } catch {}
    snapshot = { lines: saved.lines ?? [], sent: saved.sent ?? [], clientId: newId() };
    snapshots.set(code, snapshot);
  }
  return snapshot;
}
function write(code: string, change: (current: Saved) => Omit<Saved, 'clientId'>) {
  // Any change makes a new client id: the same cart sent twice is one order, a changed cart is a new one.
  const next = { ...change(read(code)), clientId: newId() };
  snapshots.set(code, next);
  try {
    sessionStorage.setItem(storageKey(code), JSON.stringify({ lines: next.lines, sent: next.sent }));
  } catch {}
  listeners.forEach((listener) => listener());
}

/** The guest's cart for one table. The server renders it empty; the browser fills it from this tab after hydration. */
export default function CartProvider({ code, children }: { code: string; children: ReactNode }) {
  const state = useSyncExternalStore(subscribe, () => read(code), () => EMPTY);

  const cart: Cart = {
    code,
    ...state,
    add: (line, qty) =>
      write(code, (current) => {
        const existing = current.lines.find((entry) => entry.key === line.key);
        const lines = existing
          ? current.lines.map((entry) => (entry.key === line.key ? { ...entry, qty: Math.min(20, entry.qty + qty) } : entry))
          : [...current.lines, { ...line, qty }];
        return { ...current, lines };
      }),
    setQty: (key, qty) =>
      write(code, (current) => ({
        ...current,
        lines: qty > 0 ? current.lines.map((entry) => (entry.key === key ? { ...entry, qty: Math.min(20, qty) } : entry)) : current.lines.filter((entry) => entry.key !== key),
      })),
    markSent: (token) => write(code, (current) => ({ lines: [], sent: [{ token, at: new Date().toISOString() }, ...current.sent] })),
  };

  return <CartContext value={cart}>{children}</CartContext>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('useCart needs a CartProvider');
  return cart;
}
