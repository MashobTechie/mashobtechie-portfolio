import { cn } from "@/lib/cn";

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("text-eyebrow uppercase text-muted", className)}>
      {children}
    </p>
  );
}

/**
 * Standard section header: optional eyebrow, editorial title, lead paragraph.
 * `align="center"` is reserved for the few full-width statement sections.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={cn("text-h2 text-balance", centered && "max-w-3xl")}>
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "text-lead text-muted text-pretty",
            centered ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {lead}
        </p>
      ) : null}
      {children}
    </div>
  );
}
