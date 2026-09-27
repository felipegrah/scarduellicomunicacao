import { Link } from 'react-router'
import Logo from './Logo.jsx'
import { contact, nav } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo className="text-3xl" />
          <p className="mt-5 max-w-sm text-mist">
            Comunicação que respira arte. Estratégia, imprensa e cultura a partir de Florianópolis para o Brasil.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-fog">Navegue</h2>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="inline-flex min-h-11 items-center text-mist transition-colors hover:text-flare">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-fog">Fale com a gente</h2>
          <ul className="space-y-1 text-mist">
            <li><a href={`mailto:${contact.email}`} className="inline-flex min-h-11 items-center break-all hover:text-flare">{contact.email}</a></li>
            <li><a href={contact.whatsapp} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center hover:text-flare">{contact.phone} · WhatsApp</a></li>
            <li><a href={contact.instagram} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center hover:text-flare">{contact.instagramHandle}</a></li>
            <li className="pt-2 text-fog">{contact.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-fog md:px-8">
          © {new Date().getFullYear()} Scarduelli Comunicação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
