import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/layout.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Styling</title>
        <meta name="description" content="Just keep styling" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
