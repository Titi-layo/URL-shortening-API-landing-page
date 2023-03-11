import { Global, css } from "@emotion/react";

export const CSSReset = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      * {
        margin: 0;
      }

      html,
      body {
        height: 100%;
        overflow-x: hidden;
      }

      body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        font-family: "Poppins", sans-serif;
      }

      img,
      picture,
      video,
      canvas,
      svg {
        display: block;
        max-width: 100%;
      }

      input,
      button,
      textarea,
      select {
        font: inherit;
        border: unset;
      }

      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        overflow-wrap: break-word;
      }

      #root,
      #__next {
        isolation: isolate;
      }

      :root {
        --cyan: hsl(180, 66%, 49%);
        --dark-violet: hsl(257, 27%, 26%);
        --red: hsl(0, 87%, 67%);
        --gray: hsl(0, 0%, 75%);
        --grayish-violet: hsl(257, 7%, 63%);
        --very-dark-blue: hsl(255, 11%, 22%);
        --very-dark-violet: hsl(260, 8%, 14%);
        --light-gray: hsl(230, 25%, 95%);
      }
    `}
  />
);
