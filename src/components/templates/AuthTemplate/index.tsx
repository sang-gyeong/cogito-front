import {useEffect} from 'react';
import {redirect} from 'react-router-dom';

export default function AuthPage() {
  // useEffect(() => {
  //   const url = window.location.href;
  //   const queryParams = new URL(url).searchParams;
  //   const token = queryParams.get('code');

  //   window.document.cookie = 'token = ' + token;
  // });

  return <div>auth 페이지입니다</div>;
}
