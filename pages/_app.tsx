import 'normalize.css/normalize.css';
import '../styles/globals.scss';
import '../styles/components/PixelBackground.scss';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import uk from "../lang/uk.json";

type Messages = {
  [key: string]: Record<string, string>;
};

const messages: Messages = {
  en,
  uk,
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  
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
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
};

export default App;