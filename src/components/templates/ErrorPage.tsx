import React from 'react'
import Head from 'next/head'

export const ErrorPage: React.FC<{ statusCode: number }> = ({ statusCode }) => {
  const title = 'Error'
  return (
    <>
      <Head>
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <title>{title}</title>
      </Head>
      <div className="flex absolute inset-0" justify="center">
        <main className="flex items-center">
          <h1>Error</h1>
          {statusCode && <p>Error code: {statusCode}</p>}
        </main>
      </div>
    </>
  )
}
