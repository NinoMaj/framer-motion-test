import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

interface Props {
  title?: string
  children: React.ReactNode
}

export const Layout = ({
  title = 'This is the default title',
  children,
}: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}
