import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Next linktree</title>
      </Head>
      <body className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700 via-blue-900 to-purple-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
