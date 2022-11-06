import * as S from './style';

export default function Header() {
  return (
    <S.Header>
      <span className="logo">Cogito 💖</span>
      <S.InputSearch placeholder="검색어를 입력하세요"></S.InputSearch>
      <span className="profile">😄</span>
    </S.Header>
  );
}
