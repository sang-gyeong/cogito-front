import styled from 'styled-components';

export default function TagItem({tag}: {tag: string}) {
  return <Tag>{tag}</Tag>;
}

export const Tag = styled.span`
  background-color: cadetblue;
  color: white;
  font-size: 0.7rem;
  padding: 3px 9px;
  border-radius: 9px;
  margin-right: 8px;
`;
