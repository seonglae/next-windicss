import React from 'react'
import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
} from 'next/document'
import { NextComponentType } from 'next'

const Document: NextComponentType<DocumentContext, DocumentInitialProps, DocumentProps> & {
  renderDocument: (DocumentComponent: new () => unknown, props: unknown) => unknown
} = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await NextDocument.getInitialProps(ctx)
  return { ...initialProps }
}
Document.renderDocument = NextDocument.renderDocument

export default Document
