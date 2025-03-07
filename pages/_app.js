import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Analytics } from "@vercel/analytics/react";
import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 700,
    });
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
