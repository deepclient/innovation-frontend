import { Html, Head, NextScript }  from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Innovation Comunnity</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="bg-app-500 m-0 p-0 bg-[url('../assets/background.png')] bg-no-repeat bg-right-top bg-50%">
        <NextScript />
      </body>
    </Html>
  )
}