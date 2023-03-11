import type { AppProps } from "next/app";
import { CSSReset } from "../components/css-reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CSSReset />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
