import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Nosifier */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nosifer&display=swap" rel="stylesheet" />
                {/* Rancho */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rancho&display=swap" rel="stylesheet" />
            </Head>

            <body>
                <Main />
            </body>
            <NextScript />
        </Html>
    )
}