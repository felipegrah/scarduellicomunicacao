import Reveal from './Reveal.jsx'
import Button, { Arrow } from './Button.jsx'
import { whatsappLink } from '../data/site.js'

export default function CtaBand({
  title = 'Tem uma história que merece ser contada?',
  text = 'Festivais, marcas, mostras e projetos que querem repercussão de verdade. Vamos conversar.',
}) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-flare-deep/25 blur-[120px]" />
      <div aria-hidden="true" className="absolute -bottom-52 -left-32 h-[28rem] w-[28rem] rounded-full bg-flare/10 blur-[120px]" />
      <Reveal className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <h2 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-mist">{text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/contato">Enviar briefing <Arrow /></Button>
          <Button variant="ghost" href={whatsappLink('Olá! Quero conversar sobre um novo projeto.')} target="_blank" rel="noopener">
            Chamar no WhatsApp
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
