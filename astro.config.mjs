// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    // site: 'https://simple-portfolio.vicbox.dev/',
    site: 'https://David-Duf0ur.github.io/',
    base: 'David-Duf0ur',
    trailingSlash: 'always',
    integrations: [mdx(), react(), tailwind({
        applyBaseStyles: false,
    }), icon(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
});