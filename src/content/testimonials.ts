export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Optional headshot under /public. */
  avatar?: string;
};

/**
 * Intentionally empty.
 *
 * The section renders a considered empty state while this array has no
 * entries, and switches to the testimonial grid as soon as real quotes are
 * added. Do not populate with invented quotes or client names. Add them
 * only once a client has actually given the quote and agreed to attribution.
 */
export const testimonials: Testimonial[] = [];
