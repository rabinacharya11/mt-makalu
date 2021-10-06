import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import Head from "next/head";
import  NProgress  from "nprogress";
import Router from 'next/router'

function MyApp({ Component, pageProps }) {
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    console.log("Starting");
  });
  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
  console.log('Finished Changing Route')

  })

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="flex flex-col h-screen justify-between">
        <header>
          <Header />
        </header>
        <main className="mb-auto">
          <Component {...pageProps} />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MyApp;
