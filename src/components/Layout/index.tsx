import {ReactNode, useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import * as S from './style';
// utils, atoms, hooks
import {navFoldState} from '../../atoms/nav';
import useMyQuery from '../../queries/useMyQuery';
// components
import SideWrapper from '../Common/SideWrapper';
import Footer from './Footer';
import SideBar from './SideBar';
import Header from './Header';
import styled from 'styled-components';
import {media} from '../../utils/mediaQuery';

import {EventSourcePolyfill} from 'event-source-polyfill';

import {getLocalStorageItem} from '../../utils/storage';

export default function Layout({children, hasSide}: {children?: ReactNode; hasSide: boolean}) {
  useMyQuery();

  const [isNavFold, setIsNavFold] = useRecoilState(navFoldState);

  const onClickDimmed = () => {
    setIsNavFold(true);
  };

  useEffect(() => {
    const accessToken = getLocalStorageItem('accessToken', '');

    const eventSource = new EventSourcePolyfill('https://dev.cogito.shop/api/notifications/subscribe', {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'text/event-stream',
      },
    });

    eventSource.addEventListener('open', () => {
      console.log(' open !!');
    });
    eventSource.addEventListener('sse', (event: any) => {
      console.log('message!', event);
      console.log('message2!', event.data);

      const data = JSON.stringify(event.data);
      console.log('data : ', data);
    });
    // eventSource.addEventListener('error', err => {
    //   console.log('error : ', err);
    // });

    eventSource.onopen = () => {
      console.log('open!');
    };
    eventSource.onmessage = message => {
      console.log('message!', message.data);

      const data = JSON.stringify(message.data);
      console.log('data : ', data);
    };

    setTimeout(() => console.log(eventSource), 5000);
  }, []);

  return (
    <>
      <S.Wrapper id="wrapper" className={isNavFold ? 'sidebar-toggled' : ''}>
        <SideBar />
        <S.ContentWrapper id="content-wrapper" className="d-flex flex-column">
          <S.Content id="content">
            <Header />
            <S.MainWrapper>
              <S.Main>{children}</S.Main>
              {hasSide && <SideWrapper />}
            </S.MainWrapper>
          </S.Content>
          <Footer />
        </S.ContentWrapper>
      </S.Wrapper>
      <Dimmed onClick={onClickDimmed} isNavFold={isNavFold} />
    </>
  );
}

const Dimmed = styled.div<{isNavFold: boolean}>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 990;
  display: none;

  ${media.tablet} {
    display: ${({isNavFold}) => (isNavFold ? 'none' : 'block')};
  }
`;
