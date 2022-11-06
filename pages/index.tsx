import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';

export default function HomePage() {
  return <HomeTemplate />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
