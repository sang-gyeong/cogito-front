import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import {QueryClient, useQuery, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import {getBoards} from '../src/api';
import {QUERY_KEY} from '../src/queries/useBoardsQuery';

export default function HomePage() {
  return <HomeTemplate />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY], getBoards);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
