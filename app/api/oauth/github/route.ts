import axios from 'axios'
import { NextResponse, NextRequest } from 'next/server'
import type { NextApiResponse } from 'next'
import {
  GITHUB_OAUTH_CLIENT_ID,
  GITHUB_OAUTH_CLIENT_SECRET_ID,
} from '@/constants/env'

export async function POST(request: NextRequest, response: NextApiResponse) {
  const body = await request.json()
  if (!body.code) {
    return NextResponse.json(
      { error: 'Parameter Code required' },
      { status: 401 }
    )
  }
  const tokenResponse = await axios.post<{ access_token: string }>(
    'https://github.com/login/oauth/access_token',
    {
      client_id: GITHUB_OAUTH_CLIENT_ID,
      client_secret: GITHUB_OAUTH_CLIENT_SECRET_ID,
      code: body.code,
    },
    {
      headers: {
        accept: 'application/json',
      },
    }
  )
  return NextResponse.json(tokenResponse.data, { status: tokenResponse.status })
}
