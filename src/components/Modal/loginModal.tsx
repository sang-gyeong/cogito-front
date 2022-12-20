import styled from 'styled-components';

export default function LoginModal() {
  return (
    <Wrapper>
      <Button style={{backgroundColor: 'gold'}}>카카오로 로그인하기</Button>
      <Button style={{backgroundColor: '#2DB400', color: 'white'}}>네이버로 로그인하기</Button>
      <Button style={{backgroundColor: 'black', color: 'white'}}>Github로 로그인하기</Button>
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

const Button = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
