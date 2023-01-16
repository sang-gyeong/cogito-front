import {useEffect} from 'react';
import styled from 'styled-components';

const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize';
const GITHUB_LOGIN_URL = 'https://github.com/login/oauth/authorize';
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export default function LoginModal() {
  const clickKakaoLogin = () => {
    window.location.href =
      KAKAO_LOGIN_URL +
      `?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };

  const clickGithubLogin = () => {
    window.location.href =
      GITHUB_LOGIN_URL + `?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  };

  return (
    <Wrapper>
      <Button style={{backgroundColor: 'gold'}} onClick={clickKakaoLogin}>
        카카오로 로그인하기
      </Button>
      <Button style={{backgroundColor: 'black', color: 'white'}} onClick={clickGithubLogin}>
        Github로 로그인하기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Button = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
