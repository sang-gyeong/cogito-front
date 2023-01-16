import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import {GetServerSideProps} from 'next';

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
