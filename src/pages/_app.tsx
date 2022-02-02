import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

import GlobalStyle from 'styles/global.styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="theme-color" content="#1E3A8A" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <NextSeo
        title="TRACTIAN | Monitoramento online de ativos e gestão da manutenção"
        description="Monitore seus ativos industriais com o sistema preditivo mais completo do mercado que te informa sobre a operação, melhorando o desempenho de suas máquinas."
        canonical="https://landingpage.com.br/"
        openGraph={{
          url: 'https://landingpage.com.br/',
          title:
            'TRACTIAN | Monitoramento online de ativos e gestão da manutenção',
          description:
            'Monitore seus ativos industriais com o sistema preditivo mais completo do mercado que te informa sobre a operação, melhorando o desempenho de suas máquinas.',
          images: [
            {
              url: 'https://tractian-ebon.vercel.app/img/cover.png'
            }
          ],
          site_name:
            'TRACTIAN | Monitoramento online de ativos e gestão da manutenção',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@tractian',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
