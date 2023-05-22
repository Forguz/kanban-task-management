import { Plus_Jakarta_Sans } from 'next/font/google';

export const plusJakartaSans = Plus_Jakarta_Sans({
  display: 'swap',
  weight: ['500', '700'],
  fallback: ['Helvetica', 'sans-serif'],
  subsets: ['latin'],
  variable: '--plus-jakarta',
  style: ['normal'],
});
