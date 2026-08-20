import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })
    const res = await payload.find({
      collection: 'tournaments',
      limit: 100,
      pagination: false,
      where: {
        visibility: {
          equals: 'public',
        },
      },
    })

    return NextResponse.json({ tournaments: res.docs || [] })
  } catch (err: any) {
    return NextResponse.json({ tournaments: [], error: err?.message || 'Database empty' })
  }
}
