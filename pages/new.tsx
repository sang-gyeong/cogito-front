import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {ReactElement, useEffect} from 'react';
import {useRecoilValue} from 'recoil';
import {userState} from '../src/atoms/user';
import Layout from '../src/components/Layout';
import NewTemplate from '../src/components/templates/NewTemplate';

export default function NewPage() {
  const router = useRouter();
  const user = useRecoilValue(userState);

  useEffect(() => {
    const isLoggedIn = user.userId;

    // if (!isLoggedIn) {
    //   window.alert('로그인이 필요합니다');
    //   router.back();
    // }
  }, []);

  return <NewTemplate />;
}

NewPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
