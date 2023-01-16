import Header from './Header';
import Footer from './Footer';
import * as S from './style';
import {ReactNode} from 'react';
import Nav from './Nav';
import SideBar from './SideBar';
import {useAxiosInterceptor} from '../../hooks/useAxiosInterceptor';

export default function Layout({children}: {children?: ReactNode}) {
  useAxiosInterceptor(); // AxiosInterceptor 선언

  return (
    <>
      <Header />
      <S.Main>
        <Nav />
        <S.MainWrapper>{children}</S.MainWrapper>
        <SideBar />
      </S.Main>
      <Footer />
    </>
  );
}
