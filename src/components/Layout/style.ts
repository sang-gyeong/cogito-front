import styled from 'styled-components';
import {media} from '../../utils/mediaQuery';

// layout
export const Wrapper = styled.div`
  display: flex;
`;

export const ContentWrapper = styled.div`
  background-color: #f8f9fc;
  width: 100%;
  overflow-x: hidden;
`;

export const Content = styled.div`
  flex: 1 0 auto;
`;

export const MainWrapper = styled.div`
  display: flex;
`;

export const Main = styled.div`
  width: 70%;
  max-width: 960px;
  margin: 0 auto;

  ${media.tablet} {
    width: 100%;
  }
`;

//header

//sidebar
