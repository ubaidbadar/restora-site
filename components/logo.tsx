import Link from 'next/link';
import RestoraSymbol from '@/icons/restora_symbol';
import RestoraWordmark from '@/icons/restora_wordmark';

/** The Restora logo, linking home: the cloche on its indigo tile and the wordmark. `light` for night sections. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="Restora home" className="flex items-center gap-2.5 rounded-[6px]">
      <span className="grid size-9 place-items-center rounded-control bg-indigo text-white">
        <RestoraSymbol className="size-6" />
      </span>
      <RestoraWordmark className={`h-5 w-auto ${light ? 'text-white' : 'text-ink'}`} />
    </Link>
  );
}
