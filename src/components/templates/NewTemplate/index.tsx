import ProgressBar from 'react-bootstrap/ProgressBar';
import dynamic from 'next/dynamic';
import {ChangeEvent, useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import {useSetRecoilState} from 'recoil';
import styled from 'styled-components';
import {modalShowState, modalState} from '../../../atoms/modal';
import GuideModal from '../../Modal/guideModal';
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import {storage} from '../../../api/firebase';
import Image from 'next/image';
import {getSessionStorageItem, setSessionStorageItem} from '../../../utils/storage';
import {useRouter} from 'next/router';
import {createPost} from '../../../api/post';

const STORAGE_KEY = 'show-guide-modal';

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

export default function NewPage() {
  const router = useRouter();
  const [value, setValue] = useState<string | undefined>('');
  const [files, setFiles] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const setShowModal = useSetRecoilState(modalShowState);
  const setModalState = useSetRecoilState(modalState);

  const onImageChange = (e: React.ChangeEvent<EventTarget & HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files;

    if (!file) return null;

    // Firebase storage에 files이란 폴더를 만들고 그 안에 업로드할 이미지의 이름으로 이미지를 저장
    // @TODO: 파일명에 timestamp 추가
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
          setFiles([...files, downloadURL]);
        });
      }
    );
  };

  useEffect(() => {
    const hasModalShowed = getSessionStorageItem(STORAGE_KEY);

    if (!hasModalShowed) {
      handleModal();

      setSessionStorageItem(STORAGE_KEY, 'true');
    }
  }, []);

  const handleModal = () => {
    setModalState({
      component: <GuideModal />,
      title: 'Guide',
      closeCallBack: () => {},
      config: {size: 'lg', closeButton: true, centered: false},
    });

    setShowModal(true);
  };

  const onClickCancel = () => {
    if (window.confirm('글 작성을 취소하시겠습니까? 작성된 내용은 저장되지 않습니다.')) {
      router.back();
    }
  };

  const requestCreatePost = async () => {
    const result = await createPost(title, value ?? '', files, []);

    if (result) {
      // @TODO: 수정버전에서는 뒤로가기
      router.push('/');
    }
  };

  const onClickSubmit = () => {
    requestCreatePost();
  };

  const changeHandler = (event: ChangeEvent) => {
    const targetEl = event.target as HTMLInputElement;

    setTitle(targetEl.value);
  };

  return (
    <Wrapper>
      <Title>질문 글 작성하기</Title>
      <TitleInput type="text" value={title} placeholder="제목을 입력하세요" onChange={changeHandler}></TitleInput>
      <MDEditor
        style={{
          width: '100%',
        }}
        preview="edit"
        value={value}
        onChange={setValue}
        previewOptions={{}}
      />
      <SubText>⬇ 아래에 미리보기가 나옵니다</SubText>
      <MarkdownPreview
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          fontSize: '0.95rem',
          color: '#6f7d95',
          lineHeight: '1.4rem',
        }}
        source={value}
      />

      <UploadWrapper>
        <SubText>⇪ 이미지 첨부 (최대 5개)</SubText>
        <UploadInput type="file" accept="image/*" onChange={onImageChange} />
        <ProgressBar now={progressPercent} label={`${progressPercent}%`} />
        <FilesWrapper>
          {files.map((file, idx) => (
            <FileWrapper key={file} onClick={() => setFiles(files.filter((f, i) => i !== idx))}>
              <Image src={file} alt="upload" width={120} height={120} />x
            </FileWrapper>
          ))}
        </FilesWrapper>
      </UploadWrapper>
      <ButtonWrapper>
        <Button variant="outline-secondary" size="lg" onClick={onClickCancel}>
          취소
        </Button>
        <Button variant="primary" size="lg" onClick={onClickSubmit}>
          제출하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

const FilesWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

const FileWrapper = styled.div`
  cursor: pointer;
  color: transparent;

  &:hover {
    color: black;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 2rem;
  padding-left: 0.5rem;
  border: 1px solid lightgray;
  outline: none;
  font-size: 0.9rem;
`;

const UploadInput = styled.input`
  font-size: 0.95rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const UploadWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const SubText = styled.p`
  font-size: 0.8rem;
  color: #517495;
  text-align: center;
  margin: 20px 0;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  width: 100%;
`;

const Wrapper = styled.div`
  color: #303d62;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;
