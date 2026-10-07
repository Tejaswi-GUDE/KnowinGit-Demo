import { Link } from "react-router-dom";

export default function NavItem({ icon, label, active = false, href = "#", ...rest }) {
  return (
    <Link className={`gw-nav-link ${active ? "active" : ""}`} to={href} title={label} {...rest}>
      {icon}
      <span className="label">{label}</span>
    </Link>
  );
}
