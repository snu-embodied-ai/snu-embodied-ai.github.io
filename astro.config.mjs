import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserOrOrganizationSite = repository === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : 'https://example.github.io',
  base: process.env.GITHUB_ACTIONS && repository && !isUserOrOrganizationSite
    ? `/${repository}`
    : '/',
  output: 'static',
});
