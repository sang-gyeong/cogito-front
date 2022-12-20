import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import {QueryClient, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import {getTags} from '../src/api';
import {QUERY_KEY} from '../src/queries/useTagsQuery';
import TagTemplate from '../src/components/templates/TagTemplate';

export default function TagPage() {
  return <TagTemplate />;
}

TagPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([QUERY_KEY], getTags);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
