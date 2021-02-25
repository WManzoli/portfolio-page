import NProgress from 'nprogress'
import Router from 'next/router'
import Layout from '../components/Layout';
import '../styles/globals.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Layout>
  );
}

export default MyApp;
