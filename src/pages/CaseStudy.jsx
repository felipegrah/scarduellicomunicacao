import { Link, useParams } from 'react-router'
import useMeta from '../components/useMeta.js'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import CaseCard from '../components/CaseCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { Arrow } from '../components/Button.jsx'
import NotFound from './NotFound.jsx'
import { cases } from '../data/site.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const index = cases.findIndex((c) => c.slug === slug)
  const item = cases[index]
  useMeta(item?.title ?? 'Projeto não encontrado', item?.excerpt)
  if (!item) return <NotFound />

  const next = cases[(index + 1) % cases.length]
  const related = cases.filter((c) => c.slug !== slug && c.tags.some((t) => item.tags.includes(t))).slice(0, 2)

  return (
    <article>
      <header className="grain relative flex min-h-[85svh] items-end overflow-hidden bg-ink">
        <img src={item.image} alt="" fetchPriority="high" className="absolute inset-0 h-full w-full animate-kenburns object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-ink/50 to-ink/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
          <nav aria-label="Trilha" className="mb-8 text-sm text-fog">
            <Link to="/portfolio" className="inline-flex min-h-11 items-center gap-2 hover:text-flare">
              <Arrow className="rotate-180" /> Portfólio
            </Link>
          </nav>
          <Eyebrow>{item.client}</Eyebrow>
          <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            {item.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-mist md:text-xl">{item.excerpt}</p>
        </div>
      </header>

      <div className="border-b border-line">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 text-sm md:grid-cols-4 md:px-8">
          <div><dt className="text-fog">Cliente</dt><dd className="mt-1 font-semibold">{item.client}</dd></div>
          <div><dt className="text-fog">Frentes</dt><dd className="mt-1 font-semibold">{item.tags.join(' · ')}</dd></div>
          <div><dt className="text-fog">Ano</dt><dd className="mt-1 font-semibold">{item.year}</dd></div>
          <div><dt className="text-fog">Local</dt><dd className="mt-1 font-semibold">Santa Catarina</dd></div>
        </dl>
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <Reveal className="md:col-span-4">
          <Eyebrow>O desafio</Eyebrow>
        </Reveal>
        <Reveal delay={100} className="md:col-span-8">
          <p className="font-display text-2xl font-medium leading-snug tracking-tight md:text-4xl">{item.challenge}</p>
        </Reveal>

        <Reveal className="md:col-span-4">
          <Eyebrow>A estratégia</Eyebrow>
        </Reveal>
        <ol className="space-y-px overflow-hidden rounded-four border border-line bg-line md:col-span-8">
          {item.strategy.map((s, i) => (
            <Reveal as="li" key={s} delay={i * 90} className="flex gap-6 bg-night p-6 md:p-8">
              <span className="font-display text-sm font-bold text-flare">0{i + 1}</span>
              <p className="text-lg text-mist">{s}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="md:col-span-4">
          <Eyebrow>Destaques</Eyebrow>
        </Reveal>
        <ul className="grid gap-5 sm:grid-cols-3 md:col-span-8">
          {item.highlights.map((h, i) => (
            <Reveal as="li" key={h} delay={i * 90} className="rounded-four border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg">
              <span aria-hidden="true" className="block h-1 w-8 bg-flare" />
              <p className="mt-5 font-display text-lg font-bold leading-snug">{h}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="md:col-span-8 md:col-start-5">
          <a href={item.source} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-2 font-semibold text-white hover:text-flare">
            Ler o release original <Arrow />
          </a>
        </Reveal>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold">Projetos relacionados</h2>
          <ul className="grid gap-5 sm:grid-cols-2">
            {related.map((c) => <li key={c.slug}><CaseCard item={c} /></li>)}
          </ul>
        </section>
      )}

      <Link to={`/portfolio/${next.slug}`} className="group block border-t border-line bg-ink">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-14 md:px-8 md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-fog">Próximo projeto</p>
            <p className="mt-3 font-display text-3xl font-extrabold tracking-tight transition-colors group-hover:text-flare md:text-6xl">{next.title}</p>
          </div>
          <Arrow className="!h-8 !w-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2 md:!h-12 md:!w-12" />
        </div>
      </Link>

      <CtaBand />
    </article>
  )
}
