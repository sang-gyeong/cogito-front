import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import {deletePostById, dislikePost, likePost} from '../../../api/post';
import {modalState} from '../../../atoms/modal';
import useBoardQuery from '../../../queries/usePostQuery';
import {getScoreImage} from '../../../utils/score';
import TagItem from '../../Common/Tag';
import Image from 'next/image';
import AutoHeightImage from '../../Common/AutoHeightImage';
import BoardComments from './BoardComments';
import {MarkdownPreview} from '../../../libs/MDEditor';

const contentStyle = {
  fontSize: '0.95rem',
  color: '#6f7d95',
  lineHeight: '1.4rem',
  padding: '0.5rem',
};

export default function BoardTemplate({id}: {id: number}) {
  const {data, refetch} = useBoardQuery(id);
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

  const onClickReport = () => {
    if (window.confirm('신고하시겠습니까?')) {
      // 신고하기
    }
  };

  const clickHandler = async (isLike: boolean) => {
    if (isMe) {
      window.alert(`자기 자신의 글에는 ${isLike ? '추천' : '비추천'}할 수 없습니다`);
      return;
    }
    isLike ? await likePost(id) : await dislikePost(id);

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

  const onClickDeletePost = async () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      await deletePostById(postId);
    }
  };

  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>

        <SubTitleArea>
          <SubText>{createdAt ?? '2023-01-26 03:22:49'}</SubText>
          <ButtonWrapper>
            {isMe ? (
              <>
                <Button onClick={onClickModifyPost}>수정</Button>
                <Button onClick={onClickDeletePost}>삭제</Button>
              </>
            ) : (
              <Button onClick={onClickReport}>신고</Button>
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

          <FilesWrapper>
            {files.map(file => (
              <AutoHeightImage key={file} src={file} alt="upload-img" placeholder="blur" blurDataURL={file} />
            ))}
          </FilesWrapper>
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

      <BoardComments isMe={isMe} postId={postId} commentResponses={commentResponses} />
    </Wrapper>
  );
}

const FilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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
  font-size: 0.8rem;
`;
