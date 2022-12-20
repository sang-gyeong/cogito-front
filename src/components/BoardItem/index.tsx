import * as S from './style';
import styled from 'styled-components';
import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import {dateFormatter} from '../../utils/date';
import {getScoreImage} from '../../utils/score';

export default function BoardItem({board}: {board: Board}) {
  return (
    <Wrapper>
      <Link href={`/questions/${board.id}`} passHref>
        <Title>{board.title}</Title>
      </Link>
      <Content>{board.content}</Content>
      <BadgeWrapper>
        {board.tags.map(tag => (
          <Badge key={tag.id} bg="secondary">
            {tag.name}
          </Badge>
        ))}

        <Date>
          <span>
            {getScoreImage(board.author.score)} {board.author.nickname}
          </span>{' '}
          {dateFormatter(board.createdAt)}
        </Date>
      </BadgeWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 24px 6px 24px 32px;
`;

export const Title = styled.a`
  font-weight: bold;
  font-size: 1.55rem;
  color: #0d6efd;
`;

export const Content = styled.p`
  margin: 6px 0;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  gap: 4px;
  position: relative;
`;

export const Date = styled.p`
  position: absolute;
  right: 0;
  color: gray;
`;
