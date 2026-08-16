import { cn } from "@/lib/cn";

/**
 * 1280px max content width with responsive gutters.
 * `narrow` (768px) is for long-form reading columns in case studies.
 */
export function Container({
  className,
  narrow = false,
  children,
}: {
  className?: string;
  narrow?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-10",
        narrow ? "max-w-3xl" : "max-w-[1280px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Consistent vertical rhythm between major page sections. */
export function Section({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-32", className)}>
      {children}
    </section>
  );
}
