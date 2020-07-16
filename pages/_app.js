import 'bootstrap/dist/css/bootstrap.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
config.autoAddCss = false;

import CustomNavbar from '../components/navbar';

export default ({ Component, pageProps, router }) => {
  return (
    <>
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

      <div
        className=""
        style={{
          background:
            'linear-gradient(98deg, rgba(182, 210, 245,1) 0%, rgba(71, 61, 204,1) 100%)',
        }}
      >
        <CustomNavbar />
        <div
          className="component-container d-flex justify-content-center align-items-center"
          style={{ minHeight: '94vh' }}
        >
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
