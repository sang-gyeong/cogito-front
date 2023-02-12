import styled from 'styled-components';
import SideBarToggleButton from '../Common/SideBarToggleButton';
import SearchInput from '../Common/SearchInput';
import UserDropdown from './UserDropdown';
import {media} from '../../utils/mediaQuery';
import Logo from '../Common/Logo';

export default function Header() {
  return (
    <Wrapper className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
      <SideBarToggleButton />
      <LogoWrapper>
        <Logo isHeader={true} />
      </LogoWrapper>
      <SearchInput className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" />
      <UserDropdown />
    </Wrapper>
  );
}

const LogoWrapper = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

const Wrapper = styled.header`
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  padding-right: 4rem;
  z-index: 900;

  ${media.laptop} {
    padding-right: 2.5rem;
  }

  ${media.tablet} {
    padding-right: 2rem;
  }
`;
