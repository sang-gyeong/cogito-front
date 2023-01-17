import Link from 'next/link';
import styled from 'styled-components';

export default function SideBar() {
  // <S.NavWrapper>
  //     <Link href="/questions">
  //       <S.NavItem isActive={router.pathname.indexOf('/questions') !== -1}>Questions</S.NavItem>
  //     </Link>
  //     <Link href="/tags">
  //       <S.NavItem isActive={router.pathname.indexOf('/tags') !== -1}>Tags</S.NavItem>
  //     </Link>
  //     <Link href="/users">
  //       <S.NavItem isActive={router.pathname.indexOf('/users') !== -1}>Users</S.NavItem>
  //     </Link>
  //   </S.NavWrapper>
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <Link href="/">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            COGITO <sup>0.1</sup>
          </div>
        </a>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link href="/">
          <a className="nav-link" href="#">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Home</span>
          </a>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Interface</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item active">
        <Link href="/questions">
          <a className="nav-link" href="#">
            <span>Questions</span>
          </a>
        </Link>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <Link href="/tags">
          <a className="nav-link" href="#">
            <span>Tags</span>
          </a>
        </Link>

        <Link href="/users">
          <a className="nav-link" href="#">
            <span>Users</span>
          </a>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">기타기능</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-folder" />
          <span>기타 기능 (미오픈)</span>
        </a>
        <div
          id="collapsePages"
          className="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <a className="collapse-item" href="#">
              페이지 1 (미오픈)
            </a>
            <a className="collapse-item" href="#">
              페이지 2 (미오픈)
            </a>
            <a className="collapse-item" href="#">
              페이지 3 (미오픈)
            </a>
          </div>
        </div>
      </li>

      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
}

const Wrapper = styled.div`
  max-width: 370px;
  width: 40%;
  background-color: beige;
  padding-left: 30px;
`;
