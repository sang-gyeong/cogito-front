import {useRouter} from 'next/router';
import {ReactElement, useEffect} from 'react';
import {logout} from '../src/api/auth';
import Layout from '../src/components/Layout';

export default function LogoutPage() {
  const router = useRouter();
  const requestLogout = async () => {
    const data = await logout();

    console.log('data : ', data);

    router.replace('/');
  };

  useEffect(() => {
    requestLogout();

    // localStorage.removeItem('accessToken');
  }, []);

  return <></>;
}

LogoutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
