import { cn } from "@/lib/cn";

/** White surface, 1px border, very subtle shadow. The site's default container. */
export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-card border border-line bg-surface shadow-card",
        interactive &&
          "transition-[box-shadow,border-color] duration-200 hover:border-line-strong hover:shadow-lift",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Small category / tech label. Rounded, not pill. */
export function Tag({
  className,
  tone = "neutral",
  children,
}: {
  className?: string;
  tone?: "neutral" | "accent";
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
        tone === "accent"
          ? "border-accent-line bg-accent-soft text-accent"
          : "border-line bg-canvas text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
