import useMeta from '../components/useMeta.js'
import Button from '../components/Button.jsx'

export default function NotFound() {
  useMeta('Página não encontrada')
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-7xl flex-col justify-center px-5 pt-24 md:px-8">
      <p className="font-display text-8xl font-extrabold text-flare md:text-[12rem]">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold md:text-5xl">Essa pauta não saiu.</h1>
      <p className="mt-4 text-mist">A página que você procura não existe ou mudou de endereço.</p>
      <div className="mt-8"><Button to="/">Voltar ao início</Button></div>
    </section>
  )
}
