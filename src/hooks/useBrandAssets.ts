import { BRAND } from '../data/content'

/**
 * Asset variants for the single fixed look (no theme switching): light-background
 * marks everywhere; the home nav crossfades both wordmarks itself via --zone-mix.
 * Dark-mode solution logo variants are kept in /assets/solutions/dark/ for later use.
 */
export function useBrandAssets() {
  return {
    wordmark: BRAND.wordmark,
    symbol: BRAND.symbol,
    solutionLogo: (path: string) => path,
  }
}
