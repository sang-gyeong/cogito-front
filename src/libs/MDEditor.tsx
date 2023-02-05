import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';

export const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton height={100} />
    </>
  ),
});

export const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton count={4} />
    </>
  ),
});
