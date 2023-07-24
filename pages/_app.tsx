import type { AppProps } from 'next/app'
import ApolloSetting from '../src/components/commons/apollo'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
      <Global styles={globalStyles}/>
      <Component {...pageProps} />
      </>
    </ApolloSetting>
    )
}