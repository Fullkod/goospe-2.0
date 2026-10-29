/** "Desarrollado por Fullkod" (CREA0004): el mismo crédito en todas las pantallas. */
export function FullkodCredit({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://fullkod.com/?ref=goospe"
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-1.5 text-[13px] text-muted transition hover:text-ink ${className}`}
    >
      Desarrollado por
      <img src="/brand/fullkod-symbol.svg" alt="" className="h-3.5 w-3.5 dark:hidden" />
      <img src="/brand/fullkod-symbol-reversed.svg" alt="" className="hidden h-3.5 w-3.5 dark:block" />
      <span className="font-semibold">Fullkod</span>
    </a>
  )
}
