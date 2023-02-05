import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/style.css';
import '../styles/sb-admin-2.min.css';
import '../vendor/fontawesome-free/css/all.min.css';

import {ReactElement, ReactNode, useEffect, useState} from 'react';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {Hydrate, DehydratedState, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {RecoilRoot} from 'recoil';
import Modal from '../src/components/Modal';
import {useRouter} from 'next/router';
import {getSessionStorageItem, setSessionStorageItem} from '../src/utils/storage';

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
  const router = useRouter();

  useEffect(() => {
    const prevPath = getSessionStorageItem('currentPath') ?? router.pathname;

    setSessionStorageItem('prevPath', prevPath);
    setSessionStorageItem('currentPath', globalThis.location.pathname);
  }, [router.pathname]);

  // queryClient는 lifeCycle 주기당 인스턴스가 1번만 생성되도록 App 외부, state, 혹은 ref 등으로 저장한다.
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: error => console.log('queryClient error : ', error),
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            // SSR 이후 useQuery()로 refetch가 일어나는 것을 비활성화고자 한다면, refetchOnMount를 false로 설정하거나 staleTime을 Infinity로 주는 등의 방법이 있다.
            refetchOnMount: false,
            retry: false,
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
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {/* <ThemedGlobalStyle /> */}
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
