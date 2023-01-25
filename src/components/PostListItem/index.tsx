import styled from 'styled-components';
import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import {getScoreImage} from '../../utils/score';
import {highlightIncludedText} from '../../constants/text';

export default function PostListItem({post, query}: {post: Post.ListItem; query: string}) {
  return (
    <Wrapper>
      <Link href={`/questions/${post.postId}`} passHref>
        <Title>{highlightIncludedText(post.title, query)}</Title>
      </Link>
      <Content>{highlightIncludedText(post.content, query)}</Content>
      <BadgeWrapper>
        {/* tagId값으로 교체 */}
        {post.tags.map((tag, idx) => (
          <Badge key={idx} bg="secondary">
            {tag}
          </Badge>
        ))}

        <Date>
          <span>
            {getScoreImage(post.score)} {post.nickname}
          </span>{' '}
          {post.createdAt}
        </Date>
      </BadgeWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 24px 6px 24px 32px;
`;

export const Title = styled.a`
  font-weight: 600;
  font-size: 1.35rem;
  color: #303d62;
`;

export const Content = styled.p`
  margin: 6px 0;
  font-size: 0.9rem;
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
