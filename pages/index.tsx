import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import {QueryClient, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import {getBoards} from '../src/api';
import {QUERY_KEY} from '../src/queries/useBoardsQuery';

export default function HomePage() {
  return <></>;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/questions',
      permanent: false,
    },
  };
};
