import Link from 'next/link';
import RestoraSymbol from '@/icons/restora_symbol';
import RestoraWordmark from '@/icons/restora_wordmark';

/** The Restora logo, linking home: the cloche on its indigo tile and the wordmark in the text color. */
export default function Logo() {
  return (
    <Link href="/" aria-label="Restora home" className="flex items-center gap-2.5 rounded-small">
      <span className="grid size-8 place-items-center rounded-control bg-primary text-on-primary">
        <RestoraSymbol className="size-5" />
      </span>
      <RestoraWordmark className="h-[18px] w-auto text-ink" />
    </Link>
  );
}
