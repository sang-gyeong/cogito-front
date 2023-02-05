import {useRecoilState} from 'recoil';
import styled from 'styled-components';
import {navFoldState} from '../../atoms/nav';
import SearchInput from '../Common/SearchInput';
import UserDropdown from './UserDropdown';

export default function Header() {
  const [isNavFold, setIsNavFold] = useRecoilState(navFoldState);

  const SideBarToggleButton = () => (
    <button
      id="sidebarToggleTop"
      className="btn btn-link d-md-none rounded-circle mr-3"
      onClick={() => setIsNavFold(!isNavFold)}>
      <i className="fa fa-bars" />
    </button>
  );

  return (
    <Wrapper className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
      <SideBarToggleButton />
      <SearchInput className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" />
      <UserDropdown />
    </Wrapper>
  );
}

const Wrapper = styled.header``;
