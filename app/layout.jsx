"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./global.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Paramarsh Informatic Pvt. Ltd.</title>
        <link rel="apple-touch-icon" href="/favicon.png"/>
        <meta property="og:type" content="website" />
        <meta name="robots" content="follow, index" />
        <meta
          name="keywords"
          content="pramarsh, pramarsh Informatics,Paramarsh Company, Paramarsh guragon, software"
        />
        <meta
          property="og:image"
          content={`https://paramarsh.vercel.app/logo.png`}
        />
        <meta
          name="twitter:image"
          content={`https://paramarsh.vercel.app/logo.png`}
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content="Paramarsh is an IT solutions provider offering software and IT services including consulting, design, and implementation."
        />
        <meta
          name="description"
          content="Paramarsh is an IT solutions provider offering software and IT services including consulting, design, and implementation."
        />
        <meta
          name="twitter:description"
          content="Paramarsh is an IT solutions provider offering software and IT services including consulting, design, and implementation."
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.png"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
