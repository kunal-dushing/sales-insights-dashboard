"use client";

import { useMemo, useState } from "react";
import { Activity, ArrowDownRight, ArrowUpRight, BarChart3, Bell, ChevronDown, CircleHelp, CreditCard, Download, Grid2X2, Laptop, Map, Menu, MoreHorizontal, Package, Search, Settings2, ShoppingBag, Sparkles, Users, WalletCards, X } from "lucide-react";

const navItems = [
  { label: "Overview", icon: Grid2X2 }, { label: "Sales", icon: BarChart3 }, { label: "Products", icon: Package },
  { label: "Customers", icon: Users }, { label: "Regions", icon: Map }, { label: "Payments", icon: CreditCard },
  { label: "Profitability", icon: WalletCards },
];
const dailySales = [38, 46, 42, 56, 49, 64, 57, 75, 68, 82, 71, 91, 78, 96, 86, 104, 94, 117, 101, 125, 111, 137, 120, 145, 132, 159, 144, 170, 153, 186];
const categories = [{ name: "Mobiles", value: 34, color: "#625bf6", sales: "₹42.8L" }, { name: "Laptops", value: 26, color: "#29b8a5", sales: "₹32.7L" }, { name: "Audio", value: 18, color: "#ffad5c", sales: "₹22.6L" }, { name: "Wearables", value: 13, color: "#ec6d9c", sales: "₹16.3L" }, { name: "Accessories", value: 9, color: "#a6b2c6", sales: "₹11.3L" }];
const products = [{ name: "Galaxy S24 Ultra", group: "Mobiles · Samsung", sales: "₹18.4L", units: "284", change: "+18.2%", icon: "📱" }, { name: "MacBook Air M3", group: "Laptops · Apple", sales: "₹14.2L", units: "96", change: "+12.6%", icon: "💻" }, { name: "Sony WH-1000XM5", group: "Audio · Sony", sales: "₹8.7L", units: "173", change: "+9.4%", icon: "🎧" }, { name: "Apple Watch Series 10", group: "Wearables · Apple", sales: "₹7.9L", units: "126", change: "+7.8%", icon: "⌚" }];
const regions = [{ name: "Maharashtra", value: 82 }, { name: "Karnataka", value: 67 }, { name: "Delhi NCR", value: 58 }, { name: "Tamil Nadu", value: 49 }, { name: "Telangana", value: 43 }];

