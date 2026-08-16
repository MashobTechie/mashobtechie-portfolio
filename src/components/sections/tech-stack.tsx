import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/card";
import { techGroups } from "@/content/tech";
import { cn } from "@/lib/cn";

export function TechStack({ className }: { className?: string }) {
  return (
    <Section className={cn("bg-surface", className)}>
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Modern tools, chosen for the job."
          lead="The stack matters less than what it lets your business do — but here's what I reach for."
        />

        <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:grid-cols-3 lg:mt-14">
          {techGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-eyebrow uppercase text-muted-soft">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag className="px-3 py-1.5 text-[0.8125rem] text-ink">
                      {item}
                    </Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
