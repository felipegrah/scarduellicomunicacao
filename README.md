# Scarduelli Comunicação — Redesign

Protótipo do novo site (PRD v1.0 · Design System *Artisanal Synergy*). Vite 8 + React 19 + React Router 8 + Tailwind CSS v4. Requer **Node 24** (versão fixada em `.nvmrc`).

```bash
nvm use          # lê o .nvmrc (24.21.0)
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

## Rotas
| Rota | Página |
| --- | --- |
| `/` | Home — hero/manifesto, serviços modulares, DNA + indicadores, portfólio, processo, clientes, CTA |
| `/portfolio` | Portfólio com filtros (Arte, Eventos, PR, Festivais) — filtro fica na URL (`?filtro=PR`) |
| `/portfolio/:slug` | Estudo de caso (Fase 2B) |
| `/cultura` | Manifesto, valores, equipe, clientes (Fase 2C) |
| `/contato` | Briefing + Press Room (Fase 2C) |

## Onde editar
- **Conteúdo:** `src/data/site.js` (serviços, cases, equipe, clientes, contato).
- **Tokens de design:** bloco `@theme` em `src/index.css`.

## Pendências para produção
- As imagens são carregadas direto de `scarduellicomunicacao.com.br`. Baixar, converter para WebP/AVIF e servir localmente.
- O formulário abre o app de e-mail (`mailto:`). Ligar a um back-end (Formspree, Resend, etc.).
- Cases: incluir métricas reais (clipping, alcance, público) e depoimentos dos clientes.
- `public/_redirects` cobre SPA na Netlify; em outras hospedagens configure o fallback para `index.html`.
