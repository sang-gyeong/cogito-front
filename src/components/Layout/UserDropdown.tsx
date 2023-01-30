import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {userState} from '../../atoms/user';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import {logout} from '../../api/auth';
import cookies from 'react-cookies';

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const userData = useRecoilValue(userState);
  const isLoggedIn = !!userData?.nickname;

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const requestLogout = async () => {
    await logout();
  };

  const onClickLogout = () => {
    requestLogout();

    // @TODO: 서버측에서 정의해준 토큰명으로 변경
    cookies.remove('refreshToken');
    localStorage.removeItem('accessToken');

    window.location.reload();
  };

  return (
    <>
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}
        <li className={`nav-item dropdown no-arrow d-sm-none ${isSearchOpen ? 'show' : ''}`}>
          <a
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="nav-link dropdown-toggle"
            href="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <i className="fas fa-search fa-fw" />
          </a>
          {/* Dropdown - Messages */}
          <div
            className={`dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in ${isSearchOpen ? 'show' : ''}`}
            aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        {isLoggedIn ? (
          <>
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="fas fa-bell fa-fw" />
              </a>

              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">Alerts Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2019</div>
                    <span className="font-weight-bold">A new monthly report is ready to download!</span>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 7, 2019</div>
                    $290.29 has been deposited into your account!
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 2, 2019</div>
                    Spending Alert: We ve noticed unusually high spending for your account.
                  </div>
                </a>
                <a className="dropdown-item text-center small text-gray-500" href="#">
                  Show All Alerts
                </a>
              </div>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className={`nav-item dropdown no-arrow ${isOpen ? ' show' : ''}`} onClick={clickHandler}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={isOpen}>
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{userData.nickname}</span>
                <Image
                  className="img-profile rounded-circle"
                  src={profileDefaultImage}
                  alt="profile-image"
                  width={32}
                  height={32}
                />
              </a>
              {/* Dropdown - User Information */}
              <div
                className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${isOpen ? ' show' : ''}`}
                aria-labelledby="userDropdown">
                <Link href="/my">
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    마이페이지
                  </a>
                </Link>

                <a
                  className="dropdown-item"
                  href="#"
                  onClick={onClickLogout}
                  data-toggle="modal"
                  data-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  로그아웃
                </a>
              </div>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link dark">로그인</a>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
