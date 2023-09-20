"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./global.css"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <html lang="en">
      <head>
        <title>Welcome to Paramarsh Informatic Pvt. Ltd.</title>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon.png"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
