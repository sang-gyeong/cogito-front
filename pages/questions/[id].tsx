import {useRouter} from 'next/router';
import {ReactElement} from 'react';
import Layout from '../../src/components/Layout';
import BoardTemplate from '../../src/components/templates/BoardTemplate';
import {QueryClient, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import {getBoardById} from '../../src/api';
import {QUERY_KEY} from '../../src/queries/useBoardQuery';

export default function BoardPage() {
  const router = useRouter();
  const id = Number(router.query.id);

  return <BoardTemplate id={id} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const id = Number(context.query.id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY, {id}], () => getBoardById(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

BoardPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
