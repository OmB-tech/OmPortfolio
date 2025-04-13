import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that combines clsx and tailwind-merge for optimal className handling
 * 
 * @param {...ClassValue[]} inputs - Class names or class name objects/arrays
 * @returns {string} - Merged and optimized class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Optional: Export types for better DX
export type { ClassValue };