import useBoardQuery from '../../../queries/useBoardQuery';

export default function BoardTemplate(id: any) {
  const {data} = useBoardQuery(id);

  return (
    <>
      <div>Board templates!!</div>
    </>
  );
}
