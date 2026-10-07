// The Terrafund wordmark. Used on the sign-in mission panel and the
// dashboard sidebar — both render it on the fixed deep-moss panel, so the
// mark always draws from the --panel-* tokens (never --moss/--bg), and
// keeps the same look whether the surrounding page is in light or dark mode.

export default function Logo({ withWordmark = true, className = "" }) {
  return (
    <div className={`gw-logo ${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="gw-logo-mark">
        <rect x="0.5" y="0.5" width="19" height="19" rx="4" style={{ fill: "var(--panel-accent)" }} />
        <path
          d="M10 5.2c2.6 0 4.6 1.9 4.6 4.4 0 2.6-2 4.6-4.6 5.2-2.6-.6-4.6-2.6-4.6-5.2 0-2.5 2-4.4 4.6-4.4Z"
          style={{ fill: "var(--panel-bg)" }}
        />
        <path
          d="M10 6.8v6.8"
          style={{ stroke: "var(--panel-accent)" }}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      </svg>
      {withWordmark && <span className="gw-logo-text">Terrafund</span>}
    </div>
  );
}
