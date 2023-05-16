'use client'

import axios from 'axios'
import useSWR from 'swr'
import { redirect } from 'next/navigation'

export default function OAuthRedirect({
  searchParams,
}: {
  params: {}
  searchParams: { code?: string }
}) {
  const { data: accessToken } = useSWR(
    ['access_token', searchParams.code],
    () => {
      if (!searchParams?.code) return null
      return axios
        .post<{ access_token: string }>('/api/oauth/github', {
          code: searchParams.code,
        })
        .then((res) => res.data.access_token)
        .catch((err) => {
          console.error(err)
          return ''
        })
    }
  )
  if (accessToken) {
    return redirect(`/?access_token=${accessToken}`)
  }
  return <div>Waiting</div>
}
