import styled from 'styled-components';
import Image from 'next/image';
import KakaoLogo from 'public/img/kakao.png';
import GithubLogo from 'public/img/github.png';

const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize';
const GITHUB_LOGIN_URL = 'https://github.com/login/oauth/authorize';
const KAKAO_REDIRECT_URI = 'https://dev.cogito.shop/auth/kakao';

export default function LoginModal() {
  const clickKakaoLogin = () => {
    window.location.href =
      KAKAO_LOGIN_URL +
      `?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  };

  const clickGithubLogin = () => {
    window.location.href = GITHUB_LOGIN_URL + `?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;
  };

  return (
    <Wrapper>
      <Button style={{backgroundColor: '#FADC3F', color: 'black'}} onClick={clickKakaoLogin}>
        <Image src={KakaoLogo} alt="kakao-logo" width={33} height={33} />
        카카오로 로그인하기
      </Button>
      <Button style={{backgroundColor: 'black', color: 'white'}} onClick={clickGithubLogin}>
        <Image src={GithubLogo} alt="github-logo" width={38} height={37} />
        Github로 로그인하기
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 200px;
`;

const Button = styled.div`
  width: 400px;
  max-width: 80%;
  height: 55px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
