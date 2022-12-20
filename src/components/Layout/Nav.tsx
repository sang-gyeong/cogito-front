import * as S from './style';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Nav() {
  const router = useRouter();
  console.log(router);
  return (
    <S.NavWrapper>
      <Link href="/questions">
        <S.NavItem isActive={router.pathname.indexOf('/questions') !== -1}>Questions</S.NavItem>
      </Link>
      <Link href="/tags">
        <S.NavItem isActive={router.pathname.indexOf('/tags') !== -1}>Tags</S.NavItem>
      </Link>
      <Link href="/users">
        <S.NavItem isActive={router.pathname.indexOf('/users') !== -1}>Users</S.NavItem>
      </Link>
    </S.NavWrapper>
  );
}
