# Propel marketing website

Astro 7 + Tailwind 4. Static output, no runtime framework.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Design system

The palette, type scale, radii and shadows in `src/styles/global.css` are the app's own tokens,
taken from `src/app/templates/base.html`. Ink `#21232f`, primary `#4772ff`, Inter and JetBrains
Mono. Keep them in sync so the site and the product read as one thing.

## Structure

| Path | What it is |
|---|---|
| `src/data/site.ts` | All marketing copy. Content edits happen here, not in the pages. |
| `src/layouts/Layout.astro` | Shell, metadata, fonts, header and footer. |
| `src/components/` | `Section` and `CtaBand` are the page primitives. `CockpitMock` and `FindingMock` are the product visuals, built in HTML rather than screenshotted so they stay sharp and editable. |
| `src/pages/` | `index`, `platform`, `firms`, `security`, `demo`, `404`. |

## The demo form

`src/pages/demo.astro` POSTs to `PUBLIC_FORM_ENDPOINT`. Set it to a Formspree, Basin, Lambda or
CRM webhook URL. With it unset the form validates, then tells the visitor it is not connected and
points them at the mailbox, so a missing endpoint fails loudly rather than silently swallowing a
lead.

There is a honeypot field named `_company`; reject any submission that arrives with it filled.

## Deploying

`dist/` is a static bundle. Set `site` in `astro.config.mjs` to the real domain before launch, since
it drives canonical URLs and the sitemap.

## Claims

Copy is written against the engine's actual build state. Nothing on the site is claimed as shipped
that the Alchemist prototype tags Roadmap: payables, payroll and bills, and scheduled portal pulls
are all absent by design. If the engine's state changes, `src/data/site.ts` is the one file to
revisit.
