/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import 'antd/dist/antd.css'
import '../styles/app.css'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>skyfall</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:100" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}