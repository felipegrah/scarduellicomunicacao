import { useEffect } from 'react'

const SUFFIX = 'Scarduelli Comunicação'

export default function useMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — ${SUFFIX}` : `${SUFFIX} — Comunicação que Respira Arte`
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description)
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    }
  }, [title, description])
}
