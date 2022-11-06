import styled from 'styled-components';
import Link from 'next/link';

export default function Nav() {
  return (
    <Navigation>
      <Link href="#none">
        <NavItem>개발 질문하기</NavItem>
      </Link>
      <Link href="#none">
        <NavItem>태그별</NavItem>
      </Link>
      <Link href="#none">
        <NavItem>유저 찾기</NavItem>
      </Link>
    </Navigation>
  );
}

const Navigation = styled.nav`
  width: 200px;
  height: 100%;
  border-right: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: scroll;
  padding: 72px 24px;
  text-align: right;
`;

const NavItem = styled.a`
  font-size: 1.4rem;
`;
