import {getMyData} from './../api/user';
import {userState} from './../atoms/user';
import {useEffect} from 'react';
import {useSetRecoilState} from 'recoil';

export function useFetchUserData() {
  const setUserState = useSetRecoilState(userState);

  const fetchMyUserData = async () => {
    const data = await getMyData();

    setUserState(data);
  };

  useEffect(() => {
    fetchMyUserData();
  }, []);
}
