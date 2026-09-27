export default function Logo({ className = '' }) {
  return (
    <span className={`font-display text-xl font-extrabold tracking-tight ${className}`}>
      Scarduelli<span className="text-flare">.</span>
      <span className="ml-2 hidden align-middle text-[10px] font-medium uppercase tracking-[0.3em] text-fog sm:inline">
        Comunicação
      </span>
    </span>
  )
}
