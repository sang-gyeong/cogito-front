import {BREAK_POINT} from '../constants/platform';

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

export const media = {
  tablet: mediaQuery(BREAK_POINT.TABLET),
  laptop: mediaQuery(BREAK_POINT.LAPTOP),
  mobile: mediaQuery(BREAK_POINT.MOBILE),
  desktop: mediaQuery(BREAK_POINT.DESKTOP),
};
