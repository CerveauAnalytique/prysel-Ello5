/**
 * Resolve the public site URL for CORS, metadata, sitemaps, and Next image config.
 * Prefers an explicit override, then Netlify deploy URLs, then Vercel, then localhost.
 */
export function resolveServerURL(): string {
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : ''

  const fromEnv =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.URL ||
    vercelUrl ||
    process.env.__NEXT_PRIVATE_ORIGIN ||
    'http://localhost:3000'

  return fromEnv.replace(/\/$/, '')
}

export function uniqueOrigins(...origins: Array<string | undefined>): string[] {
  return [...new Set(origins.filter((origin): origin is string => Boolean(origin)))]
}
