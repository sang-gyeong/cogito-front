import styled from 'styled-components';
import {media} from '../../utils/mediaQuery';

export default function SideWrapper() {
  return (
    <_SideWrapper>
      <Content>🔧</Content>
      <span style={{fontSize: '0.8rem'}}>새 기능 오픈 준비중입니다 (뚝딱뚝딱)</span>
    </_SideWrapper>
  );
}

const _SideWrapper = styled.div`
  background-color: #eef1f7;
  min-height: 100vh;
  width: 350px;
  min-width: 350px;
  padding: 100px 0;

  text-align: center;

  ${media.tablet} {
    width: 270px;
    min-width: 270px;
  }

  ${media.mobile} {
    display: none;
  }
`;

const Content = styled.div`
  font-size: 6rem;
`;
