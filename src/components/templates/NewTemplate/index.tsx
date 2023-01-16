import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';
import {Button, Card, Placeholder} from 'react-bootstrap';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';
import {modalShowState, modalState} from '../../../atoms/modal';
import GuideModal from '../../Modal/guideModal';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton height={30} />
      <div>loading</div>
    </>
  ),
});
const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton height={30} />
      <div>loading</div>
    </>
  ),
});

const source = `
# MarkdownPreview
## MarkdownPreview
### MarkdownPreview

> todo: React component preview markdown text.

\`테스트\`입니다

\`\`\`jsx
const test = "test"
const test2 = "test2"
\`\`\`
`;

export default function NewPage() {
  const [value, setValue] = useState<string | undefined>(source);

  const setShowModal = useSetRecoilState(modalShowState);
  const setModalState = useSetRecoilState(modalState);

  useEffect(() => {
    handleModal();
  }, []);

  const handleModal = () => {
    setModalState({
      component: <GuideModal />,
      title: 'Guide',
      closeCallBack: () => console.log('tada!!'),
      config: {size: 'lg', closeButton: true, centered: false},
    });

    setShowModal(true);
  };

  return (
    <Wrapper>
      <MDEditor
        style={{
          width: '100%',
        }}
        preview="edit"
        value={value}
        onChange={setValue}
        previewOptions={{}}
      />
      <MarkdownPreview
        style={{
          width: '100%',
        }}
        source={value}
      />

      <Skeleton height={30} />
      <ButtonWrapper>
        <Button variant="outline-secondary" size="lg">
          취소
        </Button>
        <Button variant="primary" size="lg">
          제출하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
