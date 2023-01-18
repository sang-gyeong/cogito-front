import styled from 'styled-components';
import Link from 'next/link';
import Badge from 'react-bootstrap/Badge';
import {getScoreImage} from '../../utils/score';

export default function PostListItem({post}: {post: Post.ListItem}) {
  return (
    <Wrapper>
      {/* postId값으로 교체 */}
      <Link href={`/questions/${post.postId}`} passHref>
        <Title>{post.title}</Title>
      </Link>
      <Content>{post.content}</Content>
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
