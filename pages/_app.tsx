import "normalize.css/normalize.css";
import "../styles/globals.scss";
import "../styles/components/PixelBackground.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

import en from "../lang/en.json";
import uk from "../lang/uk.json";

type Messages = {
  [key: string]: Record<string, string>;
};

type VariantsType = {
  hidden: { opacity: number; x: number; y: number };
  enter: { opacity: number; x: number; y: number };
};

const messages: Messages = {
  en,
  uk,
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  const variants: VariantsType = {
    hidden: { opacity: 0, x: 0, y: 40 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/webclip.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/webclip.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/webclip.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntlProvider locale={locale || "en"} messages={messages[locale || "en"]}>
        <motion.header
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.6,
            delay: 0.6,
          }}
        >
          <Header />
        </motion.header>
        <main>
          <Component {...pageProps} />
        </main>
        <motion.footer
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <Footer />
        </motion.footer>
      </IntlProvider>
    </>
  );
};

export default App;
