import {BREAK_POINT} from '../constants/platform';

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

export const media = {
  tablet: mediaQuery(BREAK_POINT.TABLET),
  mobile: mediaQuery(BREAK_POINT.MOBILE),
  desktop: mediaQuery(BREAK_POINT.DESKTOP),
};
