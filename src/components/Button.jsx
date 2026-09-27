import { Link } from 'react-router'

const styles = {
  // Texto escuro sobre laranja: contraste ~7:1 (WCAG AA/AAA)
  primary: 'bg-flare text-ink hover:bg-white',
  ghost: 'border border-white/25 text-white hover:border-flare hover:text-flare backdrop-blur-lg bg-white/5',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex min-h-11 items-center justify-center gap-2 rounded-four px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  return <a href={href} className={cls} {...rest}>{children}</a>
}

export function Arrow({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
