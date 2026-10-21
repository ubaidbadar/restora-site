import { BookOpenText, ClipboardList, QrCode, UserCog, UsersRound, UtensilsCrossed, WalletCards, WifiOff, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  orders: ClipboardList,
  tables: QrCode,
  khata: BookOpenText,
  customers: UsersRound,
  offline: WifiOff,
  team: UserCog,
  menu: UtensilsCrossed,
  payments: WalletCards,
};

/** A feature's icon on a soft indigo tile. */
export default function FeatureIcon({ name }: { name: string }) {
  const Icon = ICONS[name] ?? ClipboardList;
  return (
    <span className="grid size-11 place-items-center rounded-control bg-primary-soft text-accent-text">
      <Icon className="size-5.5" aria-hidden="true" />
    </span>
  );
}
