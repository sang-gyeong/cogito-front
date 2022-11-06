import type {AppProps} from 'next/app';
import {ReactElement, ReactNode} from 'react';
import {NextPage} from 'next';
import Head from 'next/head';
import ThemedGlobalStyle from '../src/theme/ThemedGlobalStyle';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <Head>
        <title>Cogito : 나는 생각한다</title>
      </Head>
      <ThemedGlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
