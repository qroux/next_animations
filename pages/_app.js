import 'bootstrap/dist/css/bootstrap.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default ({ Component, pageProps, router }) => {
  return (
    <div
      className="bg-success d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        background:
          'linear-gradient(98deg, rgba(182, 210, 245,1) 0%, rgba(71, 61, 204,1) 100%)',
      }}
    >
      <Head>
        <link href="/styles.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );
};
