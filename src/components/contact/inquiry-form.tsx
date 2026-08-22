"use client";

import { useId, useState } from "react";

import { ArrowRight, Button, ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { site } from "@/content/site";
import {
  inquiryMailto,
  projectTypes,
  timelines,
  validateInquiry,
  type Inquiry,
  type InquiryErrors,
} from "@/lib/inquiry";
import { cn } from "@/lib/cn";

const fieldBase =
  "w-full rounded-btn border bg-surface px-4 text-[0.9375rem] text-ink " +
  "placeholder:text-muted-soft transition-colors duration-200 " +
  "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const inputHeight = "h-12";

function Label({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-baseline gap-2 text-sm font-medium text-ink"
    >
      {children}
      {optional ? (
        <span className="text-xs font-normal text-muted-soft">Optional</span>
      ) : null}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-red-600">
      {message}
    </p>
  );
}

const emptyForm: Inquiry & { website: string } = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  timeline: "",
  message: "",
  website: "",
};

export function InquiryForm() {
  const formId = useId();
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState<InquiryErrors>({});
  // No network round-trip to wait on: the form hands off to a mail client,
  // so there is no submitting or error state to model.
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const field = (name: keyof typeof emptyForm) => ({
    id: `${formId}-${name}`,
    name,
    value: values[name],
    onChange: (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((prev) => ({ ...prev, [name]: event.target.value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
    "aria-invalid": Boolean(errors[name as keyof InquiryErrors]) || undefined,
    "aria-describedby": errors[name as keyof InquiryErrors]
      ? `${formId}-${name}-error`
      : undefined,
  });

  const borderFor = (name: keyof InquiryErrors) =>
    errors[name] ? "border-red-400" : "border-line-strong";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const clientErrors = validateInquiry(values);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      const firstField = Object.keys(clientErrors)[0];
      document.getElementById(`${formId}-${firstField}`)?.focus();
      return;
    }

    // Honeypot: a real person never fills a hidden field. Bail silently so a
    // bot gets no signal that it was caught.
    if (values.website) {
      setStatus("success");
      return;
    }

    window.location.href = inquiryMailto(values, site.email);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-card border border-line bg-surface px-8 py-16 text-center shadow-card">
        <span className="flex size-12 items-center justify-center rounded-full border border-accent-line bg-accent-soft text-accent">
          <Icon name="check" className="size-6" />
        </span>
        <h2 className="mt-6 text-h3">Your email is ready to send.</h2>
        <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-muted text-pretty">
          Your mail app should have opened with everything filled in. Press
          send there and it reaches me. If nothing opened, use one of the
          routes below instead.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={site.whatsapp.href} target="_blank" rel="noreferrer noopener">
            Message me on WhatsApp
          </ButtonLink>
          <ButtonLink href={`mailto:${site.email}`} variant="secondary">
            {site.email}
          </ButtonLink>
        </div>

        <Button
          variant="secondary"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Back to the form
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-line bg-surface p-7 shadow-card sm:p-9"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-name`}>Name</Label>
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={cn(fieldBase, inputHeight, borderFor("name"))}
          />
          <FieldError id={`${formId}-name-error`} message={errors.name} />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-email`}>Email</Label>
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={cn(fieldBase, inputHeight, borderFor("email"))}
          />
          <FieldError id={`${formId}-email-error`} message={errors.email} />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor={`${formId}-company`} optional>
            Company / Business
          </Label>
          <input
            {...field("company")}
            type="text"
            autoComplete="organization"
            placeholder="Where you work, or your brand name"
            className={cn(fieldBase, inputHeight, "border-line-strong")}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor={`${formId}-projectType`}>
            What are you looking to build?
          </Label>
          <select
            {...field("projectType")}
            className={cn(
              fieldBase,
              inputHeight,
              borderFor("projectType"),
              "appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11",
              !values.projectType && "text-muted-soft",
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select an option</option>
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError
            id={`${formId}-projectType-error`}
            message={errors.projectType}
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor={`${formId}-timeline`} optional>
            Timeline
          </Label>
          <select
            {...field("timeline")}
            className={cn(
              fieldBase,
              inputHeight,
              "border-line-strong",
              "appearance-none bg-[length:18px] bg-[right_1rem_center] bg-no-repeat pr-11",
              !values.timeline && "text-muted-soft",
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Select timeframe</option>
            {timelines.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <Label htmlFor={`${formId}-message`}>Message</Label>
          <textarea
            {...field("message")}
            rows={5}
            placeholder="Tell me a bit about what you're trying to launch, improve or grow…"
            className={cn(fieldBase, "py-3 leading-relaxed", borderFor("message"))}
          />
          <FieldError id={`${formId}-message-error`} message={errors.message} />
        </div>
      </div>

      {/* Honeypot: hidden from people, irresistible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] opacity-0">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, website: e.target.value }))
          }
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          I usually reply within a couple of working days.
        </p>

        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Send Project Inquiry
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
}
