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
├── resume.pdf             ← add your resume PDF here (see below)
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

## Adding your resume

Both "Download Resume" buttons link to `/resume.pdf` (an absolute path
from the site root). To make them work:

1. Export your resume as a PDF.
2. Name it exactly `resume.pdf`.
3. Place it in the **root** of this repository, alongside `index.html`.
4. Commit and push — no code changes are required.

Until `resume.pdf` is added, the buttons will 404 rather than silently
fail — add the file before sharing the link with recruiters.

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
directly from the resume supplied for this build — no employer, role,
certification, project, or achievement has been invented. The Google
Cybersecurity Professional Certificate is marked "Completed"; the
Gulf Cement Company (GCC) role is presented as current professional
experience (November 2025 – Present); the eight resume project entries
are split across "Cybersecurity Projects" (Python automation, network
traffic analysis, risk assessment) and "Security Labs & Technical Work"
(Linux permissions, user/group management, ownership, incident and
traffic log analysis).

## Accessibility & SEO

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a
  logical heading hierarchy.
- Skip-to-content link, visible focus states, keyboard-operable navigation
  and mobile menu.
- `prefers-reduced-motion` respected.
- Title, meta description, Open Graph tags, and an SVG favicon are set in
  `index.html`'s `<head>`.
