import {ReactNode} from 'react';
import {useFetchUserData} from '../../hooks/useFetchUserData';
import useUserQuery from '../../queries/useUserQuery';
import Footer from './Footer';

import SideBar from './SideBar';
import Header from './Header';

export default function Layout({children}: {children?: ReactNode}) {
  useFetchUserData();

  return (
    <div>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div>{children}</div>
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
