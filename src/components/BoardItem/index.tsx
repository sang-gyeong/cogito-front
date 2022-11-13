import * as S from './style';
import styled from 'styled-components';
import Link from 'next/link';

export default function BoardItem({board}: {board: Board}) {
  return (
    <Wrapper>
      <Link href={`/board/${board.id}`} passHref>
        <Title>{board.title}</Title>
      </Link>
      <p>{board.content}</p>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  border: 1px solid red;
  width: 100%;
`;

export const Title = styled.a`
  font-weight: bold;
`;
