export const projectTypes = [
  "Business website",
  "E-commerce store",
  "SaaS product or MVP",
  "Web application or dashboard",
  "Improving an existing product",
  "Not sure yet, let's talk",
] as const;

export const timelines = [
  "As soon as possible",
  "1 – 2 months",
  "3 – 6 months",
  "Later this year",
  "Still exploring",
] as const;

export type Inquiry = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  timeline: string;
  message: string;
};

export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Shared by the client form and the API route so both agree on what's valid. */
export function validateInquiry(input: Partial<Inquiry>): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!input.name?.trim()) {
    errors.name = "Please tell me your name.";
  }

  if (!input.email?.trim()) {
    errors.email = "I'll need an email to reply to.";
  } else if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email = "That doesn't look like a valid email address.";
  }

  if (!input.projectType) {
    errors.projectType = "Pick the closest option. You can refine it later.";
  }

  if (!input.message?.trim()) {
    errors.message = "A sentence or two about the project helps.";
  } else if (input.message.trim().length < 20) {
    errors.message = "A little more detail would help me give a useful reply.";
  }

  return errors;
}

/**
 * Renders an inquiry as plain text for an email body.
 */
export function formatInquiry(inquiry: Inquiry) {
  return [
    `Name:      ${inquiry.name}`,
    `Email:     ${inquiry.email}`,
    `Business:  ${inquiry.company || "n/a"}`,
    `Building:  ${inquiry.projectType}`,
    `Timeline:  ${inquiry.timeline}`,
    "",
    inquiry.message,
  ].join("\n");
}

/**
 * Builds the `mailto:` link the contact form hands to the visitor's mail
 * client. There is no server involved. The form composes the message and the
 * visitor presses send, which means nothing can be silently swallowed by a
 * delivery service that was never configured.
 */
export function inquiryMailto(inquiry: Inquiry, to: string) {
  const business = inquiry.company ? ` (${inquiry.company})` : "";
  const subject = `Project inquiry from ${inquiry.name}${business}`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    formatInquiry(inquiry),
  )}`;
}
