// Groundwork button: "outline" (bordered, transparent) or "solid" (moss
// fill). No shadows, 6px radius, full-width where the page asks for it.

export default function Button({
  variant = "solid",
  icon,
  fullWidth = false,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "gw-btn",
    variant === "outline" ? "gw-btn-outline" : "gw-btn-solid",
    fullWidth ? "gw-btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
