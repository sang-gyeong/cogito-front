import Link from 'next/link';
import {Button} from 'react-bootstrap';
import {useRecoilState} from 'recoil';
import styled from 'styled-components';
import {navShowState} from '../../atoms/nav';

export default function SideBar() {
  const [isShowNav, setIsShowNav] = useRecoilState(navShowState);

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isShowNav ? '' : 'toggled'}`}
      id="accordionSidebar">
      <Link href="/">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div className="sidebar-brand-icon rotate-n-15">
            <LogoIcon>🔥</LogoIcon>
          </div>
          {isShowNav && (
            <LogoTitle className="">
              COGITO <LogoSup>0.1v</LogoSup>
            </LogoTitle>
          )}
        </a>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      <ButtonWrapper>
        <Link href="/new">
          <Button variant="primary" href="#">
            {isShowNav ? '+ 새 질문 생성하기' : '질문하기'}
          </Button>
        </Link>
      </ButtonWrapper>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">페이지</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item active">
        <Link href="/questions">
          <Tab className="nav-link" href="#">
            <i className="fa-fw"></i>
            <span className="material-symbols-outlined">live_help</span>
            <span className="label">Questions</span>
          </Tab>
        </Link>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <Link href="#">
          <Tab className="nav-link" href="#" onClick={() => alert('아직 개발중인 페이지입니다!')}>
            <i className="fa-fw"></i>
            <span className="material-symbols-outlined">bookmarks</span>
            <span className="label">Tags</span>
          </Tab>
        </Link>

        <Link href="#">
          <Tab className="nav-link" href="#" onClick={() => alert('아직 개발중인 페이지입니다!')}>
            <i className="fa-fw"></i>
            <span className="material-symbols-outlined">group</span>
            <span className="label">Users</span>
          </Tab>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">기타기능</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Tab className="nav-link" href="#" onClick={() => alert('아직 개발중인 페이지입니다!')}>
          <i className="fa-fw"></i>
          <span className="material-symbols-outlined">add_circle</span>
          <span className="label">기타 기능 (미오픈)</span>
        </Tab>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={() => setIsShowNav(!isShowNav)} />
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

const ButtonWrapper = styled.div`
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    background-color: white;
    color: #303d62;
    font-size: 0.97rem;
    font-weight: 600;
    width: 180px;
    max-width: 80%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Tab = styled.a`
  display: flex;
  align-items: center;

  & > .label {
    position: relative;
    bottom: 2px;
    left: 5px;
  }
`;

const LogoIcon = styled.span`
  font-size: 1.8rem;
`;

const LogoTitle = styled.div`
  margin-left: 0.5rem;
  font-size: 1.35rem;
  font-weight: 700;
`;

const LogoSup = styled.sup`
  font-weight: 400;
  font-size: 0.01rem;
`;
