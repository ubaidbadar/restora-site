/** A code that is not (or no longer) a table: the sticker was replaced, or the table removed. */
export default function TableNotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col justify-center px-6">
      <p className="font-slip text-ink-3">QR code</p>
      <h1 className="display mt-3 text-[clamp(2.5rem,11vw,4rem)]">This table&apos;s menu isn&apos;t here.</h1>
      <p className="mt-5 text-lg text-ink-2">The QR code may be old, or the restaurant has stopped taking orders here. Please ask a waiter for the menu.</p>
    </main>
  );
}
