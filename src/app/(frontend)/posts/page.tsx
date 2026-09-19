import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

async function getPublishedPosts() {
  const payload = await getPayload({ config: configPromise })

  return payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })
}

export default async function Page() {
  let posts: Awaited<ReturnType<typeof getPublishedPosts>> | null = null

  try {
    posts = await getPublishedPosts()
  } catch {
    // CMS env vars may be unset during first Netlify builds
  }

  const docs = posts?.docs ?? []
  const page = posts?.page ?? 1
  const totalDocs = posts?.totalDocs ?? 0
  const totalPages = posts?.totalPages ?? 0

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Posts</h1>
        </div>
      </div>

      <div className="container mb-8">
        <PageRange collection="posts" currentPage={page} limit={12} totalDocs={totalDocs} />
      </div>

      <CollectionArchive posts={docs} />

      <div className="container">
        {totalPages > 1 && page && <Pagination page={page} totalPages={totalPages} />}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
