import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

import {COLORS} from '../constants/color';

const ThemedGlobalStyle = createGlobalStyle`
${reset}
  :root {
    font-size: 62.5%;
  }
  html, body {
    width: 100%;
  }
  body {
    overscroll-behavior: none;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  *, body, div, ul, ol, li, h1, h2, h3, h4, h5, h6, form, fieldset, textarea, p, th, td, input, select, span, button {
    box-sizing: border-box;
    font-family: "SF Pro Display";
    line-height: 130%;
    font-size: 1rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  button:disabled,
  button[disabled]{
    background-color: ${COLORS.CoolGray1};
    color: ${COLORS.CoolGray2};
  }
  ol, ul, li {
    list-style: none;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }

  input,
  textarea {
    outline: none;
  }
`;

export default ThemedGlobalStyle;
