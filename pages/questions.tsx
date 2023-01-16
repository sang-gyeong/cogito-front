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
      <button onClick={() => router.push('/login')}>로그인 이동 버튼</button>
      <HomeTemplate />
    </div>
  );
}

QuestionsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const query = (params?.query ?? '') as string;
  const page = params?.page ? Number(params?.page) : 0;
  const size = params?.size ? Number(params?.page) : 15;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY, query, page, size], () => getPosts(query, page, size));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
