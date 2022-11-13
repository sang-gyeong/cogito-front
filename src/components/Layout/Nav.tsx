import * as S from './style';
import Link from 'next/link';

export default function Nav() {
  return (
    <S.NavWrapper>
      <Link href="/">
        <S.NavItem>Questions</S.NavItem>
      </Link>
      <Link href="/board/10">
        <S.NavItem>Tags</S.NavItem>
      </Link>
      <Link href="/board/3">
        <S.NavItem>Users</S.NavItem>
      </Link>
    </S.NavWrapper>
  );
}
