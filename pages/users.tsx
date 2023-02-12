import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import {dehydrate, QueryClient} from '@tanstack/react-query';
import {QUERY_KEY} from '../src/queries/usePostsQuery';
import {GetServerSideProps} from 'next';
import UsersTemplate from '../src/components/templates/UsersTemplate';
import {getUsers} from '../src/api/user';

export default function UsersPage() {
  return (
    <div>
      <UsersTemplate />
    </div>
  );
}

UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout hasSide={false}>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const query = (context.query?.query ?? '') as string;
  const page = context.query?.page ? Number(context.query?.page) : 0;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY, query, page], () => getUsers({query, page}));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
