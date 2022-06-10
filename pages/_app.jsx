import React from 'react'
import Head from 'next/head'
import '../css/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Timer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
