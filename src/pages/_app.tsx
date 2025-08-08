import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { BagProvider } from "@/context/BagContext";
import { ToastContainer } from "react-toastify";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <> 
      <BagProvider>{getLayout(<Component {...pageProps} />)}</BagProvider>
      <ToastContainer position="top-right" autoClose={3000} /> {/* parte modificada */}
    </>
  ); 
}
