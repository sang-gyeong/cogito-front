import Link from 'next/link';
import {useRouter} from 'next/router';
import {Button} from 'react-bootstrap';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {navFoldState} from '../../atoms/nav';
import styled from 'styled-components';
import useMyQuery, {QUERY_KEY} from '../../queries/useMyQuery';
import {MouseEvent, useEffect} from 'react';
import {MdQuestionAnswer} from 'react-icons/md';
import {FcAbout} from 'react-icons/fc';
import {BsFillPeopleFill} from 'react-icons/bs';
import {useGetDevice} from '../../hooks/useGetDevice';
import {DeviceType, DEVICE_TYPE} from '../../constants/platform';
import {media} from '../../utils/mediaQuery';
import LoginModal from '../Modal/loginModal';
import {modalState} from '../../atoms/modal';
import Logo from '../Common/Logo';

export default function SideBar() {
  const router = useRouter();
  const [isNavFold, setIsNavFold] = useRecoilState<boolean>(navFoldState);
  const {refetch} = useMyQuery();
  const deviceType = useGetDevice();
  const setModalState = useSetRecoilState(modalState);

  const validateUserState = async () => {
    const {data: user} = await refetch({queryKey: [QUERY_KEY]});

    const isLoggedIn = user?.userId;

    if (isLoggedIn) {
      router.push('/new');
    } else {
      window.alert('로그인이 필요합니다');

      setModalState({
        isShow: true,
        component: <LoginModal />,
        title: '로그인',
        closeCallBack: () => console.log('tada!!'),
        config: {size: 'lg', closeButton: true, centered: false},
      });
    }
  };

  const onClickAskButton = (event: MouseEvent) => {
    event.preventDefault();

    validateUserState();
  };

  const alertHandler = (event: MouseEvent) => {
    event.preventDefault();

    alert('아직 개발중인 페이지입니다!');
  };

  useEffect(() => {
    if (deviceType === DeviceType.desktop || deviceType === DeviceType.laptop) {
      setIsNavFold(false);
    } else {
      setIsNavFold(true);
    }
  }, [deviceType, router.asPath]);

  return (
    <Wrapper
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isNavFold ? 'toggled' : ''}`}
      id="accordionSidebar"
      isNavFold={isNavFold}>
      {/* 로고 */}
      <LogoWrapper>
        <Logo isHeader={false} />
      </LogoWrapper>
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
        <Link href="/users" passHref>
          <Tab className="nav-link">
            <IconWrapper isNavFold={isNavFold}>
              <BsFillPeopleFill />
            </IconWrapper>
            <TabLabel>Users</TabLabel>
          </Tab>
        </Link>
      </li>

      <hr className="sidebar-divider" style={{margin: '1rem'}} />
      <div className="sidebar-heading">기타기능</div>
      <li className="nav-item">
        <Tab className="nav-link" href="#" onClick={alertHandler}>
          <IconWrapper isNavFold={isNavFold}>
            <FcAbout />
          </IconWrapper>
          <TabLabel>코기토에 문의하기 (준비중)</TabLabel>
        </Tab>
      </li>

      {/* <FoldButtonWrapper className="text-center d-md-inline">
        <FoldButton className="rounded-circle" id="sidebarToggle" onClick={onClickFoldButton} />
      </FoldButtonWrapper> */}
    </Wrapper>
  );
}

const LogoWrapper = styled.div`
  padding-left: 16px;
`;

const IconWrapper = styled.div<{isNavFold: boolean}>`
  font-size: 1rem;
  display: inline-block;
  padding-right: 8px;
`;

const Wrapper = styled.ul<{isNavFold: boolean}>`
  position: relative;
  height: 100%;
  z-index: 1000;
  box-shadow: none;

  ${media.tablet} {
    position: absolute;
    box-shadow: ${({isNavFold}) => (isNavFold ? 'none' : '1rem 0 1rem rgba(0, 0, 0, 0.07)')};
  }
`;

const ButtonWrapper = styled.div`
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #303d62;
  background-image: linear-gradient(90deg, #303d62 10%, #517495 100%);

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
  color: #303d62;

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
