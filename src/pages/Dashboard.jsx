import { useState } from "react";
import Button from "../components/Button.jsx";
import StatBlock from "../components/StatBlock.jsx";
import NavItem from "../components/NavItem.jsx";
import Logo from "../components/Logo.jsx";
import {
  GridIcon,
  HeartIcon,
  UsersIcon,
  FolderIcon,
  BarChartIcon,
  CalendarIcon,
  SettingsIcon,
  SupportIcon,
  SearchIcon,
  BellIcon,
  PlusIcon,
  DownloadIcon,
  HamburgerIcon,
  DocumentIcon,
  PersonPlusIcon,
  DonationIcon,
  ProgramIcon,
} from "../components/icons.jsx";
import "../styles/theme.css";
import "../components/components.css";
import "./Dashboard.css";

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: <GridIcon /> },
  { key: "donations", label: "Donations", icon: <HeartIcon /> },
  { key: "volunteers", label: "Volunteers", icon: <UsersIcon /> },
  { key: "programs", label: "Programs", icon: <FolderIcon /> },
  { key: "reports", label: "Reports", icon: <BarChartIcon /> },
  { key: "calendar", label: "Calendar", icon: <CalendarIcon /> },
];

const STATS = [
  { label: "Total donations", value: "$48,200", delta: { direction: "up", text: "12.4%" } },
  { label: "Active volunteers", value: "342", delta: { direction: "up", text: "6.1%" } },
  { label: "Programs running", value: "18", delta: { direction: "up", text: "2" } },
  { label: "Avg. gift size", value: "$186", delta: { direction: "down", text: "3.2%" } },
];

const EVENTS = [
  {
    month: "SEP",
    day: "24",
    name: "Fall Fundraising Gala",
    status: "Confirmed",
    location: "Riverside Hall",
    attendees: "112 attending",
  },
  {
    month: "SEP",
    day: "29",
    name: "Volunteer Orientation",
    status: "Pending",
    location: "Community Center, Rm 3",
    attendees: "28 attending",
  },
  {
    month: "OCT",
    day: "05",
    name: "Community Tree Planting",
    status: "Confirmed",
    location: "Elm Street Park",
    attendees: "64 attending",
  },
  {
    month: "OCT",
    day: "12",
    name: "Q3 Board Meeting",
    status: "Pending",
    location: "Main Office",
    attendees: "9 attending",
  },
];

const QUICK_ACTIONS = [
  { icon: <ProgramIcon />, title: "New program", desc: "Set up a program with goals and a budget." },
  { icon: <DonationIcon />, title: "Log a donation", desc: "Record a gift and update the campaign total." },
  { icon: <PersonPlusIcon />, title: "Invite a volunteer", desc: "Send a sign-up link for an upcoming shift." },
  { icon: <DocumentIcon />, title: "Generate report", desc: "Export donor and program activity as a PDF." },
];

// Growth index (Apr = 100). Donations ($) and volunteers (headcount) can't
// share one axis, so both series are indexed to their own starting value —
// a single 0-axis, never a dual-axis chart.
const MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const X = [40, 148, 256, 364, 472, 580];
const DONATION_IDX = [100, 108, 121, 115, 134, 148];
const VOLUNTEER_IDX = [100, 104, 110, 118, 126, 129];
const DONATION_VALUES = ["$41,000", "$44,300", "$49,600", "$47,100", "$54,900", "$60,600"];
const VOLUNTEER_VALUES = ["265", "276", "292", "312", "335", "342"];

// index -> svg y (90..150 mapped to y 200..20)
const yFor = (v) => 200 - (v - 90) * 3;
const pathFor = (values) => values.map((v, i) => `${i === 0 ? "M" : "L"}${X[i]},${yFor(v)}`).join(" ");

