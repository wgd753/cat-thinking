import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

// 使用 getInitialProps 而不是在每个页面使用 getStaticProps
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default appWithTranslation(MyApp)