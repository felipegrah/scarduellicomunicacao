import { useSearchParams } from 'react-router'
import useMeta from '../components/useMeta.js'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import CaseCard from '../components/CaseCard.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { cases, categories } from '../data/site.js'

export default function Portfolio() {
  useMeta('Portfólio', 'Estudos de caso em arte, eventos, festivais e assessoria de imprensa em Santa Catarina.')
  const [params, setParams] = useSearchParams()
  const active = categories.includes(params.get('filtro')) ? params.get('filtro') : 'Todos'
  const list = active === 'Todos' ? cases : cases.filter((c) => c.tags.includes(active))

  const select = (cat) => setParams(cat === 'Todos' ? {} : { filtro: cat }, { replace: true, preventScrollReset: true })

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-44">
        <Eyebrow>Portfólio & Casos</Eyebrow>
        <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Cultura, marcas e <em className="font-light italic text-flare">repercussão</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-mist">
          Festivais ao ar livre, orquestras em turnê internacional, vinícolas e instituições. Uma curadoria dos
          projetos que colocamos no centro da conversa.
        </p>
      </section>

      <div className="sticky top-16 z-30 border-y border-line bg-night/80 backdrop-blur-lg md:top-20">
        <div role="toolbar" aria-label="Filtrar portfólio" className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 md:px-8 [scrollbar-width:none]">
          {categories.map((cat) => {
            const count = cat === 'Todos' ? cases.length : cases.filter((c) => c.tags.includes(cat)).length
            const on = cat === active
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={on}
                onClick={() => select(cat)}
                className={`flex min-h-11 shrink-0 items-center gap-2 rounded-four border px-4 text-sm font-semibold transition-colors duration-300 ${
                  on ? 'border-flare bg-flare text-ink' : 'border-white/15 text-mist hover:border-white/40 hover:text-white'
                }`}
              >
                {cat}
                <span className={`text-xs ${on ? 'text-ink/70' : 'text-fog'}`}>{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      <section aria-live="polite" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <p className="sr-only">{list.length} projetos em {active}</p>
        <ul key={active} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <li key={c.slug} className={`animate-fade-up ${i === 0 && list.length > 2 ? 'sm:col-span-2' : ''}`} style={{ animationDelay: `${i * 70}ms` }}>
              <CaseCard item={c} size={i === 0 && list.length > 2 ? 'lg' : 'md'} priority={i < 2} />
            </li>
          ))}
        </ul>
      </section>

      <CtaBand title="Seu projeto pode ser o próximo." />
    </>
  )
}
