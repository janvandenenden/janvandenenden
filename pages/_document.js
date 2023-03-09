import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Hi! I'm Jan, a social scientist turned developer. I'm experienced in building customer-facing SaaS, websites and setting up lean business operations."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="twitter:title"
          content="Jan Van den Enden - Digital Developer"
        />
        <meta
          name="twitter:description"
          content="Hi! I'm Jan, a social scientist turned developer. I'm experienced in building customer-facing SaaS, websites and setting up lean business operations."
        />
        <meta name="twitter:image" content="" />
        <meta
          property="og:title"
          content="Jan Van den Enden | Digital Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:alt" content="" />
        <meta
          property="og:description"
          content="Hi! I'm Jan, a social scientist turned developer. I'm experienced in building customer-facing SaaS, websites and setting up lean business operations."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
