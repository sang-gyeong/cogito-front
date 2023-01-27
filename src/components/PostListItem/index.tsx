import styled from 'styled-components';
import Link from 'next/link';
import {getScoreImage} from '../../utils/score';
import {highlightIncludedText} from '../../constants/text';
import {media} from '../../utils/mediaQuery';
import Image from 'next/image';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import TagItem from '../Common/Tag';

export default function PostListItem({post, query}: {post: Post.ListItem; query: string}) {
  const {postId, title, content, tags, nickname, profileImgUrl, score, commentCnt, createdAt} = post;

  const statusList = [
    {label: 'views', value: 0},
    {label: 'answers', value: commentCnt},
    {label: 'votes', value: 0},
  ];

  return (
    <Wrapper>
      <ContentWrapper>
        <Link href={`/questions/${postId}`} passHref>
          <Title>{highlightIncludedText(title, query)}</Title>
        </Link>
        <Content>{highlightIncludedText(content, query)}</Content>
        <TagWrapper>
          {/* @TODO: key값 tagId값으로 교체, 태그 클릭시 이동 */}
          {tags.map((tag, idx) => (
            <TagItem key={idx} tag={tag} />
          ))}
        </TagWrapper>
        <BottomWrapper>
          <ProfileWrapper>
            <ProfileImage>
              <Image src={profileImgUrl ?? profileDefaultImage} alt="profile-image" width={30} height={30} />
              <ScoreImage>{getScoreImage(score)}</ScoreImage>
            </ProfileImage>
            {nickname}
          </ProfileWrapper>
          |<CreatedAt>{createdAt}</CreatedAt>
        </BottomWrapper>
      </ContentWrapper>
      <StatusWrapper>
        {statusList.map(status => (
          <StatusItem key={status.label}>
            <Status>{status.value}</Status>
            <StatusLabel>{status.label}</StatusLabel>
          </StatusItem>
        ))}
      </StatusWrapper>
    </Wrapper>
  );
}

const ScoreImage = styled.span`
  position: absolute;
  right: -8px;
  bottom: -3px;
`;

export const Status = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;

  ${media.tablet} {
    width: 40px;
    height: 40px;
  }
`;

export const StatusLabel = styled.span`
  font-size: 0.75rem;

  ${media.tablet} {
    display: none;
  }
`;

export const StatusItem = styled.span`
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 18px 30px;
  display: flex;
  min-height: 180px;
  ${media.mobile} {
    padding: 16px 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.9rem;
  color: #6f7d95;
  padding-right: 32px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  ${media.tablet} {
    flex-direction: column;
    gap: 4px;
  }
`;

export const Title = styled.a`
  font-weight: 600;
  font-size: 1.25rem;
  color: #303d62;
`;

export const TagWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Content = styled.p`
  font-size: 0.9rem;
  color: #6f7d95;
  line-height: 1.4rem;
  min-height: 1.6rem;
  max-height: 2.8rem;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  margin-bottom: 12px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.88rem;
`;

export const CreatedAt = styled.span``;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 180px;
  justify-content: flex-end;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: relative;
  margin-right: 4px;
`;
