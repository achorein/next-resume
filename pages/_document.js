import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="theme-color" content="#000000" />

          {/* <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> */}
          {/* <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" /> */}
          {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}

          <meta name="robots" content="index,follow" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          {/* <meta name="viewport" content="viewport-fit=cover" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
