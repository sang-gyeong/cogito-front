import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import NewTemplate from '../src/components/templates/NewTemplate';

export default function NewPage() {
  return <NewTemplate />;
}

NewPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
