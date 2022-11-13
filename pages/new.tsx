import HomeTemplate from '../src/components/templates/HomeTemplate';
import {QueryClient, useQuery, dehydrate} from '@tanstack/react-query';
import {GetServerSideProps} from 'next';
import {getBoards} from '../src/api';
import {QUERY_KEY} from '../src/queries/useBoardsQuery';
import dynamic from 'next/dynamic';
import {useState} from 'react';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {ssr: false});
const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), {ssr: false});

const source = `
## MarkdownPreview

> todo: React component preview markdown text.

\`\`\`jsx
const a = "b"

\`\`\`
`;

export default function NewPage() {
  const [value, setValue] = useState<string | undefined>('hello');

  return (
    <>
      <MDEditor value={value} onChange={setValue} />
      <MarkdownPreview source={source} />
    </>
  );

  // return <HomeTemplate />;
}
