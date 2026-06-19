import "@/styles/globals.css";
import { Orbit, Orbitron } from 'next/font/google'; // Suas fontes continuam aqui
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { useEffect, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Controla o estado da página atual para congelar o HTML no momento certo
  const [displayState, setDisplayState] = useState({
    Component,
    pageProps,
  });

  // Intercepta a mudança de rota do Next.js e sincroniza com o Navegador
  useLayoutEffect(() => {
    if (Component !== displayState.Component) {
      if (document.startViewTransition) {
        // O segredo está aqui: o HTML só muda DENTRO do startViewTransition
        document.startViewTransition(() => {
          setDisplayState({ Component, pageProps });
        });
      } else {
        // Fallback para navegadores sem suporte
        setDisplayState({ Component, pageProps });
      }
    }
  }, [Component, pageProps]);

  // Garante a renderização correta no primeiro carregamento do site
  useEffect(() => {
    setDisplayState({ Component, pageProps });
  }, []);

  return (
    <>
      {/* Renderiza o componente controlado pelo estado da transição */}
      <displayState.Component {...displayState.pageProps} />
      <ToastContainer />
    </>
  );
}
