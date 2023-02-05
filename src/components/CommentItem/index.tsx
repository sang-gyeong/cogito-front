import styled from 'styled-components';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import {getScoreImage} from '../../utils/score';

export default function CommentItem({comment}: {comment: Comment}) {
  return (
    <Wrapper>
      <LikesWrapper>
        <Button>up</Button>
        <Likes>{comment.score}</Likes>
        <Button>down</Button>
      </LikesWrapper>

      <CommentWrapper>{comment.content}</CommentWrapper>

      <ProfileWrapper>
        <ProfileImage>
          <Image src={comment.profileImgUrl ?? profileDefaultImage} alt="profile-image" width={30} height={30} />
          <ScoreImage>{getScoreImage(comment.score)}</ScoreImage>
        </ProfileImage>
        {comment.nickname}
      </ProfileWrapper>
    </Wrapper>
  );
}

const LikesWrapper = styled.div`
  padding: 8px 12px;

  display: flex;
  flex-direction: column;
`;

const Likes = styled.span`
  font-weight: bold;
  font-size: 1.9rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 12px 0;
`;

const Image = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
`;

const CommentWrapper = styled.div`
  width: 60%;
`;

const Date = styled.p`
  color: gray;
  font-size: 1.3rem;
`;

const Button = styled.button`
  background-color: #f2f2f2;
  border: 1px solid gray;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  width: 27px;
  height: 27px;
  box-shadow: px 0px 1px gray;
  position: relative;
`;

const ScoreImage = styled.span`
  position: absolute;
  right: -8px;
  bottom: -3px;
`;

const ProfileWrapper = styled.div`
  width: 40%;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
`;
