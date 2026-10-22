import { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CartProvider from '@/components/table_menu/cart_provider';
import CartBar from '@/components/table_menu/cart_bar';
import DishCard from '@/components/table_menu/dish_card';
import MenuSkeleton from '@/components/table_menu/menu_skeleton';
import OffersCard from '@/components/table_menu/offers_card';
import { getTableMenu } from '@/utils/table_api';

// A table's own page: nothing to index, nothing to share.
export const metadata: Metadata = { title: 'Menu', robots: { index: false, follow: false } };

/**
 * What a guest's phone opens from a table's QR code: no app, no sign-in. The menu is rendered on the server, fresh on
 * every visit; only the cart and the call buttons run in the browser.
 */
export default function TablePage({ params }: PageProps<'/t/[code]'>) {
  return (
    <Suspense fallback={<MenuSkeleton />}>
      <TableMenuView params={params} />
    </Suspense>
  );
}

async function TableMenuView({ params }: Pick<PageProps<'/t/[code]'>, 'params'>) {
  const { code } = await params;
  const menu = await getTableMenu(code);
  if (!menu) notFound();

  const groupsById = new Map(menu.addonGroups.map((group) => [group._id, group]));
  const categories = menu.categories
    .map((category) => ({ ...category, dishes: menu.items.filter((dish) => dish.categoryId === category._id) }))
    .filter((category) => category.dishes.length > 0);

  return (
    <CartProvider code={code}>
      <div className="min-h-dvh pb-40">
        <header className="bg-night px-4 pt-[max(2rem,env(safe-area-inset-top))] pb-6 text-white">
          <div className="mx-auto flex max-w-xl items-center gap-3.5">
            {menu.restaurant.logo && (
              // eslint-disable-next-line @next/next/no-img-element -- the restaurant's own upload, from any host
              <img src={menu.restaurant.logo} alt="" className="size-14 shrink-0 rounded-control bg-paper object-contain p-1" />
            )}
            <div className="min-w-0">
              <h1 className="display truncate text-[2rem]">{menu.restaurant.name}</h1>
              <p className="mt-1.5 text-[0.95rem] text-moon">
                {menu.branch.name} · <span className="rounded-slip bg-haldi px-1.5 py-0.5 font-semibold text-ink">Table {menu.table.name}</span>
              </p>
            </div>
          </div>
        </header>

        {categories.length > 1 && (
          <nav aria-label="Menu sections" className="sticky top-0 z-10 border-b border-rule bg-canvas/95 backdrop-blur">
            <ul className="mx-auto flex max-w-xl gap-2 overflow-x-auto px-4 py-2.5 [scrollbar-width:none]">
              {categories.map((category) => (
                <li key={category._id} className="shrink-0">
                  <a href={`#c-${category._id}`} className="inline-flex min-h-10 items-center rounded-full border border-rule bg-paper px-4 text-[0.95rem] font-semibold text-ink-2 hover:border-indigo hover:text-indigo">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <main className="mx-auto flex max-w-xl flex-col gap-8 px-4 pt-6">
          {categories.length === 0 && <p className="rounded-panel bg-paper p-6 text-center text-ink-2">The menu is being updated. Please ask a waiter.</p>}
          {categories.map((category) => (
            <section key={category._id} id={`c-${category._id}`} aria-labelledby={`h-${category._id}`} className="scroll-mt-20">
              <h2 id={`h-${category._id}`} className="mb-3 text-[1.35rem] font-bold">
                {category.name}
              </h2>
              <ul className="flex flex-col gap-3">
                {category.dishes.map((dish) => (
                  <DishCard key={dish._id} dish={dish} groups={dish.addonGroupIds.map((id) => groupsById.get(id)).filter((group) => group !== undefined)} />
                ))}
              </ul>
            </section>
          ))}
          {categories.length > 0 && <OffersCard code={code} restaurantName={menu.restaurant.name} />}
        </main>
      </div>
      <CartBar tableName={menu.table.name} />
    </CartProvider>
  );
}
