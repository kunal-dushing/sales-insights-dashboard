# MarketPulse — Sales Insights Dashboard

A responsive sales analytics website inspired by the dashboard screenshots. It currently uses illustrative sample figures. Replace these with verified data before presenting the figures as real sales results.

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS).
2. Open a terminal in this project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal (usually `http://localhost:3000`).

## Publish with GitHub and Vercel

1. Create a new empty repository on GitHub. Do not add a README, license, or `.gitignore` there; this folder already contains them.
2. In this folder, run `git init`, `git add .`, and `git commit -m "Build sales insights dashboard"`.
3. Copy the repository's HTTPS URL from GitHub. Run `git branch -M main`, then `git remote add origin YOUR_REPOSITORY_URL`, then `git push -u origin main`.
4. Sign in at [Vercel](https://vercel.com/) with GitHub and choose **Add New → Project**.
5. Import this repository. Keep the detected Next.js settings and select **Deploy**.
6. Vercel will provide a public website URL. Future pushes to `main` will create production deployments; pull requests get preview deployments.

## Replace the sample figures

The current charts and product lists are defined near the top of `app/page.tsx`. Replace those illustrative arrays and KPI values with your cleaned sales data. Keep customer information private; do not commit secrets, personal data, or private API keys to GitHub. For a large or frequently updated dataset, use a server-side data source and store credentials as Vercel environment variables.

## Project structure

- `app/page.tsx` — dashboard UI and sample data
- `app/globals.css` — layout, colors, responsive styling
- `app/layout.tsx` — document metadata and global CSS
- `package.json` — Next.js scripts and dependencies
