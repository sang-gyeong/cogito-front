import styled from 'styled-components';

export default function GuideModal() {
  return (
    <Wrapper>
      Cogito에 오신것을 환영합니다! 개발과 관련된 모든 의견 및 질문은 환영입니다. <br />
      의견 공유의 목적이 아닌 비방성, 홍보성 목적의 글은 예고없이 삭제될 수 있으니 주의해주세요!
      <br />
      자세한 사항은 코기토 블로그를 확인해주세요.
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
