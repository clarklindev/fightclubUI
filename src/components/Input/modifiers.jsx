import { css } from 'styled-components';

export const MODIFIERS = {
  //input
  noborder: () => css`
    border: none;
  `,
  noborderleft: () => css`
    border-left: none;
  `,
  noborderright: () => css`
    border-right: none;
  `,

  readonly: () => css`
    cursor: default;
  `,
  nonselectable: () => css`
    pointer-events: none;
  `,
  noborderradius: () => css`
    border-radius: 0;
  `,
  noborderleftradius: () => css`
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  `,
  noborderrightradius: () => css`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  `,
  nopadding: () => css`
    padding: 0;
  `,
  noleftpadding: () => css`
    padding-left: 0;
  `,
  norightpadding: () => css`
    padding-right: 0;
  `,

  textcenter: () => css`
    text-align: center;
  `,

  // inputsearch
  search: () => css`
    /* clears the 'X' from Internet Explorer */
    &::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the 'X' from Chrome */
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  `,
};
