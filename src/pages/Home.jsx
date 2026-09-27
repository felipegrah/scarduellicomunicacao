import { Link } from 'react-router'
import useMeta from '../components/useMeta.js'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import Button, { Arrow } from '../components/Button.jsx'
import CaseCard from '../components/CaseCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { services, stats, cases, clients, process } from '../data/site.js'

const HERO_IMG = 'https://www.scarduellicomunicacao.com.br/imagens/img_notc/notc_145.jpg'
const DNA_IMG = 'https://www.scarduellicomunicacao.com.br/imagens/img_notc/notc_144.jpg'

export default function Home() {
  useMeta(null, 'Agência boutique de estratégia, assessoria de imprensa e comunicação cultural em Florianópolis/SC.')
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <Dna />
      <Featured />
      <Process />
      <Clients />
      <CtaBand />
    </>
  )
}

function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <img
        src={HERO_IMG}
        alt="Público no Floripa Sunset Cultural, na Beira-Mar Continental"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full animate-kenburns object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-ink/60 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <Eyebrow>Florianópolis · Santa Catarina</Eyebrow>
        <h1 className="font-display text-[clamp(2.75rem,9vw,8.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
          Comunicação
          <br />
          que <em className="font-light italic text-flare">respira</em> arte.
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-mist md:col-span-6 md:text-xl">
            Estratégia, assessoria de imprensa e cultura. Contamos a história da sua marca, do seu festival ou da sua
            mostra para quem precisa ouvi-la — <span className="text-white">o pulso de Florianópolis</span>.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-6 md:justify-end">
            <Button to="/portfolio">Ver portfólio <Arrow /></Button>
            <Button to="/contato" variant="ghost">Vamos conversar</Button>
          </div>
        </div>
      </div>

      <a href="#servicos" aria-label="Rolar para serviços" className="absolute bottom-6 left-1/2 hidden h-11 w-11 -translate-x-1/2 items-center justify-center md:flex">
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-flare to-transparent" />
      </a>
    </section>
  )
}

function Ticker() {
  const words = ['Assessoria de Imprensa', 'Festivais', 'Arte', 'Estratégia', 'Eventos Culturais', 'Conteúdo', 'Relações com a Mídia']
  const row = [...words, ...words]
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line bg-night py-5">
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-bold tracking-tight text-white/80 md:text-3xl">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w}
            <span className="h-2 w-2 rounded-full bg-flare" />
          </span>
        ))}
      </div>
    </div>
  )
}

function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-7">
          <Eyebrow>O que fazemos</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
            Serviços modulares, <span className="text-fog">uma só narrativa.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="text-mist md:col-span-5">
          Monte o pacote que o seu momento pede. Cada frente conversa com as outras — imprensa, digital, eventos e
          conteúdo trabalhando pela mesma história.
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-px overflow-hidden rounded-four border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal as="li" key={s.id} delay={i * 90} className="group relative flex flex-col bg-night p-7 transition-colors duration-500 hover:bg-night-2 md:p-8">
            <span className="font-display text-sm font-bold text-flare">{s.number}</span>
            <h3 className="mt-10 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-mist">{s.text}</p>
            <ul className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-fog">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2"><span aria-hidden="true" className="text-flare">—</span>{it}</li>
              ))}
            </ul>
            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-flare transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

function Dna() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-5">
          <div className="grain relative aspect-[4/5] overflow-hidden rounded-four">
            <img src={DNA_IMG} alt="Camerata Florianópolis em viagem para o Java Jazz Festival" loading="lazy" decoding="async" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm text-mist">
              Camerata Florianópolis a caminho do Java Jazz Festival, em Jacarta.
            </p>
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pl-8">
          <Reveal>
            <Eyebrow>Nosso DNA</Eyebrow>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Onde a estratégia <br className="hidden md:block" />encontra a <em className="font-light italic text-flare">alma</em>.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
              Das redações dos anos 80 veio a certeza de que nada é mais poderoso que uma história bem contada. Do
              mestrado, o rigor para acertar com base. Hoje, unimos a disciplina da comunicação corporativa à
              efervescência da cena artística do Sul do país.
            </p>
            <Link to="/cultura" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-white hover:text-flare">
              Conheça nossa cultura <Arrow />
            </Link>
          </Reveal>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
                    {s.value}<span className="text-flare">{s.suffix}</span>
                  </span>
                  <p className="mt-2 max-w-[14rem] text-sm text-fog">{s.label}</p>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Featured() {
  const [first, ...rest] = cases
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal>
          <Eyebrow>Portfólio recente</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
            Histórias que <br className="hidden md:block" />viraram notícia.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Button to="/portfolio" variant="ghost">Todo o portfólio <Arrow /></Button>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <CaseCard item={first} size="lg" />
        </Reveal>
        <div className="grid gap-5 md:col-span-5">
          {rest.slice(0, 2).map((c, i) => (
            <Reveal key={c.slug} delay={(i + 1) * 120}>
              <CaseCard item={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="border-y border-line bg-night-2/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-28">
        <Reveal>
          <Eyebrow>Como trabalhamos</Eyebrow>
          <h2 className="max-w-2xl font-display text-3xl font-extrabold tracking-tight md:text-5xl">Do briefing ao clipping, sem ruído.</h2>
        </Reveal>
        <ol className="mt-14 grid gap-8 md:grid-cols-5 md:gap-6">
          {process.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 90} className="relative border-t border-line pt-6">
              <span aria-hidden="true" className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-flare" />
              <span className="text-xs font-semibold tracking-[0.3em] text-fog">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug">{p.step}</h3>
              <p className="mt-2 text-sm text-mist">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section aria-labelledby="clientes-titulo" className="py-24 md:py-28">
      <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
        <Eyebrow>Quem confia</Eyebrow>
        <h2 id="clientes-titulo" className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">Marcas, instituições e artistas.</h2>
      </Reveal>
      <div className="mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="marquee flex w-max gap-5">
          {[...clients, ...clients].map((c, i) => (
            <li key={i} aria-hidden={i >= clients.length} className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-four bg-white p-2 grayscale transition duration-500 hover:grayscale-0 md:h-32 md:w-32">
              <img src={c.logo} alt={c.name} width="200" height="200" loading="lazy" decoding="async" className="h-full w-full object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
