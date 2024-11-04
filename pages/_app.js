import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} key={pageProps.locale} />
    </Fragment>
  )
}

export default appWithTranslation(MyApp, {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja', 'ko', 'es'],
  },
})