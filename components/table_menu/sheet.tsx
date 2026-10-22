'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

/**
 * A sheet over the menu: the browser's own modal dialog (focus kept inside, Escape and the back gesture close it), sliding
 * up from the bottom on phones and centred on wider screens.
 */
export default function Sheet({ title, onClose, children, footer }: { title: string; onClose: () => void; children: ReactNode; footer?: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={ref}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
      className="m-0 mt-auto max-h-[92dvh] w-full max-w-none overflow-hidden rounded-t-panel bg-canvas p-0 text-ink shadow-lift backdrop:bg-night/60 backdrop:backdrop-blur-[2px] open:flex open:flex-col sm:m-auto sm:max-w-lg sm:rounded-panel"
    >
      <header className="flex items-center justify-between gap-3 border-b border-rule bg-paper px-5 py-3.5">
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
