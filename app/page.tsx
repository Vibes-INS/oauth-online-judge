'use client'

import { Button } from '@chakra-ui/react'

export default function Home({
  searchParams,
}: {
  params: {}
  searchParams: { access_token?: string }
}) {
  const onSubmit = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=6b8b5ac3daf18a38d8a7&redirect_uri=${window.location.href}oauth/redirect`
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={onSubmit} isDisabled={!!searchParams.access_token}>
        Submit
      </Button>
    </main>
  )
}
