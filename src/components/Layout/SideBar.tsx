import Link from 'next/link';
import {useRouter} from 'next/router';
import {Button} from 'react-bootstrap';
import {useRecoilState} from 'recoil';
import {navFoldState} from '../../atoms/nav';
import styled from 'styled-components';
import useUserQuery, {QUERY_KEY} from '../../queries/useUserQuery';
import {MouseEvent} from 'react';
import {MdQuestionAnswer} from 'react-icons/md';
import {FcAbout} from 'react-icons/fc';
import {BsFillPeopleFill} from 'react-icons/bs';
import {useGetDevice} from '../../hooks/useGetDevice';
import {DEVICE_TYPE} from '../../constants/platform';
import {media} from '../../utils/mediaQuery';

export default function SideBar() {
  const router = useRouter();
  const [isNavFold, setIsNavFold] = useRecoilState<boolean>(navFoldState);
  const {refetch} = useUserQuery();
  const deviceType = useGetDevice();

  const isMini = deviceType === DEVICE_TYPE.mobile || deviceType === DEVICE_TYPE.tablet;

  const validateUserState = async () => {
    const {data: user} = await refetch({queryKey: [QUERY_KEY]});

    const isLoggedIn = user?.userId;

    if (isLoggedIn) {
      router.push('/new');
    } else {
      window.alert('로그인이 필요합니다');
    }
  };

  const onClickAskButton = (event: MouseEvent) => {
    event.preventDefault();

    validateUserState();
  };

  const onClickFoldButton = () => setIsNavFold(!isNavFold);

  return (
    <Wrapper
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isNavFold ? 'toggled' : ''}`}
      id="accordionSidebar">
      {/* 로고 */}
      <Link href="/">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
          <div className="sidebar-brand-icon rotate-n-15">
            <LogoIcon>🔥</LogoIcon>
          </div>
          {!isNavFold && !isMini && (
            <LogoTitle>
              COGITO <LogoSup>0.1v</LogoSup>
            </LogoTitle>
          )}
        </a>
      </Link>

      {/* 질문하기 버튼 */}
      <hr className="sidebar-divider my-0" />
      <ButtonWrapper>
        <Button variant="primary" href="#" onClick={onClickAskButton}>
          질문하기
        </Button>
      </ButtonWrapper>

      {/* 페이지 영역 (questions, users, 기타기능) */}
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">페이지</div>
      <li className={`nav-item ${router.pathname === '/questions' ? 'active' : ''}`}>
        <Link href="/questions" passHref>
          <Tab className="nav-link">
            <IconWrapper isNavFold={isNavFold}>
              <MdQuestionAnswer />
            </IconWrapper>
            <TabLabel>Questions</TabLabel>
          </Tab>
        </Link>
      </li>

      <li className={`nav-item ${router.pathname === '/users' ? 'active' : ''}`}>
        <Link href="#">
          <Tab className="nav-link" href="#" onClick={() => alert('아직 개발중인 페이지입니다!')}>
            <IconWrapper isNavFold={isNavFold}>
              <BsFillPeopleFill />
            </IconWrapper>
            <TabLabel>Users</TabLabel>
          </Tab>
        </Link>
      </li>

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">기타기능</div>
      <li className="nav-item">
        <Tab className="nav-link" href="#" onClick={() => alert('아직 개발중인 페이지입니다!')}>
          <IconWrapper isNavFold={isNavFold}>
            <FcAbout />
          </IconWrapper>
          <TabLabel>기타 기능</TabLabel>
        </Tab>
      </li>

      {/* 접기 버튼 */}
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" onClick={onClickFoldButton} />
      </div>
    </Wrapper>
  );
}

const IconWrapper = styled.div<{isNavFold: boolean}>`
  font-size: ${({isNavFold}) => (isNavFold ? '1.3rem' : '1rem')};
  display: inline-block;
  padding-right: ${({isNavFold}) => (isNavFold ? '0' : '8px')};

  ${media.tablet} {
    font-size: 1.3rem;
    padding-right: 0;
  }
`;

const Wrapper = styled.ul``;

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

const TabLabel = styled.span`
  white-space: nowrap;
`;

const Tab = styled.a`
  display: flex;
  flex-direction: row;

  & > span {
    position: relative;
  }

  ${media.tablet} {
    display: inline-block;

    & > span {
      left: 0;
    }
  }
`;

const LogoIcon = styled.span`
  font-size: 1.8rem;
`;

const LogoTitle = styled.div`
  margin-left: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
`;

const LogoSup = styled.sup`
  font-weight: 400;
  font-size: 0.01rem;
`;
