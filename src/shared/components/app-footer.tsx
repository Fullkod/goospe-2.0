import Link from 'next/link'
import { FullkodCredit } from '@/shared/components/fullkod-credit'

const FOOTER_LINKS = [
  { href: '/places', label: 'Ciudades' },
  { href: '/panel', label: '¿Tienes un negocio?' },
  { href: '/about', label: 'Quiénes somos' },
  { href: '/help', label: 'Ayuda' },
  { href: '/contact', label: 'Contacto' },
  { href: '/terms', label: 'Términos' },
  { href: '/privacy', label: 'Privacidad' },
]

/**
 * Pie de la app: una sola línea compacta en tablet/web (el pie completo de 4 columnas es solo
 * del landing). En móvil no se muestra: en su lugar reserva el alto de la tab bar de <AppNav />
 * para que no tape el final del contenido (los enlaces de ayuda y legales están en Perfil).
 */
export function AppFooter() {
  return (
    <>
      <div className="mt-auto flex justify-center px-5 pb-4 pt-8 md:hidden">
        <FullkodCredit />
      </div>
      <div aria-hidden className="h-[calc(64px+var(--sab))] shrink-0 md:hidden" />
      <footer className="mt-auto hidden border-t border-line md:block">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5 text-[13px] text-muted lg:px-8">
          <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
            Goospe · Chile
            <FullkodCredit />
          </span>
          <nav aria-label="Enlaces del pie" className="flex flex-wrap gap-x-5 gap-y-1.5">
            {FOOTER_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-ink">{l.label}</Link>
            ))}
          </nav>
        </div>
      </footer>
    </>
  )
}
