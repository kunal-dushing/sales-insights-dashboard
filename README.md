Flipkart Big Billion Days — Sales & BI Dashboard

🔗 **Live dashboard:https://kd-flipkart-sales-insights-dashboard.vercel.app/



A responsive sales analytics website inspired by an electronics sales dashboard concept. Explore key business measures and detailed analysis across the campaign in one place.

> **Demo data notice:** All figures in this project are illustrative sample data for demonstration. They are not official Flipkart sales data.

## Dashboard sections

- **Overview:** headline KPIs, revenue trend, category mix, top products, and regional highlights
- **Sales:** daily performance, channels, order volume, and average order value
- **Products:** product leaderboard, units sold, and category comparisons
- **Inventory:** stock health, low-stock items, and replenishment watchlist
- **Customers:** acquisition trends and customer segments
- **Regions:** sales comparison across Indian zones and states
- **Payments:** payment method mix and transaction success
- **Marketing:** campaign revenue, ad spend, and return on ad spend
- **Returns:** return reasons, refund values, and resolution times
- **Profitability:** category margins, gross profit, and discounts
- **Forecasts:** illustrative weekly sales projection

## Built with

- Next.js and React
- TypeScript
- CSS
- Lucide icons
- GitHub for source control
- Vercel for deployment

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS).
2. Open PowerShell or a terminal in this project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

To create a production build locally, run `npm run build`.

## Deployments

The `main` branch is connected to Vercel. Push a commit to GitHub to trigger a deployment. Vercel detects the Next.js framework and uses the project defaults.

## Updating the data

The sample metrics and chart data are defined in `app/page.tsx`. Replace them with verified, appropriately cleaned data before using the dashboard for business decisions. Do not commit private customer data, secrets, or API keys to GitHub. For live or frequently updated data, connect a secure server-side data source and store credentials as Vercel environment variables.

## Project structure

- `app/page.tsx` — dashboard pages, interactions, and sample data
- `app/globals.css` — colors, layout, and responsive styling
- `app/layout.tsx` — document metadata and global styles
- `next.config.ts` — Next.js configuration
- `package.json` — dependencies and project scripts
