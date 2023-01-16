import {setLocalStorageItem} from './../utils/storage';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import customAxios from '../api';
import {isServer} from '../utils/isServer';
import {getLocalStorageItem} from '../utils/storage';
import moment from 'moment';
import cookies from 'react-cookies';
import {reissueToken} from '../api/auth';

export function useAxiosInterceptor() {
  const requestInterceptor = customAxios.interceptors.request.use(async request => {
    const refreshToken = cookies.load('refreshToken');
    const expiresAt = getLocalStorageItem('expiresAt', moment().format('yyyy-MM-DD HH:mm:ss'));

    // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
    if (moment(expiresAt).diff(moment()) < 0 && refreshToken && request.headers) {
      request.headers['Authorization'] = `Bearer ${refreshToken}`;

      const data = await reissueToken();

      console.log('-----requestInterceptor reissueToken response : ', data);

      if (data) {
        setLocalStorageItem('accessToken', data.accessToken);
        setLocalStorageItem('expiresAt', moment().add(30, 'minutes').format('yyyy-MM-DD HH:mm:ss'));
        // @TODO: 쿠키 만료시간 지정
        cookies.save('refreshToken', data.refreshToken, {httpOnly: true});
      }
    }

    const accessToken = getLocalStorageItem('accessToken', '');

    console.log('-----requestInterceptor refreshToken : ', refreshToken);
    console.log('-----requestInterceptor accessToken : ', accessToken);

    if (request.headers && accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return request;
  });

  const responseInterceptor = customAxios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (['A008', 'A011', 'A012', 'A013'].includes(error?.response?.data?.code) && !isServer()) {
        cookies.remove('refreshToken');
        globalThis?.localStorage.clear();
      }
      console.log('error : ', error);
      window.alert(error?.response?.data?.message ?? error?.message);
    }
  );

  useEffect(() => {
    return () => {
      customAxios.interceptors.request.eject(requestInterceptor);
      customAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);
}
