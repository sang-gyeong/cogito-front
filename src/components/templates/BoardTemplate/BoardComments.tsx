import {useState} from 'react';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import styled from 'styled-components';
import RBButton from 'react-bootstrap/Button';
import Image from 'next/image';
import {getScoreImage} from '../../../utils/score';
import {useSetRecoilState} from 'recoil';
import {modalState} from '../../../atoms/modal';
import useAddTodoMutation from '../../../mutations/useAddCommentMutation';
import useDeleteCommentMutation from '../../../mutations/useDeleteCommentMutation';
import useLikeCommentMutation from '../../../mutations/useLikeCommentMutation';
import useDislikeCommentMutation from '../../../mutations/useDislikeCommentMutation';
import {MarkdownPreview, MDEditor} from '../../../libs/MDEditor';

const contentStyle = {
  fontSize: '0.95rem',
  color: '#6f7d95',
  lineHeight: '1.4rem',
  padding: '0.5rem',
};

export default function BoardComments({
  isMe,
  postId,
  commentResponses,
}: {
  isMe: boolean;
  postId: number;
  commentResponses: Comment[];
}) {
  const [value, setValue] = useState<string | undefined>('');
  const {mutate: mutateCreateComment} = useAddTodoMutation(postId);
  const {mutate: mutateDeleteComment} = useDeleteCommentMutation(postId);
  const {mutate: mutateLikeComment} = useLikeCommentMutation(postId);
  const {mutate: mutateDislikeComment} = useDislikeCommentMutation(postId);

  const setModalState = useSetRecoilState(modalState);

  const handleModal = () => {
    setModalState({
      isShow: true,
      component: <div>신고사유 선택하기</div>,
      title: '신고하기',
      closeCallBack: () => console.log('tada!!'),
      config: {size: 'lg', closeButton: true, centered: false},
    });
  };

  const commentScoreHandler = (isLike: boolean, comment: Comment) => {
    const {isMe, commentId} = comment;

    if (isMe) {
      window.alert(`자기 자신의 댓글에는 ${isLike ? '추천' : '비추천'}할 수 없습니다`);

      return;
    }

    isLike ? mutateLikeComment({commentId}) : mutateDislikeComment({commentId});
  };

  const onClickDeleteComment = (commentId: number) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      mutateDeleteComment({commentId});
    }
  };

  const onClickCreateComment = () => {
    if (!value) {
      alert('댓글을 입력해주세요.');

      return;
    }

    mutateCreateComment({postId, parentId: null, content: value});
  };

  return (
    <CommentWrapper>
      {commentResponses.length > 0 ? (
        <>
          <SubTitle>🔥 {commentResponses.length}개의 답변이 달렸습니다</SubTitle>
          {commentResponses.map((comment, idx) => (
            <Comment key={idx}>
              <ScoreWrapper>
                <button onClick={() => commentScoreHandler(true, comment)}>▲</button>
                <span> {comment.likeCnt} </span>
                <button onClick={() => commentScoreHandler(false, comment)}>▼</button>
              </ScoreWrapper>
              <CommentContentWrapper>
                <MarkdownPreview
                  source={comment.content}
                  style={{backgroundColor: 'transparent', marginBottom: '2rem', ...contentStyle}}
                />

                <CommentButtonWrapper>
                  <ButtonWrapper>
                    {comment.isMe ? (
                      <>
                        <Button>수정</Button>
                        <Button onClick={() => onClickDeleteComment(comment.commentId)}>삭제</Button>
                      </>
                    ) : (
                      <Button onClick={handleModal}>신고</Button>
                    )}
                  </ButtonWrapper>
                </CommentButtonWrapper>
                <BottomWrapper>
                  <ProfileWrapper>
                    <ProfileImage>
                      <Image
                        src={comment.profileImgUrl ?? profileDefaultImage}
                        alt="profile-image"
                        width={30}
                        height={30}
                      />
                      <ScoreImage>{getScoreImage(comment.score)}</ScoreImage>
                    </ProfileImage>
                    {comment.nickname}
                  </ProfileWrapper>
                  |<CreatedAt>{comment.createdAt}</CreatedAt>
                </BottomWrapper>
              </CommentContentWrapper>
            </Comment>
          ))}
        </>
      ) : (
        <EmptyView>작성된 댓글이 없습니다</EmptyView>
      )}

      {!isMe && (
        <div style={{marginTop: '32px'}}>
          <SubTitle>🔥 나의 답변</SubTitle>
          <MDEditor
            style={{
              width: '100%',
              marginTop: '20px',
            }}
            preview="edit"
            value={value}
            onChange={setValue}
            previewOptions={{}}
          />
          <MarkdownPreview
            source={value}
            style={{backgroundColor: 'transparent', fontSize: '0.98rem', marginBottom: '2rem'}}
          />

          <span style={{textAlign: 'right'}}>
            <RBButton variant="primary" onClick={onClickCreateComment}>
              답변 제출하기
            </RBButton>
          </span>
        </div>
      )}
    </CommentWrapper>
  );
}

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.8rem;
  color: black;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  text-align: right;
`;

const EmptyView = styled.div`
  border: 1px solid lightslategray;
  width: 100%;
  color: lightslategray;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  font-size: 0.85rem;
`;

const CommentButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 0.5rem 0 1rem 0;
`;

const SubTitle = styled.h5`
  font-weight: 600;
  font-size: 1.3rem;
`;

const Comment = styled.div`
  display: flex;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 64px;
  padding-top: 30px;
  border-top: 1px solid lightgray;
`;

const ScoreWrapper = styled.div`
  justify-content: flex-start;
  align-items: center;
  width: 65px;
  font-size: 1.3rem;
  height: 100%;
  font-weight: 600;
  display: flex;
  flex-direction: column;

  & > button {
    border: none;
    background-color: transparent;
    color: lightslategray;
  }
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 27px;
  height: 27px;
  box-shadow: px 0px 1px gray;
  position: relative;
  margin-right: 8px;
`;

const ScoreImage = styled.span`
  position: absolute;
  right: -8px;
  bottom: -3px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

const BottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.83rem;
`;

const CreatedAt = styled.span``;
