import React from 'react'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import type { AppProps } from '@/types/next'
import pkg from '~/package.json'

import '@/styles/global.css'
import '@/styles/nprogress.css'
import 'windi.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App: React.FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo title={pkg.name} titleTemplate={`%s · ${pkg.displayName}`} description={pkg.description} />
      {Component.disableLayout ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  )
}

export default App
