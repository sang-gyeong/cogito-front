import dynamic from 'next/dynamic';
import {Badge, Button} from 'react-bootstrap';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';
import {modalShowState, modalState} from '../../../atoms';
import useBoardQuery from '../../../queries/useBoardQuery';
import {dateFormatter} from '../../../utils/date';
import {getScoreImage} from '../../../utils/score';
import CommentItem from '../../CommentItem';

const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), {ssr: false});

export default function BoardTemplate({id}: {id: number}) {
  const {data} = useBoardQuery(id);

  const setShowModal = useSetRecoilState(modalShowState);
  const setModalState = useSetRecoilState(modalState);

  console.log(data);

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

  const {title, content, tags, comments, author} = data;

  return (
    <Wrapper>
      <Button variant="primary" href="/new" style={{position: 'absolute', right: 0, border: '1px soild red'}}>
        + 새 질문 생성하기
      </Button>

      <Title>{title}</Title>
      <Date>{dateFormatter(data.createdAt)}</Date>
      <SCButton onClick={handleModal}>신고하기</SCButton>

      <ContentWrapper>
        <MarkdownPreview source={content} />
      </ContentWrapper>

      <TagWrapper>
        {tags.map(tag => (
          <Badge bg="secondary" key={tag.id}>
            {tag.name}
          </Badge>
        ))}
      </TagWrapper>

      <AuthorWrapper>
        <Image alt="profileImg" src={author.profileImgUrl}></Image>
        {getScoreImage(author.score)} {author.nickname}
      </AuthorWrapper>
      <CommentListWrapper>
        {comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} />
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
