import ProgressBar from 'react-bootstrap/ProgressBar';

import dynamic from 'next/dynamic';
import {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';
import {modalShowState, modalState} from '../../../atoms/modal';
import GuideModal from '../../Modal/guideModal';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import {storage} from '../../../api/firebase';
import Image from 'next/image';

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
  const [imageURL, setImageURL] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const setShowModal = useSetRecoilState(modalShowState);
  const setModalState = useSetRecoilState(modalState);

  const onImageChange = (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files;

    console.log('files');

    if (!file) return null;

    // Firebase storage에 files이란 폴더를 만들고 그 안에 업로드할 이미지의 이름으로 이미지를 저장한다는 의미. (timestamp 추가)
    const storageRef = ref(storage, `files/${file[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, file[0]);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log('snapshot : ', snapshot);
        setProgressPercent(progress);
      },
      error => {
        alert('upload has been canceled');
        console.log(error);
      },
      () => {
        e.target.value = '';
        getDownloadURL(storageRef).then(downloadURL => {
          console.log('File available at', downloadURL);
          setImageURL(downloadURL);
        });
      }
    );
  };

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
      <input type="file" accept="image/*" onChange={onImageChange} />
      <ProgressBar now={progressPercent} label={`${progressPercent}%`} />;<p>{imageURL}</p>
      {imageURL && <Image src={imageURL} alt="upload" height={100} width={100}></Image>}
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
