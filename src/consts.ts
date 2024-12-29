// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import config from '../astro.config.mjs';

export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const NAME = 'bobo';
export const BASE = config.base;
export const HEADER_IMG = '/' + BASE + '/' + 'IMG_0073.JPG';
export const FIRST_ACTIVE = '/' + BASE + '/' + 'first_active.svg';
export const LAST_ACTIVE = '/' + BASE + '/' + 'last_active.svg';
export const MID_ACTIVE = '/' + BASE + '/' + 'mid_active.svg';
export const FAVICON = '/' + BASE + '/' + 'favicon.svg';