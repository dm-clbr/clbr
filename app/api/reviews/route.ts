import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('Supabase environment variables missing in reviews API')
}

const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseServiceKey || 'placeholder-key'
)

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'customer', 'rep', or null for all
    const featured = searchParams.get('featured') // 'true' for featured only
    const limit = parseInt(searchParams.get('limit') || '50')

    // Build query with optional filters
    let query = supabase
      .from('reviews')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false })

    if (type && (type === 'customer' || type === 'rep')) {
      query = query.eq('type', type)
    }

    if (featured === 'true') {
      query = query.eq('featured', true)
    }

    const { data: reviews, error } = await query.limit(limit)

    if (error) throw error

    return NextResponse.json(reviews || [])
  } catch (error) {
    console.error('Reviews API Error:', error)
    
    // Return mock data with actual CLBR review videos
    const mockReviews = [
      {
        id: '1',
        title: 'Noah Sorenson - Rep Review',
        description: 'CLBR sales rep Noah Sorenson shares his experience working at CLBR',
        video_url: 'https://vz-a709db05-aaf.b-cdn.net/20eaaa09-9e22-4c45-96c3-4f3c8c9d7bfc/play_1080p.mp4',
        thumbnail_url: '/images/rep-review-thumbnail.png',
        type: 'rep',
        featured: true,
        rep_name: 'Noah Sorenson',
        location: 'CLBR Sales',
        date_recorded: '2026-02-01',
        status: 'active'
      },
      {
        id: '2',
        title: 'Andrew Rietveld - Rep Review',
        description: 'CLBR sales rep Andrew Rietveld discusses his success and experience',
        video_url: 'https://vz-597613.b-cdn.net/bde3f6e5-dbcb-4bb0-93ed-8137cdcc1dae/play_1080p.mp4',
        thumbnail_url: '/images/rep-review-thumbnail.png',
        type: 'rep',
        featured: true,
        rep_name: 'Andrew Rietveld',
        location: 'CLBR Sales',
        date_recorded: '2026-02-01',
        status: 'active'
      },
      {
        id: '3',
        title: 'Kaden Blake - Rep Review',
        description: 'CLBR sales rep Kaden Blake shares what makes CLBR different',
        video_url: 'https://vz-597613.b-cdn.net/de9799cb-cfb6-4859-9df6-1f98be83b43a/play_1080p.mp4',
        thumbnail_url: '/images/rep-review-thumbnail.png',
        type: 'rep',
        featured: true,
        rep_name: 'Kaden Blake',
        location: 'CLBR Sales',
        date_recorded: '2026-02-01',
        status: 'active'
      }
    ]

    return NextResponse.json(mockReviews)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { data: review, error } = await supabase
      .from('reviews')
      .insert([body])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(review)
  } catch (error) {
    console.error('Create Review Error:', error)
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body
    
    const { data: review, error } = await supabase
      .from('reviews')
      .update({ ...updateData, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(review)
  } catch (error) {
    console.error('Update Review Error:', error)
    return NextResponse.json({ error: 'Failed to update review' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json({ error: 'Review ID required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete Review Error:', error)
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 })
  }
}
