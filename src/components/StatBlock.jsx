// Plain bordered stat block — no shadows, no icon-in-circle chrome.
//
// variant="panel": used on the fixed deep-moss panels (sign-in mission
//   panel). Transparent fill, --panel-* border/text tokens, no delta.
// variant="card": used on the dashboard stat grid. Bordered surface card
//   with an optional delta tag (moss for positive, brick for negative).

export default function StatBlock({ label, value, delta, variant = "card" }) {
  return (
    <div className={`gw-stat gw-stat-${variant}`}>
      <div className="gw-stat-head">
        <span className="gw-stat-label">{label}</span>
        {delta && (
          <span className={`gw-stat-delta ${delta.direction === "down" ? "down" : "up"}`}>
            {delta.direction === "down" ? "↓" : "↑"} {delta.text}
          </span>
        )}
      </div>
      <div className="gw-stat-value">{value}</div>
    </div>
  );
}
