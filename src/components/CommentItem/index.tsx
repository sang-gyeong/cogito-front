import Badge from 'react-bootstrap/Badge';

import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import {dateFormatter} from '../../utils/date';
import {getScoreImage} from '../../utils/score';

export default function CommentItem({comment}: {comment: Board.Comment}) {
  return (
    <Wrapper>
      <LikesWrapper>
        <Button>up</Button>
        <Likes>{comment.likes}</Likes>
        <Button>down</Button>
      </LikesWrapper>

      <CommentWrapper>{comment.content}</CommentWrapper>

      <ProfileWrapper>
        <Image alt="profileImg" src={comment.author.profileImgUrl}></Image>
        <span>
          {getScoreImage(comment.author.score)} {comment.author.nickname}
        </span>
        <Date>{dateFormatter(comment.createdAt)}</Date>
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const CommentWrapper = styled.div`
  width: 60%;
`;

const ProfileWrapper = styled.div`
  width: 40%;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-end;
`;

const Date = styled.p`
  color: gray;
  font-size: 1.3rem;
`;

const Button = styled.button`
  background-color: #f2f2f2;
  border: 1px solid gray;
`;
