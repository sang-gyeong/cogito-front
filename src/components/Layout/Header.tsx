import SearchInput from './SearchInput';
import UserDropdown from './UserDropdown';

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar static-top shadow">
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars" />
      </button>
      <SearchInput />
      <UserDropdown />
    </nav>
  );
}
