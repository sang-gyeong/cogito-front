import styled from 'styled-components';
import {media} from '../../utils/mediaQuery';

export default function SideWrapper() {
  return (
    <Wrapper>
      <Content>🔧</Content>
      <span style={{fontSize: '0.8rem'}}>새 기능 오픈 준비중입니다 (뚝딱뚝딱)</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #eef1f7;
  min-height: 100vh;
  width: 350px;
  min-width: 30%;
  padding: 100px 0;
  text-align: center;

  ${media.laptop} {
    display: none;
  }
`;

const Content = styled.div`
  font-size: 6rem;
`;
