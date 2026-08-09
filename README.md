# Mohammad Farooq Shaik — Cybersecurity & SOC Analyst Portfolio

A static portfolio site built with plain HTML5, CSS3, and JavaScript — no
framework, no build step, no backend. Content is based directly on the
current resume: professional IT/ITSM experience, completed certification,
and applied cybersecurity project work.

## File structure

```
cybersecurity-portfolio/
│
├── index.html          Full site content and structure
├── style.css             All styling (dark security-dashboard theme)
├── script.js              Mobile nav, scroll-reveal, active-link highlighting
├── README.md
├── resume.pdf             ← already included, your actual resume
└── assets/
    ├── favicon.svg
    └── og-cover.svg
```

## Running locally

No build step is required.

- Open `index.html` directly in a browser, or
- Serve the folder with any static server:
  ```bash
  npx serve .
  ```

## Resume

`resume.pdf` is already included at the repository root and is your
actual uploaded resume, unmodified. Both "Download Resume" buttons link
to `/resume.pdf` (an absolute path from the site root), so as long as
this file stays at the root alongside `index.html`, the buttons work as
soon as the repo is deployed. If you ever update your resume, replace
`resume.pdf` with the new file (same filename) and push — no code
changes are required.

Setup instructions like this used to be shown directly on the public
Resume section of the site. They've been removed from `index.html` —
visitors now only see "Download a copy of my current resume" and the
button — and moved here instead, since developer/deployment notes
shouldn't be visible to recruiters.

## Contact details already wired up

These are live in the site and do not need placeholders replaced:

- **Email:** `s.mohammadfarooq96@gmail.com` (`mailto:` link)
- **Phone:** `+971 55 817 2630` (`tel:` link)
- **LinkedIn:** `linkedin.com/in/mohammad-farooq-shaik` (opens in a new tab)
- **GitHub:** `github.com/farooqshaik94` (opens in a new tab)

If any of these change, update the corresponding `href` in `index.html`
(each contact method appears in the hero social row and again in the
Contact section).

## Adding real project repository links

The Cybersecurity Projects and Security Labs sections currently describe
the work without individual GitHub buttons, since no per-project
repository URLs were provided. Once a project has its own public repo,
add a button inside that project's `<article class="project-card">`:

```html
<div class="project-actions">
  <a href="https://github.com/farooqshaik94/your-repo" class="btn btn--small" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>
```

## Deploying to Vercel

### Option A — Vercel dashboard (recommended)

1. Push this repository to `farooqshaik94/cybersecurity-portfolio` on GitHub
   (see Git commands below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the
   `farooqshaik94/cybersecurity-portfolio` repository.
3. Use these exact settings:
   - **Framework Preset:** Other / None
   - **Build Command:** *(leave empty)*
   - **Output Directory:** *(leave empty)*
   - **Install Command:** *(leave empty)*
   - **Root Directory:** `./`
4. Click **Deploy**. Vercel serves `index.html` from the repository root.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```
Accept the defaults for a static project (no build command, no output directory).

### Redeploying after changes

Any push to the connected branch (typically `main`) triggers an automatic
redeploy. To redeploy manually, use **Deployments → Redeploy** in the
Vercel dashboard.

## Git commands

From inside the project folder (the folder containing `index.html`):

```bash
git init
git add .
git commit -m "Rebuild portfolio from resume content"
git branch -M main
git remote add origin https://github.com/farooqshaik94/cybersecurity-portfolio.git
git push -u origin main
```

If the remote already has commits (e.g. an initial README), pull first:

```bash
git pull origin main --allow-unrelated-histories
# resolve any conflicts, then:
git push -u origin main
```

## Content notes

All experience, certification, education, and project content is taken
directly from the resume and information supplied for this build — no
employer, role, certification, project, or achievement has been
invented. The Google Cybersecurity Professional Certificate is marked
"Completed"; the Gulf Cement Company (GCC) role is presented as current
professional experience (November 2025 – Present).

Resume project entries are split across "Cybersecurity Projects" (Python
automation, network traffic analysis, risk assessment — 3 cards) and
"Security Labs & Technical Work" (Linux permissions, user/group
management, ownership, incident analysis, traffic log analysis, and a
SIEM & security log analysis fundamentals summary — 6 cards).

Core Skills is organized into 7 categories, including a dedicated "SIEM
& Log Analysis" category. SIEM is represented only as fundamentals/
concepts (SIEM Fundamentals, Log Analysis, Event Correlation Concepts,
etc.) — specific SIEM products (Wazuh, Splunk, Microsoft Sentinel,
QRadar, Elastic Security, etc.) are deliberately NOT listed anywhere on
the site, since hands-on experience with a named platform hasn't been
confirmed. If that changes, add the specific tool to the "SIEM & Log
Analysis" skill category and, if a lab was completed with it, to
Security Labs & Technical Work — but only once confirmed.

## Accessibility & SEO

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a
  logical heading hierarchy.
- Skip-to-content link, visible focus states, keyboard-operable navigation
  and mobile menu.
- `prefers-reduced-motion` respected.
- Title, meta description, Open Graph tags, and an SVG favicon are set in
  `index.html`'s `<head>`.
