import useBoardsQuery from '../../../queries/useBoardsQuery';
import BoardItem from '../../BoardItem';
import styled from 'styled-components';

export default function HomeTemplate() {
  const {data: boards, isLoading} = useBoardsQuery();

  if (isLoading || !boards) {
    return <>Loading...</>;
  }

  return (
    <>
      <BoardListWrapper>
        {boards.map(board => (
          <BoardItem key={board.id} board={board} />
        ))}
      </BoardListWrapper>
    </>
  );
}

const BoardListWrapper = styled.div`
  display: flex;
  border: 2px solid gold;
  flex-direction: column;
  gap: 20px;
  width: 850px;
`;
