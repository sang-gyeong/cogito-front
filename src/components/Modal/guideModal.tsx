import styled from 'styled-components';

export default function GuideModal() {
  return (
    <Wrapper>
      Thanks for contributing an answer to Stack Overflow! Please be sure to answer the question. Provide details and
      share your research! But avoid … Asking for help, clarification, or responding to other answers. Making statements
      based on opinion; back them up with references or personal experience. To learn more, see our tips on writing
      great answers.
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
