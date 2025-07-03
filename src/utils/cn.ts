import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Combines class names and resolves Tailwind conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
