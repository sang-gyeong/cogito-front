import usePostsQuery from '../../../queries/usePostsQuery';
import PostListItem from '../../PostListItem';
import styled from 'styled-components';
import {Button, ButtonGroup, Pagination, ToggleButton} from 'react-bootstrap';
import TitleSection from '../../TitleSection';
import {useState} from 'react';

export default function HomeTemplate() {
  const {data, isLoading} = usePostsQuery({});
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    {name: 'Active', value: '1'},
    {name: 'Radio', value: '2'},
    {name: 'Radio', value: '3'},
  ];

  if (isLoading || !data) {
    return <>Loading...</>;
  }

  const {posts} = data;

  return (
    <Wrapper>
      <TitleSection
        title={'Questions'}
        component={
          <div style={{textAlign: 'right'}}>
            <Button variant="primary" href="/new">
              + 새 질문 생성하기
            </Button>
          </div>
        }
      />
      <div>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-primary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={e => setRadioValue(e.currentTarget.value)}>
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div>
        {/* @TODO: key는 유니크한 id값으로 대체 */}
        <BoardListWrapper>{posts && posts.map((post, idx) => <PostListItem key={idx} post={post} />)}</BoardListWrapper>

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
  flex-direction: column;
`;

const BoardListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
