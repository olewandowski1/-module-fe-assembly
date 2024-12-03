import { default as corePreset } from './node_modules/@module/fe-core/core-tailwind-preset.ts';
import type { Config } from 'tailwindcss';

export default {
  presets: [corePreset],
  // Since `content` is mandatory, we need to provide it here. However, we're using the same value as the core preset.
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
} satisfies Config;
