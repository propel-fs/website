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
taken from the product's own Tailwind config. Ink `#21232f`, primary `#4772ff`, Inter and JetBrains
Mono. Keep them in sync so the site and the product read as one thing.

## Structure

| Path | What it is |
|---|---|
| `src/data/site.ts` | All marketing copy. Content edits happen here, not in the pages. |
| `src/layouts/Layout.astro` | Shell, metadata, fonts, header and footer. |
| `src/components/` | `Section` and `CtaBand` are the page primitives. `CockpitMock` and `FindingMock` are the product visuals, built in HTML rather than screenshotted so they stay sharp and editable. |
| `src/pages/` | `index`, `platform`, `firms`, `security`, `demo`, `404`. |

## The demo form

`src/pages/demo.astro` POSTs to `PUBLIC_FORM_ENDPOINT`, a Google Apps Script web app that writes
each submission to a Sheet and emails a notification. Leads stay inside the Propel Workspace
account; no third party holds them.

With the variable unset the form validates, then tells the visitor it is not connected and points
them at the mailbox, so a missing endpoint fails loudly rather than silently swallowing a lead.

### Setting it up

1. Create a Google Sheet in the Propel Workspace account.
2. Extensions, then Apps Script. Replace the contents with `docs/apps-script.gs`.
3. Deploy, then New deployment, type **Web app**. Set *Execute as* to **Me** and *Who has access*
   to **Anyone**. Authorise when prompted.
4. Copy the `/exec` URL.
5. In the repo, Settings, Secrets and variables, Actions, Variables, add
   `PUBLIC_FORM_ENDPOINT` with that URL. It is not a secret: the URL ends up in the page source
   either way, since it is the form action.
6. Re-run the deploy workflow.

Editing the script later needs a **new deployment version**, not just a save. Saving alone leaves
the previously deployed version serving, which is the usual reason a change appears to do nothing.

The request is sent as `application/x-www-form-urlencoded` deliberately. That content type is
CORS-safelisted, so the browser skips the preflight `OPTIONS` request, which Apps Script cannot
answer. Sending JSON instead would fail in the browser while still working from curl.

Spam is handled by a honeypot field named `_company`. The script accepts and silently discards any
submission that arrives with it filled, so a bot sees success and does not retry.

## Deploying

`dist/` is a static bundle. Set `site` in `astro.config.mjs` to the real domain before launch, since
it drives canonical URLs and the sitemap.

## Claims

Copy is written against the product's actual build state. Nothing is claimed as shipped that is not:
payables, payroll and bills, and scheduled portal pulls are all absent by design. If that state
changes, `src/data/site.ts` is the one file to revisit.

Client names, figures and findings in the product mockups are illustrative and do not describe any
real company.
