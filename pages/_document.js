import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html data-theme="light">
      <Head>
        <html data-theme="light" />
        <meta
          name="description"
          content="a software engineering student who loves to code."
        />
        <link rel="icon" href="/public/img/icx.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
