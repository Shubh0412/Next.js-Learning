import Footer from "@/components/Footer";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>All About Learning</title>
        <meta name="description" content="Just keep grinding daily" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
