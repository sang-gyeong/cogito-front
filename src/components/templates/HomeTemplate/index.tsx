import usePostsQuery from '../../../queries/usePostsQuery';
import PostListItem from '../../PostListItem';
import styled from 'styled-components';
import {Button, ButtonGroup, Pagination, ToggleButton} from 'react-bootstrap';
import TitleSection from '../../TitleSection';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function HomeTemplate() {
  const router = useRouter();

  const [query, setQuery] = useState((router.query?.query ?? '') as string);
  const [page, setPage] = useState(router.query?.page ? Number(router.query?.page) : 0);

  useEffect(() => {
    const _query = (router.query?.query ?? '') as string;
    const _page = router.query?.page ? Number(router.query?.page) : 0;

    setQuery(_query);
    setPage(_page);
  }, [router.query]);

  const {data, isLoading} = usePostsQuery({query, page});
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    {name: '정확도순', value: '1'},
    {name: '최신순', value: '2'},
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

        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
              Showing 1 to 10 of 57 entries
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
              <ul className="pagination">
                {['Previous', 1, 2, 3, 4, 5, 6, 'Next'].map((label, index) => (
                  <li
                    key={label}
                    className={`paginate_button page-item ${page === index ? 'active' : ''}`}
                    onClick={() => {
                      router.push({pathname: '/questions', query: {...router.query, page: index}});
                    }}>
                    <a href="#" aria-controls="dataTable" data-dt-idx={index} tabIndex={index} className="page-link">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <Pagination>
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
        </Pagination> */}
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
