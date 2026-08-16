import { cn } from "@/lib/cn";

/** Minimal 24px line icons — no dependency, no oversized 3D illustration. */

type IconProps = { className?: string };

function Svg({
  className,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5", className)}
    >
      {children}
    </svg>
  );
}

export const icons = {
  globe: (props: IconProps) => (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </Svg>
  ),
  cart: (props: IconProps) => (
    <Svg {...props}>
      <path d="M3 4h2l2.2 10.5a1.5 1.5 0 0 0 1.47 1.2h8.06a1.5 1.5 0 0 0 1.47-1.16L20 8H6" />
      <circle cx="9.5" cy="19.5" r="1.25" />
      <circle cx="17" cy="19.5" r="1.25" />
    </Svg>
  ),
  layers: (props: IconProps) => (
    <Svg {...props}>
      <path d="M12 3.5 3.5 8 12 12.5 20.5 8 12 3.5Z" />
      <path d="M3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" />
    </Svg>
  ),
  grid: (props: IconProps) => (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    </Svg>
  ),
  wrench: (props: IconProps) => (
    <Svg {...props}>
      <path d="M15.5 3.5a5 5 0 0 0-4.6 6.96L3.9 17.45a2 2 0 0 0 2.83 2.83l6.99-6.99A5 5 0 1 0 15.5 3.5Z" />
    </Svg>
  ),
  arrowUpRight: (props: IconProps) => (
    <Svg {...props}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </Svg>
  ),
  check: (props: IconProps) => (
    <Svg {...props}>
      <path d="m4.5 12.5 4.5 4.5 10.5-10.5" />
    </Svg>
  ),
  quote: (props: IconProps) => (
    <Svg {...props}>
      <path d="M9.5 6.5C6.9 7.9 5.5 10 5.5 12.7c0 2.3 1.3 3.8 3.2 3.8 1.7 0 2.9-1.2 2.9-2.8 0-1.5-1-2.6-2.5-2.6-.3 0-.6 0-.8.1.3-1.4 1.3-2.5 2.9-3.3ZM18 6.5c-2.6 1.4-4 3.5-4 6.2 0 2.3 1.3 3.8 3.2 3.8 1.7 0 2.9-1.2 2.9-2.8 0-1.5-1-2.6-2.5-2.6-.3 0-.6 0-.8.1.3-1.4 1.3-2.5 2.9-3.3Z" />
    </Svg>
  ),
  menu: (props: IconProps) => (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  ),
  close: (props: IconProps) => (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  ),
  mail: (props: IconProps) => (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </Svg>
  ),
  image: (props: IconProps) => (
    <Svg {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="m4 17 4.5-4.5 3 3L15 11l5 5" />
    </Svg>
  ),
} satisfies Record<string, (props: IconProps) => React.ReactElement>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return <Component className={className} />;
}
