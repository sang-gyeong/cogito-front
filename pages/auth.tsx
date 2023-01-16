import {GetServerSideProps} from 'next';
import {getAccessToken} from '../src/api/auth';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {getSessionStorageItem, setLocalStorageItem} from '../src/utils/storage';
import moment from 'moment';

export default function AuthPage({accessToken}: {accessToken: string | null}) {
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      setLocalStorageItem('accessToken', accessToken);
      setLocalStorageItem('expiresAt', moment().add(30, 'minutes').format('yyyy-MM-DD HH:mm:ss'));
    } else {
      window.alert('로그인에 실패하였습니다.\n잠시 후에 다시 시도해주세요');
      router.replace('/login');

      return;
    }
    const currentPath = getSessionStorageItem('currentPath') || '/';

    router.replace(currentPath);
  }, [accessToken, router.asPath]);

  return <></>;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const authToken = context.query?.code as string;
  const host = context.query?.host as string;

  if (!authToken || !host) {
    return {
      props: {accessToken: null},
    };
  }

  const data = await getAccessToken(host, authToken);
  console.log('token result : ', data);

  if (!data) {
    return {
      props: {accessToken: null},
    };
  }

  const {accessToken, refreshToken} = data;

  context.res.setHeader('set-cookie', `refreshToken=${refreshToken}; path=/; httponly;`);

  return {
    props: {accessToken},
  };
};
