import * as React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Layout } from '../components/Layout'
import { Refresh } from '../components/Refresh'
import { Simplest } from '../components/Simplest'

export default function Page() {
  const [count, setCount] = React.useState(0)

  return (
    <Layout title="simplest">
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Simplest key={count} />
      </div>
      <style jsx global>{`
        body {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(
            180deg,
            #ff008c 0%,
            rgb(211, 9, 225) 100%
          );
          overflow: hidden;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .example-container div {
          background: white;
          border-radius: 30px;
          width: 150px;
          height: 150px;
        }

        .refresh {
          padding: 10px;
          position: absolute;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 10px;
          width: 20px;
          height: 20px;
          top: 10px;
          right: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      `}</style>
    </Layout>
  )
}
