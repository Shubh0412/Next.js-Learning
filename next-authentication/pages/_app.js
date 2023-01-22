import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/components/Navbar.css";
import { SessionProvider } from "next-auth/react";

export default function App({ session, Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
