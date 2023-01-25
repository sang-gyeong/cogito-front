import {useEffect} from 'react';
import {useRouter} from 'next/router';

export default function ErrorPage() {
  const router = useRouter();
  const errorCode = router.query?.code as string;

  useEffect(() => {});

  return <></>;
}