function ImpactChart() {
  const [hover, setHover] = useState(null);

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * 620;
    let best = 0;
    let bestDist = Infinity;
    X.forEach((x, i) => {
      const d = Math.abs(x - relX);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setHover(best);
  }

  return (
    <div className="chart-wrap">
      <svg
        viewBox="0 0 620 250"
        width="100%"
        style={{ display: "block", overflow: "visible" }}
        role="img"
        aria-label="Line chart of donations and volunteer growth index from April to September"
      >
        {[20, 80, 140, 200].map((y) => (
          <line key={y} x1="40" y1={y} x2="580" y2={y} stroke={y === 200 ? "var(--line)" : "var(--grid-line)"} strokeWidth="1" />
        ))}

        <text x="30" y="24" textAnchor="end" fontSize="11" fill="var(--sage)">150</text>
        <text x="30" y="84" textAnchor="end" fontSize="11" fill="var(--sage)">130</text>
        <text x="30" y="144" textAnchor="end" fontSize="11" fill="var(--sage)">110</text>
        <text x="30" y="204" textAnchor="end" fontSize="11" fill="var(--sage)">90</text>

        {MONTHS.map((m, i) => (
          <text key={m} x={X[i]} y="222" fontSize="11" fill="var(--sage)" textAnchor="middle">
            {m}
          </text>
        ))}

        <path d={pathFor(DONATION_IDX)} fill="none" stroke="var(--moss)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        <path
          d={pathFor(VOLUNTEER_IDX)}
          fill="none"
          stroke="var(--brick)"
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {DONATION_IDX.map((v, i) => (
          <circle key={i} cx={X[i]} cy={yFor(v)} r="4" fill="var(--surface)" stroke="var(--moss)" strokeWidth="2" />
        ))}
        {VOLUNTEER_IDX.map((v, i) => (
          <circle key={i} cx={X[i]} cy={yFor(v)} r="4" fill="var(--surface)" stroke="var(--brick)" strokeWidth="2" />
        ))}

        <text x="590" y="29" fontSize="11" fontWeight="600" fill="var(--moss)">148</text>
        <text x="590" y="86" fontSize="11" fontWeight="600" fill="var(--brick)">129</text>

        {hover !== null && (
          <line x1={X[hover]} y1="20" x2={X[hover]} y2="200" stroke="var(--sage)" strokeWidth="1" strokeDasharray="2 3" />
        )}

        <rect
          x="10"
          y="10"
          width="600"
          height="220"
          fill="transparent"
          onPointerMove={handleMove}
          onPointerLeave={() => setHover(null)}
        />
      </svg>

      {hover !== null && (
        <div className="chart-tooltip" style={{ left: `${(X[hover] / 620) * 100}%`, opacity: 1 }}>
          <div className="month">{MONTHS[hover]}</div>
          <div className="row">
            <span className="sw" style={{ background: "var(--moss)" }} />
            Donations
            <span style={{ marginLeft: "auto", fontWeight: 600 }}>
              {DONATION_VALUES[hover]} ({DONATION_IDX[hover]})
            </span>
          </div>
          <div className="row">
            <span className="sw" style={{ background: "var(--brick)" }} />
            Volunteers
            <span style={{ marginLeft: "auto", fontWeight: 600 }}>
              {VOLUNTEER_VALUES[hover]} ({VOLUNTEER_IDX[hover]})
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="app">
      <div className={`sidebar-scrim ${navOpen ? "open" : ""}`} onClick={() => setNavOpen(false)} />

      <aside className={`sidebar ${navOpen ? "open" : ""}`}>
        <Logo />

        <nav className="primary-nav" aria-label="Primary">
          {NAV_ITEMS.map((item, i) => (
            <NavItem key={item.key} icon={item.icon} label={item.label} active={i === 0} />
          ))}
        </nav>

        <div className="sidebar-spacer" />

        <div className="campaign-block">
          <div className="title">Clean Water 2026</div>
          <div className="figures">
            Raised <strong>$84,300</strong>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "68%" }} />
          </div>
          <div className="figures">
            <span>68% of $124,000</span>
          </div>
        </div>

        <nav className="secondary-nav" aria-label="Secondary">
          <NavItem icon={<SettingsIcon />} label="Settings" />
          <NavItem icon={<SupportIcon />} label="Support" />
        </nav>
      </aside>

      <div className="main">
        <header className="topbar">
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((o) => !o)}
          >
            <HamburgerIcon />
          </button>

          <div className="search-field">
            <SearchIcon />
            <input type="text" placeholder="Search donors, programs, events…" aria-label="Search" />
          </div>

          <div className="topbar-spacer" />

          <button className="icon-btn" aria-label="Notifications">
            <BellIcon />
            <span className="dot" />
          </button>

          <div className="user-chip">
            <div className="avatar">MR</div>
            <div className="user-meta">
              <span className="name">Maya Reyes</span>
              <span className="role">Program Director</span>
            </div>
          </div>
        </header>

        <main className="content">
          <div className="greeting">
            <div className="greeting-text">
              <div className="greeting-date">Thursday, September 17</div>
              <h1>Good morning, Maya</h1>
              <p>Here's how your programs and giving are trending this month.</p>
            </div>
            <div className="greeting-actions">
              <Button variant="outline" icon={<DownloadIcon />}>
                Export
              </Button>
              <Button variant="solid" icon={<PlusIcon />}>
                New program
              </Button>
            </div>
          </div>

          <section className="stat-grid" aria-label="Key metrics">
            {STATS.map((s) => (
              <StatBlock key={s.label} variant="card" label={s.label} value={s.value} delta={s.delta} />
            ))}
          </section>

          <section className="card">
            <div className="card-head">
              <div>
                <h2>Impact over time</h2>
                <p className="sub">Growth index, Apr–Sep (Apr = 100)</p>
              </div>
              <div className="legend">
                <span className="legend-item">
                  <span className="legend-swatch donations" />
                  Donations
                </span>
                <span className="legend-item">
                  <span className="legend-swatch volunteers" />
                  Volunteers
                </span>
              </div>
            </div>
            <ImpactChart />
          </section>

          <section className="card">
            <div className="card-head">
              <div>
                <h2>Upcoming events</h2>
                <p className="sub">Next four on the calendar</p>
              </div>
            </div>
            <div className="event-list">
              {EVENTS.map((ev) => (
                <div className="event-row" key={ev.name}>
                  <div className="event-date">
                    <div className="month">{ev.month}</div>
                    <div className="day">{ev.day}</div>
                  </div>
                  <div className="event-main">
                    <div className="event-title-row">
                      <span className="event-name">{ev.name}</span>
                      <span className={`event-status ${ev.status === "Confirmed" ? "confirmed" : "pending"}`}>
                        {ev.status}
                      </span>
                    </div>
                    <div className="event-meta">
                      {ev.location}
                      <span className="sep">·</span>
                      {ev.attendees}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-title">Quick actions</h2>
            <div className="quick-grid">
              {QUICK_ACTIONS.map((qa) => (
                <button className="quick-action" key={qa.title}>
                  {qa.icon}
                  <span className="qa-title">{qa.title}</span>
                  <span className="qa-desc">{qa.desc}</span>
                </button>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
