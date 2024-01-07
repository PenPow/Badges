import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	darkMode: 'selector',
	plugins: [],
} satisfies Config
