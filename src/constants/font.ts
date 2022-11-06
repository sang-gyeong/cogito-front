import {css} from 'styled-components';

import {media} from '../utils/mediaQuery';
import {COLORS} from './color';

const TEXT = {
  Heading1: css`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;
    color: ${COLORS.Black2};

    ${media.tablet} {
      font-size: 2.8rem;
      line-height: 3.2rem;
    }
  `,
  Heading2: css`
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 4rem;
    color: ${COLORS.Black};

    ${media.tablet} {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }
  `,
};

export default TEXT;
