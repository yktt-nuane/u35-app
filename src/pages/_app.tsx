import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import '@/styles/globals.css'

export { reportWebVitals } from 'next-axiom'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>JICAP</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
