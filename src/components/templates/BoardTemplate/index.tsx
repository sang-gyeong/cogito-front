import dynamic from 'next/dynamic';
import {useState} from 'react';
import Skeleton from 'react-loading-skeleton';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';
import {createComment, deleteComment, dislikeComment, likeComment} from '../../../api/comment';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import {deletePostById, dislikePost, likePost} from '../../../api/post';
import {modalShowState, modalState} from '../../../atoms/modal';
import useBoardQuery from '../../../queries/usePostQuery';
import {getScoreImage} from '../../../utils/score';
import CommentItem from '../../CommentItem';
import TagItem from '../../Common/Tag';
import Image from 'next/image';
import RBButton from 'react-bootstrap/Button';
import {QueryClient} from '@tanstack/react-query';

const contentStyle = {
  fontSize: '0.95rem',
  color: '#6f7d95',
  lineHeight: '1.4rem',
  padding: '0.5rem',
};

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton height={100} />
    </>
  ),
});

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton count={4} />
    </>
  ),
});

export default function BoardTemplate({id}: {id: number}) {
  const {data, refetch} = useBoardQuery(id);
  const [value, setValue] = useState<string | undefined>('');

  const setShowModal = useSetRecoilState(modalShowState);
  const setModalState = useSetRecoilState(modalState);

  const handleModal = () => {
    setModalState({
      component: <div>신고사유 선택하기</div>,
      title: '신고하기',
      closeCallBack: () => console.log('tada!!'),
      config: {size: 'lg', closeButton: true, centered: false},
    });

    setShowModal(true);
  };

  const clickHandler = async (isLike: boolean) => {
    const response = isLike ? await likePost(id) : await dislikePost(id);

    refetch();
  };

  const commentScoreHandler = async (isLike: boolean, commentId: number) => {
    const response = isLike ? await likeComment(commentId) : await dislikeComment(commentId);

    refetch();
  };

  if (!data) {
    return <>Loading</>;
  }

  const {
    commentResponses,
    content,
    createdAt,
    files,
    likeCnt,
    isMe,
    nickname,
    postId,
    profileImgUrl,
    score,
    tags,
    title,
  } = data;

  const onClickModifyPost = () => {};

  const onClickModifyComment = () => {};

  const onClickDeletePost = async () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      await deletePostById(postId);
    }
  };

  const fetchCreateComment = async () => {
    if (!value) {
      alert('댓글을 입력해주세요.');
    }
    const result = await createComment(postId, null, value ?? '');

    if (result) {
      window.location.reload();
    }
  };

  const fetchDeleteComment = async (commentId: number) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      const result = await deleteComment(commentId);

      if (result) {
        window.location.reload();
      }
    }
  };

  const onClickDeleteComment = (commentId: number) => {
    fetchDeleteComment(commentId);
  };

  const onClickCreateComment = () => {
    fetchCreateComment();
  };

  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
        <SubTitleArea>
          <SubText>
            {createdAt ?? '2023-01-26 03:22:49'} | {'3,203 viewed'}
          </SubText>
          <ButtonWrapper>
            {isMe ? (
              <>
                <Button onClick={onClickModifyPost}>수정</Button>
                <Button onClick={onClickDeletePost}>삭제</Button>
              </>
            ) : (
              <Button onClick={handleModal}>신고</Button>
            )}
          </ButtonWrapper>
        </SubTitleArea>
      </div>

      <MiddleWrapper>
        <ScoreWrapper>
          <button onClick={() => clickHandler(true)}>▲</button>
          <span> {likeCnt} </span>
          <button onClick={() => clickHandler(false)}>▼</button>
        </ScoreWrapper>
        <ContentWrapper>
          <MarkdownPreview
            source={content}
            style={{backgroundColor: 'transparent', marginBottom: '2rem', ...contentStyle}}
          />

          <TagWrapper>
            {tags.map((tag, idx) => (
              // @TODO: tagId
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
          </BottomWrapper>
        </ContentWrapper>
      </MiddleWrapper>

      <CommentWrapper>
        {commentResponses.length > 0 ? (
          <>
            <SubTitle>🔥 {commentResponses.length}개의 답변이 달렸습니다</SubTitle>
            {commentResponses.map((comment, idx) => (
              <Comment key={idx}>
                <ScoreWrapper>
                  <button onClick={() => commentScoreHandler(true, comment.commentId)}>▲</button>
                  <span> 0 </span>
                  <button onClick={() => commentScoreHandler(false, comment.commentId)}>▼</button>
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
                        <Image src={profileImgUrl ?? profileDefaultImage} alt="profile-image" width={30} height={30} />
                        <ScoreImage>{getScoreImage(score)}</ScoreImage>
                      </ProfileImage>
                      {nickname}
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
    </Wrapper>
  );
}

const EmptyView = styled.div`
  border: 1px solid lightslategray;
  width: 100%;
  color: lightslategray;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  font-size: 0.85rem;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 0.8rem;
  color: black;
`;

const CommentButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  text-align: right;
`;

const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid lightgray;
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
  margin-top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  color: #303d62;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

const SubTitleArea = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding-bottom: 0.5rem;
  justify-content: space-between;
`;

const SubText = styled.span``;

const MiddleWrapper = styled.div`
  display: flex;
  margin-top: 12px;
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

const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  height: 100%;
`;

export const ProfileImage = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
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
  gap: 5px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.88rem;
`;

export const CreatedAt = styled.span``;
