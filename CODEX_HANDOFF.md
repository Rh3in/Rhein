# Rhein Portfolio Handoff

## Codex thread

- Title: Rhein的项目
- Thread ID: `01a064ef-7b6f-7782-a523-256be2a2c373`
- Local workspace on this machine: `C:\Users\Administrator\Documents\Codex\2026-09-03\qi`

## Portfolio

- Repository: `https://github.com/Rh3in/Rhein`
- Public site: `https://rh3in.github.io/Rhein/`
- Main files: `index.html`, `styles.css`, `script.js`

## Current project links

The portfolio currently shows demo links only. Public GitHub repository buttons for the first two project cards were removed so visitors cannot jump directly to the source repositories.

- BCA AICC demo currently points to `https://netinfo-aicc-demo-v2.vercel.app/`
- Emergency Command demo currently points to `https://rh3in.github.io/Intelligent-Emergency-Command-System/`

## Next private-environment step

1. Create private personal copies of the two project repositories.
2. Deploy the BCA AICC copy to a personal Vercel project, for example `rhein-bca-aicc-portfolio.vercel.app`.
3. Deploy the Emergency Command copy to a separate personal Vercel project or private-controlled static host.
4. Replace the two `Open Demo` URLs in `index.html` with the new personal demo URLs.
5. Push both `main` and `gh-pages`:

```bash
git push origin main
git push origin main:gh-pages
```

## Continue from another computer

```bash
git clone https://github.com/Rh3in/Rhein.git
cd Rhein
```

Open this folder in Codex and continue editing.
