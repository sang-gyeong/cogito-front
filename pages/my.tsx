import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';

export default function MyPage() {
  return <div>마이페이지 (준비중)</div>;
}

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
