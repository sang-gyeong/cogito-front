import useUsersQuery from '../../../queries/useUsersQuery';
import UserItem from '../../UserItem';
import styled from 'styled-components';
import {Pagination} from 'react-bootstrap';
import SideBar from '../../Layout/SideBar';
import TitleSection from '../../TitleSection';

export default function UserTemplate() {
  const {data: users, isLoading} = useUsersQuery();

  if (isLoading || !users) {
    return <>Loading...</>;
  }

  return (
    <Wrapper>
      <div>
        <TitleSection title={'Users'} content={''} />
        <UserListWrapper>
          {users.map(user => (
            <UserItem key={user.uid} user={user} />
          ))}
        </UserListWrapper>

        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const UserListWrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
