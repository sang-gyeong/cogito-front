import useUsersQuery from '../../../queries/useUsersQuery';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {useState, useEffect, ChangeEvent, FormEvent} from 'react';
import profileDefaultImage from 'public/img/undraw_profile.svg';
import Image from 'next/image';
import {getScoreImage} from '../../../utils/score';
import Link from 'next/link';
import SearchInput from '../../Common/SearchInput';
import {media} from '../../../utils/mediaQuery';

export default function UsersTemplate() {
  const router = useRouter();

  const [radioValue, setRadioValue] = useState('1');
  const [query, setQuery] = useState((router.query?.query ?? '') as string);
  const [page, setPage] = useState(router.query?.page ? Number(router.query?.page) : 0);

  const radios = [{name: '랭킹순', value: '1'}];

  useEffect(() => {
    const _query = (router.query?.query ?? '') as string;
    const _page = router.query?.page ? Number(router.query?.page) : 0;

    setQuery(_query);
    setPage(_page);
  }, [router.query]);

  const {data, isLoading} = useUsersQuery({query, page});

  if (isLoading || !data) {
    return <>Loading...</>;
  }

  const {users} = data;

  return (
    <Wrapper>
      <SearchInputWrapper>
        <SearchInput type="USERS" className="d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search" />
      </SearchInputWrapper>
      <Row>Users</Row>
      <Filter>
        <UL>
          {radios.map(radio => (
            <div key={radio.value}>
              <FilterButton
                type="radio"
                name="tab"
                value={radio.value}
                id={'tabmenu' + radio.value}
                checked={radio.value === radioValue}
                onChange={e => setRadioValue(e.target.value)}></FilterButton>
              <FilterLabel htmlFor={'tabmenu' + radio.value}>{radio.name}</FilterLabel>
            </div>
          ))}
        </UL>
      </Filter>
      <UserListWrapper>
        {users.map((user, idx) => (
          <Link href={`/user/${user.userId}`} key={user.userId} passHref>
            <UserItemWrapper isPopular={idx <= 2}>
              <Image
                style={{borderRadius: '50px'}}
                src={user.profileImgUrl ?? profileDefaultImage}
                alt="profile-image"
                width={48}
                height={48}
              />
              <DescriptionWrapper>
                <Nickname>{user.nickname}</Nickname>
                <div>
                  <span>{getScoreImage(user.score)}</span>
                  <span>{user.score}</span>
                </div>
              </DescriptionWrapper>
            </UserItemWrapper>
          </Link>
        ))}
      </UserListWrapper>
    </Wrapper>
  );
}

const Nickname = styled.div``;

const SearchInputWrapper = styled.div`
  font-size: 0.8rem;
  margin: 32px 12px 12px 20px;
  display: flex;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UserItemWrapper = styled.a<{isPopular: boolean}>`
  height: 60px;
  width: 180px;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  gap: 6px;
  border-left: 4px solid ${({isPopular}) => (isPopular ? 'orange' : 'lightgray')};
  padding-left: 16px;
  background-color: white;
  box-shadow: 1px 1px 2px lightgray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #303d62;
  width: 100%;
  height: 100%;
`;

const UserListWrapper = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);

  padding: 20px;

  ${media.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FilterButton = styled.input``;

const FilterLabel = styled.label``;

const UL = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Row = styled.div`
  width: 100%;
  min-height: 69px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.175);
  display: flex;
  align-items: center;
  color: black;
  font-size: 1.4rem;
  padding: 0 16px;
`;

const Filter = styled(Row)`
  min-height: 44px;
`;
