// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Demo page
	site: 'https://bobodai.github.io/astro-theme-zzz/',
	// Demo base
	base: 'astro-theme-zzz',
	integrations: [mdx(), sitemap()],
});
