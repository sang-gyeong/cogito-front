import styled from 'styled-components';
import Link from 'next/link';
import {getScoreImage} from '../../utils/score';
import {highlightIncludedText} from '../../constants/text';
import {media} from '../../utils/mediaQuery';
import Image from 'next/image';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import TagItem from '../Common/Tag';
import {AiOutlineLike, AiOutlineComment} from 'react-icons/ai';

export default function PostListItem({post, query}: {post: Post.ListItem; query: string}) {
  const {postId, title, content, likeCnt, tags, nickname, profileImgUrl, score, commentCnt, createdAt} = post;

  const statusList = [
    {label: <AiOutlineLike />, value: likeCnt},
    {label: <AiOutlineComment />, value: commentCnt},
  ];

  return (
    <Wrapper>
      <ContentWrapper>
        <div>
          <Link href={`/questions/${postId}`} passHref>
            <Title>{highlightIncludedText(title, query)}</Title>
          </Link>
          <Link href={`/questions/${postId}`} passHref>
            <Content>{highlightIncludedText(content, query)}</Content>
          </Link>
          <TagWrapper>
            {/* @TODO: key값 tagId값으로 교체, 태그 클릭시 이동 */}
            {tags.map((tag, idx) => (
              <TagItem key={idx} tag={tag} />
            ))}
          </TagWrapper>
        </div>
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
        {statusList.map((status, idx) => (
          <StatusItem key={idx}>
            <Status>{status.value}</Status>
            {status.label}
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
  border: 1px solid #bcbfc6;
  font-weight: 300;

  ${media.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const StatusLabel = styled.span`
  font-size: 0.75rem;

  ${media.tablet} {
  }
`;

export const StatusItem = styled.span`
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 20px 0 18px 30px;
  display: flex;
  min-height: 190px;

  ${media.mobile} {
    padding: 20px 0 16px 24px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 0.9rem;
  color: #6f7d95;
  justify-content: space-between;
  padding-right: 8px;

  ${media.tablet} {
    padding-right: 12px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 0 16px;

  ${media.tablet} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Title = styled.a`
  font-weight: 600;
  font-size: 1.25rem;
  color: #303d62;
`;

export const TagWrapper = styled.div`
  margin: 18px 0;
`;

export const Content = styled.a`
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
  margin-top: 6px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.85rem;
  flex-wrap: wrap;
`;

export const CreatedAt = styled.span`
  /* white-space: nowrap; */
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  width: 27px;
  height: 27px;
  position: relative;
  margin-right: 4px;
`;
