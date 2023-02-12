import useMyQuery from '../src/queries/useMyQuery';
import {useRouter} from 'next/router';

export default function MyPage() {
  const router = useRouter();
  const {data: myData, isLoading} = useMyQuery();

  if (!myData || isLoading) {
    return <div>...loading</div>;
  }

  router.replace(`/user/${myData.userId}`);

  return <></>;
}
