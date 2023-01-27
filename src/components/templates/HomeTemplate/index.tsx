import usePostsQuery from '../../../queries/usePostsQuery';
import PostListItem from '../../PostListItem';
import styled from 'styled-components';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {media} from '../../../utils/mediaQuery';
import SideWrapper from '../../Common/SideWrapper';

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
    {name: '조회순', value: '3'},
  ];

  if (isLoading || !data) {
    return <>Loading...</>;
  }

  const {posts, total} = data;

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
          {posts.length ? (
            posts.map((post, idx) => <PostListItem key={idx} post={post} query={query} />)
          ) : (
            <EmptyResult>검색 결과가 없습니다</EmptyResult>
          )}
        </BoardListWrapper>

        <div className="row">
          <div className="col-sm-12 col-md-5">
            <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">
              Showing 1 to 10 of {total} entries
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
      </div>
    </Wrapper>
  );
}

const EmptyResult = styled.div`
  margin: 50px;
  width: 100%;
  text-align: center;
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
