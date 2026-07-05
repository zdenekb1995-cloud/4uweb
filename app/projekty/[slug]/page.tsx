import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTheme, themes } from '@/lib/projects'
import { WeddingSite } from '@/components/wedding/wedding-site'

export function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const theme = getTheme(slug)
  if (!theme) return { title: 'Projekt nenalezen' }
  return {
    title: `${theme.name} — svatební web | Svatební světy`,
    description: theme.tagline,
  }
}

export default async function ProjektPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const theme = getTheme(slug)
  if (!theme) notFound()
  return <WeddingSite theme={theme} />
}
