import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="I'm Jan, a front-end developer based in Brussels, Belgium. I love to code creative and functional websites that scale and help projects go from zero to one using lean strategies."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="twitter:title"
          content="Jan Van den Enden | Digital Developer"
        />
        <meta
          name="twitter:description"
          content="Hi! I'm Jan, a front-end developer based in Brussels, Belgium. I love to code creative and functional websites that scale and help projects go from zero to one using lean strategies."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://janvandenenden.com/jan-twitter.jpg"
        />
        <meta
          property="og:title"
          content="Jan Van den Enden | Digital Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://janvandenenden.com" />
        <meta
          property="og:image"
          content="https://janvandenenden.com/jan-og.jpg"
        />
        <meta
          property="og:image:alt"
          content="jan sitting at a desk with a laptop"
        />
        <meta
          property="og:description"
          content="Hi! I'm Jan, a front-end developer based in Brussels, Belgium. I love to code creative and functional websites that scale and help projects go from zero to one using lean strategies."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
