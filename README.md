# Farooq Shaik — Cybersecurity & SOC Analyst Portfolio

A professional, static portfolio website built with plain HTML5, CSS3, and
JavaScript — no framework, no build step, no backend. Designed to present
an IT Support background alongside hands-on cybersecurity learning, for
SOC Analyst / Cybersecurity Analyst / Security Operations / IT Security
roles.

## File structure

```
cybersecurity-portfolio/
│
├── index.html          Full site content and structure
├── style.css            All styling (dark security-dashboard theme)
├── script.js             Mobile nav, scroll-reveal, active-link highlighting
├── README.md
├── resume.pdf            ← add your own resume here (see below)
└── assets/
    ├── favicon.svg
    └── og-cover.svg
```

## Running locally

No build step is required. Either:

- Open `index.html` directly in a browser, or
- Serve the folder with any static server, e.g.:
  ```bash
  npx serve .
  ```

## Adding your resume

The "Download Resume" buttons link to `./resume.pdf`. To make them work:

1. Export your resume as a PDF.
2. Name it exactly `resume.pdf`.
3. Place it in the **root** of this repository (same level as `index.html`).
4. Commit and push — no code changes are required.

## Replacing placeholder contact details

Open `index.html` and search for these placeholders:

- **Email** — currently `your-email@example.com`, used in two places
  (the contact card `href="mailto:..."` and the visible text). Replace both
  with your real email address.
- **LinkedIn** — currently a placeholder link (`https://www.linkedin.com/`)
  in the hero social icons and the contact section. Replace `href` with
  your actual LinkedIn profile URL, and update the visible
  `linkedin.com/in/your-profile` text to match.
- **Project links** — each project card's GitHub button currently points
  to `#`. Once a project has a real repository, replace the `href="#"`
  with the actual GitHub URL.

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
4. Click **Deploy**. Vercel will serve `index.html` from the repository root.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```
Accept the defaults for a static project (no build command, no output directory).

### Redeploying after changes

Any push to the connected branch (typically `main`) triggers an automatic
redeploy. To redeploy manually without a new commit, open the project in
the Vercel dashboard and use **Deployments → Redeploy**.

## Git commands to publish this repository

Run these from inside the project folder (the folder containing
`index.html`):

```bash
git init
git add .
git commit -m "Add cybersecurity portfolio site"
git branch -M main
git remote add origin https://github.com/farooqshaik94/cybersecurity-portfolio.git
git push -u origin main
```

If the repository already has a `README.md` on GitHub (initial commit),
pull first to avoid conflicts:

```bash
git pull origin main --allow-unrelated-histories
# resolve any conflicts, then:
git push -u origin main
```

## Notes on content accuracy

All experience, education, and skill labels reflect only what was
provided when this site was built — no employers, certifications, dates,
or achievements were invented. Skill levels are labelled (Fundamentals /
Working Knowledge / Hands-on Learning / Strong Practical) rather than
given fabricated percentage scores. Update `index.html` directly as
skills, certifications, and projects progress.

## Accessibility & SEO

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and a
  logical heading hierarchy (`h1` → `h2` → `h3`).
- Skip-to-content link, visible focus states, keyboard-operable navigation
  and mobile menu.
- `prefers-reduced-motion` respected — animations are disabled for users
  who request it.
- Title, meta description, Open Graph tags, and an SVG favicon are set in
  `index.html`'s `<head>`.
