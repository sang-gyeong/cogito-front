import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import styled from 'styled-components';
import {useRouter, withRouter} from 'next/router';
import {GetServerSideProps} from 'next';

export default function LoginPage() {
  const clickHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=fdd05f39c2f7d125cbc44a59911390b7&redirect_uri=http://localhost:3000/auth&response_type=code`;
  };

  return (
    <Wrapper>
      <Button style={{backgroundColor: 'gold'}} onClick={clickHandler}>
        카카오로 로그인하기
      </Button>
      <Button style={{backgroundColor: '#2DB400', color: 'white'}}>네이버로 로그인하기</Button>
      <Button style={{backgroundColor: 'black', color: 'white'}}>Github로 로그인하기</Button>
    </Wrapper>
  );
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

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

export const getServerSideProps: GetServerSideProps = async ctx => {
  console.log('referrer : ', ctx.req.headers.referrer);
  return {
    props: {},
  };
};
