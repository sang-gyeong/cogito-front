import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/style.css';
import {ReactElement, ReactNode, useState} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {Hydrate, DehydratedState, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ThemedGlobalStyle from '../src/theme/ThemedGlobalStyle';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';
import Modal from '../src/components/Modal';

type NextPageWithLayout = AppProps & {
  getLayout: (page: ReactElement) => ReactNode;
};

type PageProps = {
  dehydratedState?: DehydratedState;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: PageProps;
};

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: error => console.log(error),
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  );
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <Head>
        <title>Cogito : 코기토</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="preload" href="/api/data" as="fetch" crossorigin="anonymous" /> */}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemedGlobalStyle />
          <RecoilRoot>
            {getLayout(<Component {...pageProps} />)}
            <Modal />
          </RecoilRoot>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
