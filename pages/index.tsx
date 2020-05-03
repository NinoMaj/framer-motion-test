import * as React from 'react'
import Link from 'next/link'

import { Layout } from '../components/Layout'

export default function Page() {
  return (
    <Layout title="home">
      <h1>Available animations</h1>
      <ul>
        <li>
          <Link href="/simplest">
            <a>Simplest animation</a>
          </Link>
        </li>
        <li>
          <Link href="/keyframes">
            <a>Keyframes</a>
          </Link>
        </li>
        <li>
          <Link href="/variants">
            <a>Variants</a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
