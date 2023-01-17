import Header from './Header';

import * as S from './style';
import {ReactNode} from 'react';

import SideBar from './SideBar';
import {useAxiosInterceptor} from '../../hooks/useAxiosInterceptor';
import TopBar from './TopBar';

export default function Layout({children}: {children?: ReactNode}) {
  useAxiosInterceptor(); // AxiosInterceptor 선언

  // return (
  //   <>
  //     <Header />
  //     <S.Main>
  //       <Nav />
  //       <S.MainWrapper>{children}</S.MainWrapper>
  //       <SideBar />
  //     </S.Main>
  //     <Footer />
  //   </>
  // );

  return (
    <div>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Sidebar */}
        <SideBar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <TopBar />
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">{children}</div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2020</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </div>
  );
}
