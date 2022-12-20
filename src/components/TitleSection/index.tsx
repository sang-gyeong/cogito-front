import {ReactElement} from 'react';
import styled from 'styled-components';

export default function TitleSection({
  title,
  content,
  component,
}: {
  title?: string;
  content?: string;
  component?: ReactElement;
}) {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {content && <Content>{content}</Content>}
      {component}
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 24px 6px 24px 32px;
  position: relative;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 2.3rem;
`;

export const Content = styled.p`
  margin-top: 6px;
`;
