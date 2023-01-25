import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import {dehydrate, QueryClient} from '@tanstack/react-query';
import {QUERY_KEY} from '../src/queries/usePostsQuery';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {getPosts} from '../src/api/post';

export default function QuestionsPage() {
  const router = useRouter();

  return (
    <div>
      <HomeTemplate />
    </div>
  );
}

QuestionsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const query = (context.query?.query ?? '') as string;
  const page = context.query?.page ? Number(context.query?.page) : 0;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY, query, page], () => getPosts({query, page}));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
