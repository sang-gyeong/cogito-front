import React from 'react';
import Image, {ImageProps} from 'next/image';
import styled from 'styled-components';

export default function AutoHeightImage({...props}: ImageProps): React.ReactElement {
  return (
    <AutoHeightImageWrapper>
      <Image layout="fill" className="autoImage" {...props} />
    </AutoHeightImageWrapper>
  );
}

export const AutoHeightImageWrapper = styled.div`
  width: 100%;

  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;
