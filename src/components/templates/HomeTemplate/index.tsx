import usePostsQuery from '../../../queries/usePostsQuery';
import PostListItem from '../../PostListItem';
import styled from 'styled-components';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

const CONTENTS_COUNT_PER_PAGE = 1;
const MAX_COUNT_PER_PAGINATION = 5;

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

  const radios = [{name: '최신순', value: '1'}];

  if (isLoading || !data) {
    return <>Loading...</>;
  }

  const {posts, total} = data;

  const max = Math.floor(total / CONTENTS_COUNT_PER_PAGE);
  const pagination = Array.from({length: max}, (_, i) => i + 1);

  console.log(pagination);

  return (
    <Wrapper>
      <Row>All Questions</Row>
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
      <div>
        {/* @TODO: key는 유니크한 id값으로 대체 */}
        <BoardListWrapper>
          {posts && posts.length ? (
            posts.map((post, idx) => <PostListItem key={idx} post={post} query={query} />)
          ) : (
            <EmptyResult>
              <Icon>🧐</Icon> <br />
              검색 결과가 없습니다
            </EmptyResult>
          )}
        </BoardListWrapper>

        <Pagination>
          <div className="col-sm-12 col-md-7">
            <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
              <ul className="pagination">
                {page !== 0 && (
                  <li className="paginate_button page-item">
                    <a aria-controls="dataTable" className="page-link" onClick={() => setPage(page - 1)}>
                      ◀
                    </a>
                  </li>
                )}
                {pagination.map((label, index) => (
                  <li
                    key={label}
                    className={`paginate_button page-item ${page === index ? 'active' : ''}`}
                    onClick={() => {
                      router.push({pathname: '/questions', query: {...router.query, page: index}});
                    }}>
                    <a aria-controls="dataTable" data-dt-idx={index} tabIndex={index} className="page-link">
                      {label}
                    </a>
                  </li>
                ))}
                {page !== max - 1 && (
                  <li className="paginate_button page-item">
                    <a aria-controls="dataTable" className="page-link" onClick={() => setPage(page + 1)}>
                      ▶
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Pagination>
      </div>
    </Wrapper>
  );
}

const Pagination = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 40px;
`;

const EmptyResult = styled.div`
  margin: 40px auto;
  width: 100%;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 5rem;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
`;

const BoardListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
