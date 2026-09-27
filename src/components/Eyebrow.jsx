export default function Eyebrow({ children, className = '' }) {
  return (
    <p className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-flare ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-flare" />
      {children}
    </p>
  )
}
