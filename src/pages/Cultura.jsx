import useMeta from '../components/useMeta.js'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { values, team, clients } from '../data/site.js'

const IMG = 'https://www.scarduellicomunicacao.com.br/imagens/img_notc/notc_146.jpg'

export default function Cultura() {
  useMeta('Cultura & Manifesto', 'Valores, trajetória e equipe da Scarduelli Comunicação — 40 anos contando boas histórias.')
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pt-44">
        <Eyebrow>Cultura & Manifesto</Eyebrow>
        <h1 className="max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          A ponta do iceberg de <em className="font-light italic text-flare">40 anos</em> de trajetória.
        </h1>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-12 md:px-8 md:pb-32">
        <Reveal className="md:col-span-5">
          <div className="grain relative aspect-[4/5] overflow-hidden rounded-four">
            <img src={IMG} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-mist md:col-span-6 md:col-start-7">
          <p className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
            Nada é mais poderoso do que uma história bem contada.
          </p>
          <p>
            Essa certeza nasceu nas redações dos anos 80. O mestrado, nos anos 90, trouxe o rigor para acertar com base
            científica. A sala de aula, nos anos 2000, reforçou que o novo sempre vem com os mais jovens — e que
            comunicação clara, objetiva e criativa é o único caminho para criar conexão.
          </p>
          <p>
            Ao longo do tempo, construímos uma rede com centenas de profissionais em portais, jornais, TVs e rádios, que
            ajudam a multiplicar as boas histórias que contamos — muitas delas nascidas na cena cultural de
            Florianópolis.
          </p>
          <p className="border-l-2 border-flare pl-5 text-white">
            Ética, comprometimento e conhecimento: as palavras que guiam a Scarduelli.
            <span className="mt-2 block text-sm text-fog">— Paulo Scarduelli, fundador</span>
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-ink">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <Reveal><Eyebrow>Valores inegociáveis</Eyebrow></Reveal>
          <ul className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 100}>
                <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  {v.title}<span className="text-flare">.</span>
                </h2>
                <p className="mt-4 text-mist">{v.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <Eyebrow>Equipe</Eyebrow>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">Gente de redação.</h2>
        </Reveal>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-four border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 90} className="bg-night p-7">
              <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-flare to-flare-deep font-display text-xl font-extrabold text-ink">
                {p.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-flare">{p.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-mist">{p.bio}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <Reveal>
          <Eyebrow>Clientes</Eyebrow>
          <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">Quem caminha com a gente.</h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9">
          {clients.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 50} className="aspect-square overflow-hidden rounded-four bg-white p-2 grayscale transition duration-500 hover:grayscale-0">
              <img src={c.logo} alt={c.name} title={c.name} width="200" height="200" loading="lazy" decoding="async" className="h-full w-full object-contain" />
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand title="Vamos escrever o próximo capítulo juntos?" />
    </>
  )
}
