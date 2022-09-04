import { css, Global as EmotionGlobal } from '@emotion/react';

export function Global() {
  return (
    <EmotionGlobal
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+KR&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&family=Raleway:wght@500&display=swap');

        :root {
          --theme-color-primary: #9d4eddff;
          --theme-color-silver: #c8cdd0;
          --theme-color-white: #f2f2f3;
          --theme-color-black: #1f292e;
          --theme-color-gray: #415058;
          --theme-color-info: #3a3a3aff;
          --theme-color-warning: #edc25e;
          --theme-color-danger: #e23645;
          --typography-heading-font-size-s: 1.6rem;
          --typography-heading-font-color-primary: var(--theme-color-primary);
          --typography-heading-font-color-secondary: var(--theme-color-black);
          --typography-body-font-size-s: 1.4rem;
          --typography-body-font-size-m: 1.6rem;
          --typography-body-font-size-l: 2rem;
          --typography-body-color: var(--theme-color-gray);
          --typography-body-color-light: var(--theme-color-silver);
          --button-s-font-size: var(--typography-body-font-size-s);
          --button-s-padding: 0 1.6rem;
          --button-s-height: 3.2rem;
          --button-m-font-size: var(--typography-body-font-size-m);
          --button-m-padding: 0 2.4rem;
          --button-m-height: 4rem;
          --button-l-font-size: var(--typography-body-font-size-l);
          --button-l-padding: 0 3.2rem;
          --button-l-height: 4.8rem;
          --button-default-bg-color: var(--theme-color-white);
          --button-default-font-color: var(--theme-color-primary);
          --button-primary-bg-color: var(--theme-color-primary);
          --button-primary-font-color: var(--theme-color-white);
          --button-secondary-bg-color: var(--theme-color-gray);
          --button-secondary-font-color: var(--theme-color-white);
        }

        * {
          font-family: 'Noto Sans', sans-serif;
        }

        html {
          font-size: 10px;
          color: var(--theme-color-black);
        }

        html:lang(ko) * {
          font-family: 'Noto Sans KR', sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul,
        ol {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
}

export default Global;
