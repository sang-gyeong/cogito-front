import * as S from './style';
import Image from 'next/image';
import src from 'public/logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <S.Header>
      <Link href="/" passHref>
        <a>
          <Image src={src} width={180} height={25} alt="logo" />
        </a>
      </Link>
      <S.InputSearch placeholder="검색어를 입력하세요"></S.InputSearch>
      <span className="profile">😄</span>
    </S.Header>
  );
}
