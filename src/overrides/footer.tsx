import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const FOOTER_OVERRIDE_ENABLED = true


const getCategoryLabel = (value: string) => {
  const normalized = normalizeCategory(value)
  return CATEGORY_OPTIONS.find((item) => item.slug === normalized)?.name || value
}


export async function FooterOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 200, { allowMockFallback: false })
  const categories = Array.from(
    new Map(
      posts
        .map((post) => {
          const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
          const raw = typeof content.category === 'string' ? content.category.trim() : ''
          if (!raw) return null
          const slug = normalizeCategory(raw)
          return { slug, name: getCategoryLabel(raw) }
        })
        .filter((item): item is { slug: string; name: string } => Boolean(item))
        .map((item) => [item.slug, item])
    ).values()
  ).slice(0, 8)

  return (
    <footer className="bg-[#0f0730] text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold">{SITE_CONFIG.name}</h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
              Built for modern press releases and high-visibility announcements. Publish once, distribute confidently, and keep your brand message consistent.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Platform</p>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <Link href="/updates" className="hover:text-white">Latest News</Link>
              <Link href="/search" className="hover:text-white">Search</Link>
              <Link href="/create/mediaDistribution" className="hover:text-white">Submit Release</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Company</p>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>

            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Legal</p>
            <div className="mt-4 grid gap-2 text-sm text-white/80">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        <p>Media-ready publishing infrastructure for growth teams.</p>

        {categories.length ? (
          <div className="mt-8 border-t border-current/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">Categories</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/updates?category=${category.slug}`}
                  className="opacity-80 underline-offset-4 transition hover:opacity-100 hover:underline"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

      </div>
    </footer>
  )
}