function LineChart({ data }: { data: number[] }) {
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 700},${180 - v}`).join(" ");
  const area = `0,180 ${points} 700,180`;
  return <svg className="line-chart" viewBox="0 0 700 190" preserveAspectRatio="none" role="img" aria-label="Revenue trend line chart">
    <defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#655df5" stopOpacity=".2"/><stop offset="100%" stopColor="#655df5" stopOpacity="0"/></linearGradient></defs>
    {[35, 80, 125, 170].map(y => <g key={y}><line x1="0" x2="700" y1={y} y2={y} stroke="#edf0f6" strokeDasharray="4 5"/><text x="0" y={y - 5} className="chart-axis">₹{Math.round((180-y)/3)}L</text></g>)}
    <polygon points={area} fill="url(#fill)"/><polyline points={points} fill="none" stroke="#655df5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    {["01 Oct", "06 Oct", "12 Oct", "18 Oct", "24 Oct", "30 Oct"].map((d, i) => <text key={d} x={i * 136} y="189" className="chart-axis">{d}</text>)}
    <circle cx="700" cy={180-data[data.length-1]} r="5" fill="#fff" stroke="#655df5" strokeWidth="3"/>
  </svg>;
}

function Donut() {
  let offset = 0;
  return <svg viewBox="0 0 140 140" className="donut" role="img" aria-label="Sales by product category">
    <circle cx="70" cy="70" r="53" fill="none" stroke="#f0f1f6" strokeWidth="17"/>
    {categories.map(c => { const dash = c.value / 100 * 333; const node = <circle key={c.name} cx="70" cy="70" r="53" fill="none" stroke={c.color} strokeWidth="17" strokeDasharray={`${dash} ${333-dash}`} strokeDashoffset={-offset} transform="rotate(-90 70 70)"/>; offset += dash; return node; })}
    <text x="70" y="67" textAnchor="middle" className="donut-total">₹1.2Cr</text><text x="70" y="84" textAnchor="middle" className="donut-caption">total sales</text>
  </svg>;
}

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [period, setPeriod] = useState("Last 30 days");
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const filteredProducts = useMemo(() => products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) && (categoryFilter === "All categories" || p.group.startsWith(categoryFilter))), [search, categoryFilter]);
  const showNotice = (message: string) => { setNotice(message); window.setTimeout(() => setNotice(""), 3200); };

  return <main className="app-shell">
    <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
      <div className="brand"><span className="brand-mark"><Activity size={19}/></span><span>market<span className="brand-accent">pulse</span><small>INSIGHTS PLATFORM</small></span><button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={19}/></button></div>
      <div className="workspace-label">WORKSPACE</div><button className="workspace-switch"><span className="workspace-avatar">B</span><span>Big Billion Days<small>Business account</small></span><ChevronDown size={15}/></button>
      <div className="nav-label">ANALYTICS</div><nav>{navItems.map(({ label, icon: Icon }) => <button key={label} className={`nav-link ${active === label ? "active" : ""}`} onClick={() => { setActive(label); setMenuOpen(false); }}><Icon size={17}/><span>{label}</span>{label === "Overview" && <span className="nav-active-dot"/>}</button>)}</nav>
      <div className="nav-label tools-label">TOOLS</div><button className="nav-link" onClick={() => showNotice("Reports are coming soon.")}><Download size={17}/><span>Reports</span></button><button className="nav-link" onClick={() => showNotice("Settings are coming soon.")}><Settings2 size={17}/><span>Settings</span></button>
      <div className="sidebar-bottom"><div className="plan-card"><div className="plan-icon"><Sparkles size={16}/></div><b>Make smarter moves</b><p>Explore your sales data and uncover what drives growth.</p><button onClick={() => showNotice("You’re all set — keep exploring your dashboard.")}>Explore insights <span>↗</span></button></div><button className="profile"><span className="profile-avatar">RS</span><span>Ranjeet Singh<small>Dashboard owner</small></span><MoreHorizontal size={18}/></button></div>
    </aside>

    <section className="main-area"><header className="topbar"><button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu/></button><div className="breadcrumbs">Workspace <span>/</span> <b>{active}</b></div><div className="top-actions"><label className="global-search"><Search size={16}/><input placeholder="Search anything..." value={search} onChange={e => setSearch(e.target.value)}/><kbd>⌘ K</kbd></label><button className="icon-button" aria-label="Help" onClick={() => showNotice("Tip: use the date selector to change the reporting period.")}><CircleHelp size={18}/></button><button className="icon-button notification" aria-label="Notifications" onClick={() => showNotice("You’re all caught up.")}><Bell size={18}/><i/></button><span className="top-avatar">RS</span></div></header>
      <div className="content"><div className="page-heading"><div><div className="eyebrow"><span className="live-dot"/> BUSINESS OVERVIEW <span className="eyebrow-separator">·</span> UPDATED JUST NOW</div><h1>{active === "Overview" ? "Sales overview" : `${active} analytics`}</h1><p>Here&apos;s what&apos;s happening with your sales performance.</p></div><div className="heading-actions"><button className="filter-button" onClick={() => showNotice("Date range: 1–30 October 2026")}>📅 <span>{period}</span><ChevronDown size={15}/></button><button className="export-button" onClick={() => showNotice("Export is ready to connect to your data source.")}><Download size={16}/> Export</button></div></div>

        <div className="demo-banner"><span className="demo-symbol"><Sparkles size={15}/></span><span><b>Interactive demo</b> — Sample figures for layout preview. Replace with verified sales data before publishing.</span><button aria-label="Dismiss demo notice" onClick={e => e.currentTarget.parentElement?.remove()}><X size={15}/></button></div>

        <div className="kpi-grid">
          <article className="kpi-card"><div className="kpi-top"><span>Total revenue</span><span className="kpi-icon purple"><WalletCards size={17}/></span></div><div className="kpi-value">₹1,24,58,760</div><div className="kpi-foot"><span className="trend up"><ArrowUpRight size={14}/> 12.8%</span><span>vs. previous period</span><span className="spark purple-spark">▁▂▁▃▂▄▃▅▄▆</span></div></article>
          <article className="kpi-card"><div className="kpi-top"><span>Total orders</span><span className="kpi-icon teal"><ShoppingBag size={17}/></span></div><div className="kpi-value">48,732</div><div className="kpi-foot"><span className="trend up"><ArrowUpRight size={14}/> 8.4%</span><span>vs. previous period</span><span className="spark teal-spark">▁▂▃▂▄▃▅▄▆▅</span></div></article>
          <article className="kpi-card"><div className="kpi-top"><span>Units sold</span><span className="kpi-icon orange"><Package size={17}/></span></div><div className="kpi-value">72,685</div><div className="kpi-foot"><span className="trend up"><ArrowUpRight size={14}/> 10.2%</span><span>vs. previous period</span><span className="spark orange-spark">▁▃▂▄▃▅▄▆▅▇</span></div></article>
          <article className="kpi-card"><div className="kpi-top"><span>Average order value</span><span className="kpi-icon pink"><CreditCard size={17}/></span></div><div className="kpi-value">₹2,557</div><div className="kpi-foot"><span className="trend down"><ArrowDownRight size={14}/> 2.1%</span><span>vs. previous period</span><span className="spark pink-spark">▆▇▅▆▄▅▃▄▂▃</span></div></article>
        </div>

        <div className="primary-grid"><article className="panel revenue-panel"><div className="panel-heading"><div><h2>Revenue over time</h2><p>Daily sales performance across all channels</p></div><button className="select-button" onClick={() => setPeriod(period === "Last 30 days" ? "Last 7 days" : "Last 30 days")}>Daily <ChevronDown size={14}/></button></div><div className="chart-legend"><span><i className="legend-dot purple-dot"/> Revenue</span><strong>₹1,24,58,760</strong><span className="trend up"><ArrowUpRight size={13}/> 12.8%</span></div><LineChart data={dailySales}/></article>
          <article className="panel category-panel"><div className="panel-heading"><div><h2>Sales by category</h2><p>Share of total revenue</p></div><button className="more-button" aria-label="More category options" onClick={() => showNotice("Category sales breakdown") }><MoreHorizontal size={19}/></button></div><div className="donut-wrap"><Donut/><div className="category-legend">{categories.map(c => <div className="category-row" key={c.name}><span><i style={{background:c.color}}/>{c.name}</span><b>{c.value}%</b></div>)}</div></div><div className="category-total"><span>Top category · Mobiles</span><b>₹42.8L <ArrowUpRight size={14}/></b></div></article></div>

        <div className="secondary-grid"><article className="panel products-panel"><div className="panel-heading"><div><h2>Top performing products</h2><p>Your best sellers this period</p></div><button className="text-action" onClick={() => setActive("Products")}>View all <span>→</span></button></div><div className="table-toolbar"><label className="table-search"><Search size={15}/><input placeholder="Search products" value={search} onChange={e => setSearch(e.target.value)}/></label><button className="select-button" onClick={() => setCategoryFilter(categoryFilter === "All categories" ? "Mobiles" : "All categories")}><span>{categoryFilter}</span><ChevronDown size={14}/></button></div><div className="table-scroll"><table><thead><tr><th>PRODUCT</th><th>REVENUE</th><th>UNITS SOLD</th><th>TREND</th></tr></thead><tbody>{filteredProducts.map(p => <tr key={p.name}><td><span className="product-cell"><i>{p.icon}</i><span>{p.name}<small>{p.group}</small></span></span></td><td className="revenue-cell">{p.sales}</td><td>{p.units}</td><td><span className="trend up">{p.change}</span></td></tr>)}{filteredProducts.length === 0 && <tr><td colSpan={4} className="empty-state">No products match that search.</td></tr>}</tbody></table></div></article>
          <article className="panel region-panel"><div className="panel-heading"><div><h2>Sales by region</h2><p>Revenue contribution by state</p></div><button className="more-button" onClick={() => showNotice("Regional view is based on illustrative sample figures.")} aria-label="Regional options"><MoreHorizontal size={19}/></button></div><div className="map-placeholder"><div className="india-shape">✦</div><div className="map-caption"><span className="live-dot"/> INDIA <span>·</span> 28 STATES</div><div className="map-legend"><i/> Higher sales <i/> Lower sales</div></div><div className="region-list">{regions.map((r, i) => <div className="region-row" key={r.name}><span className="region-rank">0{i+1}</span><b>{r.name}</b><div className="region-bar"><i style={{width:`${r.value}%`}}/></div><strong>{r.value}%</strong></div>)}</div></article></div>
        <footer><span>© 2026 MarketPulse Analytics</span><span><span className="footer-status"/> All systems operational</span><span>Sample dashboard · For demonstration purposes</span></footer>
      </div>
    </section>
    {notice && <div className="toast"><span>✓</span>{notice}<button onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={14}/></button></div>}
  </main>;
}
