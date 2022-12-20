import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import {QueryClient, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import {getUsers} from '../src/api';
import {QUERY_KEY} from '../src/queries/useTagsQuery';
import UserTemplate from '../src/components/templates/UserTemplate';

export default function UserPage() {
  return <UserTemplate />;
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY], getUsers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
