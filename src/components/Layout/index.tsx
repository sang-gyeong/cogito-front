import {ReactNode} from 'react';
import {useFetchUserData} from '../../hooks/useFetchUserData';
import Footer from './Footer';
import SideBar from './SideBar';
import Header from './Header';
import {useRecoilValue} from 'recoil';
import {navShowState} from '../../atoms/nav';
import styled from 'styled-components';
import SideWrapper from '../Common/SideWrapper';
import {media} from '../../utils/mediaQuery';

export default function Layout({children}: {children?: ReactNode}) {
  const isShowNav = useRecoilValue(navShowState);
  useFetchUserData();

  return (
    <div className={isShowNav ? 'sidebar-toggled' : ''}>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <MainWrapper>
              <Main>{children}</Main>
              <SideWrapper />
            </MainWrapper>
          </div>
          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </div>
  );
}

const MainWrapper = styled.div`
  display: flex;
`;

const Main = styled.div`
  width: 70%;
  max-width: 960px;
  margin: 0 auto;

  ${media.tablet} {
    width: 100%;
  }
`;
