import styled from 'styled-components';
import {Pagination} from 'react-bootstrap';
import useTagsQuery from '../../../queries/useTagsQuery';
import TagItem from '../../TagItem';
import TitleSection from '../../TitleSection';

export default function TagTemplate() {
  const {data: tags, isLoading} = useTagsQuery();

  if (isLoading || !tags) {
    return <>Loading...</>;
  }

  return (
    <Wrapper>
      <div>
        <TitleSection
          title={'Tags'}
          content={
            'A tag is a keyword or label that categorizes your question with other, similar questions.\nUsing the right tags makes it easier for others to find and answer your question.'
          }
        />
        <TagListWrapper>
          {tags.map(tag => (
            <TagItem key={tag.id} tag={tag} />
          ))}
        </TagListWrapper>

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

const TagListWrapper = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;
