import {useRecoilState, useSetRecoilState} from 'recoil';
import {navShowState} from '../../atoms/nav';
import SearchInput from './SearchInput';
import UserDropdown from './UserDropdown';

export default function Header() {
  const [isShowNav, setNavShowState] = useRecoilState(navShowState);

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={() => setNavShowState(!isShowNav)}>
        <i className="fa fa-bars" />
      </button>
      <SearchInput />
      <UserDropdown />
    </nav>
  );
}
