import { NextRequest, NextResponse } from 'next/server'

const AUTH_URL = 'https://worker.knockvia.com/webhooks/auth'
const VERIFY_URL = 'https://worker.knockvia.com/webhooks/rep-verify'
const AUTH_USERNAME = 'marketing'
const AUTH_PASSWORD = '3q+<7TT3s@B'

export async function POST(req: NextRequest) {
  try {
    const { repId } = await req.json()

    if (!repId || typeof repId !== 'string' || !repId.trim()) {
      return NextResponse.json({ ok: false, error: 'Rep ID is required.' }, { status: 400 })
    }

    // Step 1: Authenticate and get a token
    const authRes = await fetch(AUTH_URL, {
      method: 'POST',
      headers: {
        'username': AUTH_USERNAME,
        'password': AUTH_PASSWORD,
        'Content-Type': 'application/json',
      },
    })

    if (!authRes.ok) {
      return NextResponse.json(
        { ok: false, error: 'Authentication failed. Please try again.' },
        { status: 502 }
      )
    }

    const authData = await authRes.json()
    // Response shape: { result, message, data: { token } }
    const token = authData?.data?.token ?? authData.token ?? authData.access_token ?? null

    if (!token) {
      return NextResponse.json(
        { ok: false, error: 'Could not retrieve auth token.' },
        { status: 502 }
      )
    }

    // Step 2: Look up the rep
    const verifyRes = await fetch(`${VERIFY_URL}/${repId.trim()}`, {
      method: 'GET',
      headers: {
        'token': token,
        'Content-Type': 'application/json',
      },
    })

    const verifyData = await verifyRes.json()

    // API returns HTTP 201 for both success and error, check result field
    if (verifyData?.result === 'error' || verifyData?.result !== 'success') {
      return NextResponse.json(
        { ok: false, error: verifyData?.message || 'Rep not found.' },
        { status: 404 }
      )
    }

    return NextResponse.json({ ok: true, data: verifyData?.data ?? verifyData })
  } catch (e) {
    console.error('verify-rep error', e)
    return NextResponse.json({ ok: false, error: 'An unexpected error occurred.' }, { status: 500 })
  }
}
