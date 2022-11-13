import styled from 'styled-components';
import {media} from '../../utils/mediaQuery';

export const NavWrapper = styled.nav`
  width: 400px;
  height: 100%;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: scroll;
  padding: 72px 24px;
  text-align: right;
`;

export const NavItem = styled.a`
  font-size: 1.4rem;
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
  height: 400px;
  background-color: #f2f2f2;

  ${media.tablet} {
    background-color: red;
  }

  ${media.mobile} {
    background-color: blue;
  }
`;

export const Main = styled.main`
  display: flex;
  border: 3px solid green;
`;

export const MainWrapper = styled.div`
  height: 1500px;
  border: 3px solid blue;
`;
