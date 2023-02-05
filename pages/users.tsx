import {ReactElement} from 'react';
import Layout from '../src/components/Layout';

import UserTemplate from '../src/components/templates/UserTemplate';

export default function UserPage() {
  return <UserTemplate />;
}

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery([QUERY_KEY], getUsers);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// };
