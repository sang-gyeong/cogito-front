import dynamic from 'next/dynamic';
import {Badge, Button} from 'react-bootstrap';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';
import {modalShowState, modalState} from '../../../atoms/modal';
import useBoardQuery from '../../../queries/usePostQuery';
import {dateFormatter} from '../../../utils/date';
import {getScoreImage} from '../../../utils/score';
import CommentItem from '../../CommentItem';

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), {ssr: false});

export default function BoardTemplate({id}: {id: number}) {
  const {data} = useBoardQuery(id);

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

  if (!data) {
    return <>Loading</>;
  }

  // const _data = {
  //   title: '안녕',
  //   content: '안녕',
  //   tags: ['태그1'],
  //   files: [],
  //   score: 3,
  //   commentResponses: [],
  //   profileImgUrl: '',
  //   nickname: '삐릿뽀',
  //   createdAt: '2022-01-31',
  // };

  const {title, content, tags, files, score, createdAt, commentResponses, profileImgUrl, nickname} = data;

  return (
    <Wrapper>
      <Button variant="primary" href="/new" style={{position: 'absolute', right: 0, border: '1px soild red'}}>
        + 새 질문 생성하기
      </Button>

      <Title>{title}</Title>
      <Date>{createdAt}</Date>
      <SCButton onClick={handleModal}>신고하기</SCButton>

      <ContentWrapper>
        <MarkdownPreview source={content} />
      </ContentWrapper>

      <TagWrapper>
        {tags.map((tag, idx) => (
          // @TODO: tagId
          <Badge bg="secondary" key={idx}>
            {tag}
          </Badge>
        ))}
      </TagWrapper>

      <AuthorWrapper>
        <Image alt="profileImg" src={profileImgUrl}></Image>
        {/* @TODO: 유저 스코어에 따른 ui제어 */}
        {/* {getScoreImage(author.score)} {nickname} */}
        {nickname}
      </AuthorWrapper>
      <CommentListWrapper>
        {commentResponses.map((comment, idx) => (
          <CommentItem key={idx} comment={comment} />
        ))}
      </CommentListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px;
  position: relative;
`;

const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;

const SCButton = styled.button`
  color: red;
`;

const Content = styled.p`
  font-size: 1.5rem;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const CommentListWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Date = styled.p`
  color: gray;
  font-size: 1.5rem;
`;

const ContentWrapper = styled.div`
  margin: 20px 0;
`;

const AuthorWrapper = styled.div`
  width: 300px;
  height: 80px;
  background-color: beige;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;
