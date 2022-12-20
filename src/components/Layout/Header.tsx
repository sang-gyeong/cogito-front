import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {Nav as RBNav, NavDropdown} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {useState} from 'react';
import Nav from './Nav';
import {useSetRecoilState} from 'recoil';
import {modalShowState, modalState} from '../../atoms';
import Image from 'next/image';
import logoImage from 'public/logo.png';
import LoginModal from '../Modal/loginModal';

export default function NavComponent() {
  const expand = 'md';
  const [show, setShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setShowModal = useSetRecoilState(modalShowState);
  const setModalState = useSetRecoilState(modalState);

  const handleModal = () => {
    setModalState({
      component: <LoginModal />,
      title: '간편 로그인',
      closeCallBack: () => setIsLoggedIn(true),
      config: {size: 'lg', closeButton: true, centered: false},
    });

    setShowModal(true);
  };

  return (
    <Navbar id="navbar" sticky="top" expand={expand} className="mb-3 top-navbar">
      <Container fluid className="container">
        <button
          aria-controls="offcanvasNavbar-expand-md"
          type="button"
          onClick={handleShow}
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed">
          <span className="navbar-toggler-icon"></span>
        </button>

        <Navbar.Brand href="/">
          <Image src={logoImage} alt="logo" width={125} height={25}></Image>
        </Navbar.Brand>
        <Form className="d-flex search-form">
          <Form.Control
            type="search"
            placeholder="검색어를 입력해주세요"
            className="me-2 search-form__control"
            aria-label="Search"
          />
          <Button variant="primary" className="search-form__button">
            Search
          </Button>
        </Form>
        <RBNav>
          {isLoggedIn ? (
            <>
              <NavDropdown title="이상경_summer" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                <NavDropdown.Item href="#action3">마이페이지</NavDropdown.Item>
                <NavDropdown.Item href="#action4">쪽지</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" onClick={() => setIsLoggedIn(false)}>
                  로그아웃
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <RBNav.Link onClick={handleModal}>로그인</RBNav.Link>
          )}
        </RBNav>

        <Offcanvas show={show} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}
