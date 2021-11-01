import 'tailwindcss/tailwind.css';
import Layout from '../components/layout/Layout';
import PropTypes from 'prop-types';
import createEmotionCache from '../components/mui/createEmotionCache';
import { CacheProvider } from '@emotion/react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
