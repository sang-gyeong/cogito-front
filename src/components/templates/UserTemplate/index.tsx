import styled from 'styled-components';
import Image from 'next/image';
import useUserQuery from '../../../queries/useUserQuery';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import {Button} from 'react-bootstrap';
import LoginModal from '../../Modal/loginModal';
import {useSetRecoilState} from 'recoil';
import {modalState} from '../../../atoms/modal';
import {media} from '../../../utils/mediaQuery';
import {useGetDevice} from '../../../hooks/useGetDevice';
import {DEVICE_TYPE} from '../../../constants/platform';
import useMyQuery from '../../../queries/useMyQuery';

export default function UserTemplate({id}: {id: number}) {
  const {data: user, isLoading: isUserLoading} = useUserQuery(id);
  const {data: mydata, isLoading: isMyDataLoading} = useMyQuery();

  const setModalState = useSetRecoilState(modalState);

  const device = useGetDevice();
  const isMobile = device === DEVICE_TYPE.mobile;

  if (isUserLoading || isMyDataLoading || !user || !mydata) {
    return <>Loading...</>;
  }

  const isMe = mydata.userId === user.userId;

  const onClickEditProfile = () => {
    setModalState({
      isShow: true,
      component: <LoginModal />,
      title: '로그인',
      closeCallBack: () => console.log('tada!!'),
      config: {size: 'lg', closeButton: true, centered: false},
    });
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <Image
          alt="profile-image"
          src={user.profileImgUrl ?? profileDefaultImage}
          width={isMobile ? 120 : 130}
          height={isMobile ? 120 : 130}></Image>
        <ProfileDescriptionWrapper>
          <ProfileNicknameWrapper>
            <ProfileNickname>{user.nickname}</ProfileNickname>
          </ProfileNicknameWrapper>
          {/* @TODO: createdAt으로 교체 */}
          <CreatedAt>🎂 4개월 전 가입</CreatedAt>
        </ProfileDescriptionWrapper>
        {isMe && (
          <ButtonWrapper>
            <Button variant="primary" href="#" onClick={onClickEditProfile}>
              프로필 수정
            </Button>
          </ButtonWrapper>
        )}
      </ProfileWrapper>
    </Wrapper>
  );
}

const ProfileNicknameWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonWrapper = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;

  & > a {
    background-color: white;
    color: #3a4564;
    font-size: 0.9rem;
    font-weight: 500;
    width: 110px;
    height: 38px;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;

    box-shadow: 1px 2px 4px lightgray;
    justify-content: center;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  height: 150px;
  width: 100%;

  gap: 20px;
  position: relative;
`;

const CreatedAt = styled.p`
  margin: 0;
  font-size: 0.9rem;
  padding-left: 2px;
`;

const ProfileNickname = styled.span`
  font-weight: 600;
  font-size: 1.7rem;
  margin: 0;

  ${media.tablet} {
    font-size: 1.3rem;
  }
`;

const ProfileDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 12px;

  ${media.tablet} {
    padding-bottom: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  color: #303d62;
  width: 100%;
  height: 100%;
`;
