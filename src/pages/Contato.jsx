import { useState } from 'react'
import useMeta from '../components/useMeta.js'
import Eyebrow from '../components/Eyebrow.jsx'
import Button, { Arrow } from '../components/Button.jsx'
import { contact, whatsappLink } from '../data/site.js'

const TYPES = ['Nova marca / Corporativo', 'Festival ou evento cultural', 'Arte / Mostra / Espetáculo', 'Imprensa / Pauta']

const field =
  'mt-2 block min-h-12 w-full rounded-four border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-fog focus:border-flare focus:outline-none'

export default function Contato() {
  useMeta('Contato & Briefing', 'Envie seu briefing ou fale com a assessoria de imprensa da Scarduelli Comunicação.')
  const [type, setType] = useState(TYPES[0])
  const [sent, setSent] = useState(false)

  // Sem back-end por enquanto: monta um e-mail com o briefing preenchido.
  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const body = [
      `Nome: ${data.get('nome')}`,
      `E-mail: ${data.get('email')}`,
      `Telefone: ${data.get('telefone') || '-'}`,
      `Tipo de projeto: ${type}`,
      '',
      data.get('mensagem'),
    ].join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`[Site] ${type}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pt-44">
        <Eyebrow>Contato & Briefing</Eyebrow>
        <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Conte a sua <em className="font-light italic text-flare">história</em>.
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 pb-24 md:grid-cols-12 md:px-8 md:pb-32">
        <form onSubmit={onSubmit} className="md:col-span-7" noValidate={false}>
          <fieldset>
            <legend className="text-sm font-semibold text-mist">Que tipo de projeto?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <label key={t} className={`flex min-h-11 cursor-pointer items-center rounded-four border px-4 text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-flare ${t === type ? 'border-flare bg-flare text-ink' : 'border-white/15 text-mist hover:border-white/40'}`}>
                  <input type="radio" name="tipo" value={t} checked={t === type} onChange={() => setType(t)} className="sr-only" />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-mist">
              Nome
              <input name="nome" required autoComplete="name" className={field} />
            </label>
            <label className="block text-sm font-semibold text-mist">
              E-mail
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className="block text-sm font-semibold text-mist sm:col-span-2">
              Telefone / WhatsApp <span className="font-normal text-fog">(opcional)</span>
              <input name="telefone" type="tel" autoComplete="tel" inputMode="tel" className={field} />
            </label>
            <label className="block text-sm font-semibold text-mist sm:col-span-2">
              Sobre o projeto
              <textarea name="mensagem" required rows={6} placeholder="Objetivo, datas, público, o que você imagina…" className={`${field} resize-y`} />
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-four bg-flare px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-white">
              Enviar briefing <Arrow />
            </button>
            <p role="status" className="text-sm text-fog">
              {sent ? 'Abrimos seu app de e-mail com o briefing pronto para envio.' : 'Respondemos em até 1 dia útil.'}
            </p>
          </div>
        </form>

        <aside className="space-y-6 md:col-span-4 md:col-start-9">
          <div className="rounded-four border border-white/10 bg-white/[0.03] p-7 backdrop-blur-lg">
            <h2 className="font-display text-xl font-bold">Novos projetos</h2>
            <p className="mt-2 text-sm text-mist">Prefere conversar? Fale direto com a gente.</p>
            <div className="mt-5 flex flex-col gap-3">
              <Button href={whatsappLink('Olá! Quero conversar sobre um novo projeto.')} target="_blank" rel="noopener">WhatsApp {contact.phone}</Button>
              <Button variant="ghost" href={`mailto:${contact.email}`} className="break-all !normal-case !tracking-normal">{contact.email}</Button>
            </div>
          </div>

          <div id="imprensa" className="rounded-four border border-flare/40 bg-flare/[0.06] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flare">Press Room</p>
            <h2 className="mt-3 font-display text-xl font-bold">É jornalista?</h2>
            <p className="mt-2 text-sm text-mist">
              Releases, pautas exclusivas, fotos em alta e porta-vozes dos nossos clientes. Atendimento ágil para
              redações.
            </p>
            <ul className="mt-5 space-y-1 text-sm">
              <li>
                <a href={`mailto:${contact.email}?subject=${encodeURIComponent('[Imprensa] Solicitação de pauta')}`} className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-flare">
                  Solicitar material <Arrow />
                </a>
              </li>
              <li>
                <a href="https://www.scarduellicomunicacao.com.br/noticias" target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-flare">
                  Últimos releases <Arrow />
                </a>
              </li>
            </ul>
          </div>

          <p className="flex flex-wrap items-center gap-x-1 px-1 text-sm text-fog">
            {contact.city} · <a href={contact.instagram} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center hover:text-flare">{contact.instagramHandle}</a>
          </p>
        </aside>
      </section>
    </>
  )
}
