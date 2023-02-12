import {ReactElement} from 'react';
import Layout from '../../src/components/Layout';
import UserTemplate from '../../src/components/templates/UserTemplate';
import {QueryClient, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import {QUERY_KEY} from '../../src/queries/useUserQuery';
import {getUserDataById} from '../../src/api/user';

export default function UserPage({id}: {id: number}) {
  return <UserTemplate id={id} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const id = Number(context.query.id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY, {id}], () => getUserDataById(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
};

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout hasSide={false}>{page}</Layout>;
};
