import styled from 'styled-components';
import {media} from '../../utils/mediaQuery';

export const NavWrapper = styled.nav`
  background-color: #f2f2f2;
  /* width: 20%; */
  min-width: 140px;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 72px 24px;
  text-align: right;
`;

export const NavItem = styled.a<{isActive?: boolean}>`
  font-size: 1.4rem;
  color: ${props => (props.isActive ? '#0d6efd' : 'black')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`;

export const Header = styled.header`
  width: 100%;
  height: 55px;
  box-shadow: 0px 1px 5px lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  gap: 20px;
  top: 0;
  background-color: #f9f9f9;
`;

export const InputSearch = styled.input`
  border: 1px solid gray;
  width: 700px;
  height: 32px;

  ${media.mobile} {
    display: none;
  }
`;

export const Footer = styled.footer`
  width: 100%;

  ${media.tablet} {
  }

  ${media.mobile} {
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  min-height: calc(100vh - 60px);
`;

export const MainWrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
`;
