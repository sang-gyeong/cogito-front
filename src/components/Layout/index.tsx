import Header from './Header';
import Footer from './Footer';
import * as S from './style';
import {ReactNode} from 'react';
import Nav from './Nav';

export default function Layout({children}: {children?: ReactNode}) {
  return (
    <>
      <Header />
      <S.Main>
        <Nav />
        {children}
      </S.Main>
      <Footer />
    </>
  );
}
