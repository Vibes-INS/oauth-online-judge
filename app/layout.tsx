import { Providers } from './providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<style>{`*/}
      {/*  html, body {*/}
      {/*    font-family: ${inter.style.fontFamily};*/}
      {/*  }*/}
      {/*`}</style>*/}
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
