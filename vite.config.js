import { defineConfig } from 'vite';

// base para GitHub Pages: https://carlows.github.io/cubo-tatis/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/cubo-tatis/' : '/',
});
