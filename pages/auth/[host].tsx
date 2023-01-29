import {getAccessToken} from '../../src/api/auth';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {setLocalStorageItem} from '../../src/utils/storage';
import moment from 'moment';

export default function AuthPage() {
  const router = useRouter();

  const host = router.query?.host as string;
  const authToken = router.query?.code as string;

  const loadAccessToken = async (host: string, authToken: string) => {
    if (!host || !authToken) {
      return;
    }

    const data = await getAccessToken(host, authToken);

    if (!data) {
      window.alert('로그인에 실패하였습니다.\n잠시 후에 다시 시도해주세요');
      router.replace('/login');

      return;
    }

    setLocalStorageItem('accessToken', data.accessToken);
    setLocalStorageItem('expiresAt', moment().add(30, 'minutes').format('yyyy-MM-DD HH:mm:ss'));

    if (!data.registered) {
      router.replace('/my');
    }

    router.replace('/');
  };

  useEffect(() => {
    if (host && authToken) {
      loadAccessToken(host, authToken);
    }
  });

  return <></>;
}
