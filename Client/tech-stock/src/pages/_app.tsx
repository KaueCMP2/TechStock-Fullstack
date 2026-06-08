import "@/styles/globals.css";
import { Orbit, Orbitron } from 'next/font/google'
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
