import { cx, type CxOptions } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/**
 * This utility function merges and avoids styling conflicts in TailwindCSS.
 *
 * @param inputs List of ClassValue
 * @returns string
 */
export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}
