import {useRecoilState} from 'recoil';
import {navFoldState} from '../../atoms/nav';

export default function SideBarToggleButton() {
  const [isNavFold, setIsNavFold] = useRecoilState(navFoldState);

  return (
    <button
      id="sidebarToggleTop"
      className="btn btn-link d-md-none rounded-circle"
      onClick={() => setIsNavFold(!isNavFold)}>
      <i className="fa fa-bars" />
    </button>
  );
}
