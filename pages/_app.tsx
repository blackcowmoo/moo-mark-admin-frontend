import 'antd/dist/antd.css';
import Head from 'next/head';
import type { AppProps /* , AppContext */ } from 'next/app';
import AppLayout from '../components/AppLayout';

const MooMarkAdmin = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>MooMarkAdmin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/static/cow.svg" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default MooMarkAdmin;
