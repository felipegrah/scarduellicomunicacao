import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { nav } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const linkCls = ({ isActive }) =>
    `relative py-2 text-sm font-medium transition-colors hover:text-white ${isActive ? 'text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-flare' : 'text-mist'}`

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-white/10 bg-ink/70 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" aria-label="Scarduelli Comunicação — início" className="flex min-h-11 items-center">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkCls}>
              {item.label}
            </NavLink>
          ))}
          <Button to="/contato" className="!px-5 !py-2.5">Novo projeto</Button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-0.5 bg-flare transition-all duration-300 ${open ? 'top-1.5 w-6 -rotate-45 bg-white' : 'top-3 w-4'}`} />
          </span>
        </button>
      </div>
    </header>

      {/* Menu mobile — fora do <header>: o backdrop-filter dele criaria um novo contêiner para elementos fixed */}
      <div
        id="menu-mobile"
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-ink/95 backdrop-blur-lg transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav aria-label="Menu mobile" className="flex h-full flex-col justify-between px-5 pb-10 pt-8">
          <ul className="space-y-1">
            {nav.map((item, i) => (
              <li key={item.to} style={{ transitionDelay: `${open ? i * 60 : 0}ms` }} className={`transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `flex min-h-14 items-center font-display text-4xl font-bold tracking-tight ${isActive ? 'text-flare' : 'text-white'}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contato" className="w-full">Vamos conversar</Button>
        </nav>
      </div>
    </>
  )
}
