import { Link } from 'react-router'
import { Arrow } from './Button.jsx'

export default function CaseCard({ item, size = 'md', priority = false }) {
  const aspect = size === 'lg' ? 'aspect-[4/5] md:aspect-[16/11]' : 'aspect-[4/5]'
  return (
    <Link to={`/portfolio/${item.slug}`} className="group block" aria-label={`Estudo de caso: ${item.title}`}>
      <div className={`grain relative overflow-hidden rounded-four bg-night-2 ${aspect}`}>
        <img
          src={item.image}
          alt=""
          width="800"
          height="450"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover brightness-[.8] saturate-[1.1] transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <ul className="absolute left-4 top-4 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <li key={t} className="rounded-four border border-white/15 bg-ink/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-lg">
              {t}
            </li>
          ))}
        </ul>
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-flare">{item.client}</p>
          <h3 className={`mt-2 font-display font-bold leading-tight tracking-tight ${size === 'lg' ? 'text-2xl md:text-4xl' : 'text-2xl'}`}>
            {item.title}
          </h3>
          <p className="mt-3 max-h-0 overflow-hidden text-sm text-mist opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-visible:max-h-24 group-focus-visible:opacity-100">
            {item.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Ver estudo de caso <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
