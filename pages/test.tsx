import {ReactElement} from 'react';
import Layout from '../src/components/Layout';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import {QueryClient, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import request, {getUsers} from '../src/api';
import {QUERY_KEY} from '../src/queries/useTagsQuery';
import UserTemplate from '../src/components/templates/UserTemplate';
import axios from 'axios';
import styled from 'styled-components';
import {deletePostById} from '../src/api/commnet';
import {createPost, modifyPost} from '../src/api/post';

const dummyData = {
  title: '질문있습니다',
  content:
    '질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다',
  files: ['file1', 'file2'],
  tags: ['태그1', '태그2'],
};

const dummyData2 = {
  title: '수정버전',
  content:
    '질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다질문있습니다',
  files: ['file1', 'file2'],
  tags: ['태그1', '태그2'],
};

export default function TestPage() {
  const clickCreatePost = async () => {
    await createPost(dummyData);
  };

  const clickDeletePost = async () => {
    await deletePostById(1);
  };

  const clickModifyPost = async () => {
    await modifyPost(2, dummyData2);
  };

  return (
    <div>
      <Button onClick={clickCreatePost}>게시물 생성</Button>
      <Button onClick={clickDeletePost}>게시물 삭제</Button>
      <Button onClick={clickModifyPost}>게시물 수정</Button>

      <Button>댓글 생성</Button>
      <Button>댓글 삭제</Button>
      <Button>댓글 수정</Button>
    </div>
  );
}

TestPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const Button = styled.button`
  border: 1px solid gray;
  background-color: beige;
  padding: 2px 4px;
`;
