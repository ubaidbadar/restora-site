/** The shape of the menu while it loads: the header band and a few dish cards. */
export default function MenuSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading the menu" className="min-h-dvh">
      <div className="h-36 bg-night" />
      <div className="mx-auto flex max-w-xl flex-col gap-3 px-4 pt-6">
        <div className="h-7 w-40 animate-pulse rounded-control bg-rule" />
        {[0, 1, 2, 3, 4].map((row) => (
          <div key={row} className="h-28 animate-pulse rounded-panel bg-paper" />
        ))}
      </div>
    </div>
  );
}
