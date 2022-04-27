import '../styles/global.css';
import type { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config.js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
