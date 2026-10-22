'use client';

import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { X } from 'lucide-react';

/** How far down (px) a sheet is pulled before letting go closes it. */
const CLOSE_AT = 110;

/**
 * A sheet over the menu: the browser's own modal dialog (focus kept inside; Escape, the back gesture and a tap outside
 * close it). On phones it rises from the bottom and can be pulled down by its top bar to close; on wider screens it is
 * centred.
 */
export default function Sheet({ title, onClose, children, footer }: { title: string; onClose: () => void; children: ReactNode; footer?: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [drag, setDrag] = useState<{ startY: number; y: number } | null>(null);

  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  const pull = {
    onPointerDown: (event: PointerEvent) => {
      if ((event.target as Element).closest('button')) return;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDrag({ startY: event.clientY, y: 0 });
    },
    onPointerMove: (event: PointerEvent) => drag && setDrag({ ...drag, y: Math.max(0, event.clientY - drag.startY) }),
    onPointerUp: () => {
      if (drag && drag.y > CLOSE_AT) onClose();
      setDrag(null);
    },
    onPointerCancel: () => setDrag(null),
  };

  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      style={drag ? { translate: `0 ${drag.y}px`, transition: 'none' } : undefined}
      className="m-0 mt-auto max-h-[92dvh] w-full max-w-none animate-sheet-up overflow-hidden rounded-t-panel bg-canvas p-0 text-ink shadow-lift transition-[translate] duration-200 backdrop:bg-night/60 backdrop:backdrop-blur-[2px] open:flex open:flex-col sm:m-auto sm:max-w-lg sm:rounded-panel"
    >
      <header {...pull} className="relative flex touch-none items-center justify-between gap-3 border-b border-rule bg-paper px-5 pt-5 pb-3.5 select-none sm:pt-3.5">
        <span aria-hidden="true" className="absolute top-2 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-rule sm:hidden" />
        <h2 className="text-[1.25rem] font-bold">{title}</h2>
        <button type="button" onClick={onClose} aria-label="Close" className="grid size-11 place-items-center rounded-full text-ink-2 hover:bg-canvas">
          <X aria-hidden="true" className="size-5" />
        </button>
      </header>
      <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">{children}</div>
      {footer && <footer className="border-t border-rule bg-paper px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">{footer}</footer>}
    </dialog>
  );
}
