// Sidebar nav link. Active item is marked with a moss left-border + moss
// text (drawn from the --panel-accent token, since the sidebar sits on the
// fixed deep-moss panel) — never a filled pill.

export default function NavItem({ icon, label, active = false, href = "#", ...rest }) {
  return (
    <a className={`gw-nav-link ${active ? "active" : ""}`} href={href} title={label} {...rest}>
      {icon}
      <span className="label">{label}</span>
    </a>
  );
}
