// Line-style icon set shared across pages — Groundwork uses stroke-only
// icons (no filled icon-in-circle badges anywhere). Every icon inherits its
// color from the surrounding text via `currentColor`.

const base = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  "aria-hidden": true,
  className: "icon",
};

export function GridIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="2.5" width="6" height="6" rx="1" />
      <rect x="9.5" y="2.5" width="6" height="6" rx="1" />
      <rect x="2.5" y="9.5" width="6" height="6" rx="1" />
      <rect x="9.5" y="9.5" width="6" height="6" rx="1" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 3.5c2.4-2 6.2-.4 6.2 2.7 0 3.1-4 6-6.2 8-2.2-2-6.2-4.9-6.2-8 0-3.1 3.8-4.7 6.2-2.7Z" />
      <path d="M9 6.5v4.4M7.3 7.7h3.1M7.3 9.3h3.1" />
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6.5" cy="6" r="2.2" />
      <circle cx="12.2" cy="6.8" r="1.8" />
      <path d="M2.5 15c.3-2.6 2-4 4-4s3.7 1.4 4 4" />
      <path d="M11 11.3c1.7.1 3.1 1.4 3.4 3.7" />
    </svg>
  );
}

export function FolderIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 5.2c0-.7.6-1.2 1.2-1.2h3l1.3 1.6h6.3c.7 0 1.2.5 1.2 1.2v6.4c0 .7-.5 1.2-1.2 1.2H3.7c-.6 0-1.2-.5-1.2-1.2V5.2Z" />
    </svg>
  );
}

export function BarChartIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="2.5" width="12" height="13" rx="1.2" />
      <path d="M6 10.5v2.5M9 8v5M12 6v7" />
    </svg>
  );
}

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="3.3" width="13" height="11.5" rx="1.2" />
      <path d="M2.5 6.7h13M6 2v2.6M12 2v2.6" />
    </svg>
  );
}

export function SettingsIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="9" r="2.3" />
      <path d="M9 2.8v1.8M9 13.4v1.8M15.2 9h-1.8M4.6 9H2.8M13.1 4.9l-1.3 1.3M6.2 11.8l-1.3 1.3M13.1 13.1l-1.3-1.3M6.2 6.2 4.9 4.9" />
    </svg>
  );
}

export function SupportIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="9" r="6.3" />
      <path d="M9 11.4v-.6c0-.9 1.9-1 1.9-2.6 0-1-.9-1.7-1.9-1.7-.9 0-1.7.5-1.9 1.4" />
      <circle cx="9" cy="13" r="0.2" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon(props) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <circle cx="8" cy="8" r="5" />
      <path d="m15.5 15.5-3.6-3.6" />
    </svg>
  );
}

export function BellIcon(props) {
  return (
    <svg {...base} width={17} height={17} {...props}>
      <path d="M4.5 13.5V8.2c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v5.3l1.2 1.5H3.3L4.5 13.5Z" />
      <path d="M7.2 15.3a1.9 1.9 0 0 0 3.6 0" />
    </svg>
  );
}

export function PlusIcon(props) {
  return (
    <svg {...base} width={15} height={15} strokeWidth={1.6} {...props}>
      <path d="M9 3.5v11M3.5 9h11" />
    </svg>
  );
}

export function DownloadIcon(props) {
  return (
    <svg {...base} width={15} height={15} strokeWidth={1.6} {...props}>
      <path d="M9 2.5v9M5.5 8l3.5 3.5L12.5 8" />
      <path d="M3 13.5v1.2c0 .7.6 1.3 1.3 1.3h9.4c.7 0 1.3-.6 1.3-1.3v-1.2" />
    </svg>
  );
}

export function HamburgerIcon(props) {
  return (
    <svg {...base} strokeWidth={1.6} {...props}>
      <path d="M2.5 5h13M2.5 9h13M2.5 13h13" />
    </svg>
  );
}

export function DocumentIcon(props) {
  return (
    <svg {...base} width={20} height={20} viewBox="0 0 20 20" {...props}>
      <rect x="3.5" y="2.5" width="13" height="15" rx="1.3" />
      <path d="M6.5 6.5h7M6.5 9.5h7M6.5 12.5h4.5" />
    </svg>
  );
}

export function PersonPlusIcon(props) {
  return (
    <svg {...base} width={20} height={20} viewBox="0 0 20 20" {...props}>
      <circle cx="7.5" cy="7" r="2.6" />
      <path d="M2.8 16.5c.3-3 2.2-4.8 4.7-4.8s4.4 1.8 4.7 4.8" />
      <path d="M14 6.5h4M16 4.5v4" />
    </svg>
  );
}

export function DonationIcon(props) {
  return (
    <svg {...base} width={20} height={20} viewBox="0 0 20 20" {...props}>
      <path d="M10 4c2.7-2.2 6.9-.4 6.9 3 0 3.5-4.5 6.7-6.9 8.9-2.4-2.2-6.9-5.4-6.9-8.9 0-3.4 4.2-5.2 6.9-3Z" />
      <path d="M10 7.5v5M7.5 10h5" />
    </svg>
  );
}

export function ProgramIcon(props) {
  return (
    <svg {...base} width={20} height={20} viewBox="0 0 20 20" {...props}>
      <path d="M10 3v14M3 10h14" />
    </svg>
  );
}

export function GoogleIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.93v2.33A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72a5.4 5.4 0 0 1 0-3.44V4.95H.93a9 9 0 0 0 0 8.1l3.04-2.33Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .93 4.95l3.04 2.33C4.68 5.16 6.66 3.58 9 3.58Z"
      />
    </svg>
  );
}
