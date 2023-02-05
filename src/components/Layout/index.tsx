import {ReactNode} from 'react';
import {useRecoilValue} from 'recoil';
import * as S from './style';
// utils, atoms, hooks
import {navFoldState} from '../../atoms/nav';
import useUserQuery from '../../queries/useUserQuery';
// components
import SideWrapper from '../Common/SideWrapper';
import Footer from './Footer';
import SideBar from './SideBar';
import Header from './Header';

export default function Layout({children}: {children?: ReactNode}) {
  const isNavFold = useRecoilValue(navFoldState);
  useUserQuery();

  return (
    <S.Wrapper id="wrapper" className={isNavFold ? 'sidebar-toggled' : ''}>
      <SideBar />
      <S.ContentWrapper id="content-wrapper" className="d-flex flex-column">
        <S.Content id="content">
          <Header />
          <S.MainWrapper>
            <S.Main>{children}</S.Main>
            <SideWrapper />
          </S.MainWrapper>
        </S.Content>
        <Footer />
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
