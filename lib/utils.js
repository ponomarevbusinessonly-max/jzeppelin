import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Safe browser-only check
export const isIframe = typeof window !== 'undefined' && window.self !== window.top;
