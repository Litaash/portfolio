import styles from "../styles/Main.module.scss";
import PixelBackground from "../components/PixelBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FormattedMessage } from "react-intl";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <PixelBackground />
        <div className={styles.wrapper}>
          <div className={styles.wrapperContent}>
            <div className={styles.wrapperContentLeft}>
              <h1 className={styles.name}>
                <FormattedMessage id="page.home.name" />
              </h1>
              <h2 className={styles.workPosition}>
                <FormattedMessage id="page.home.position" />
              </h2>

              <p className={styles.typingText}>
                <FormattedMessage id="page.home.description" />
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
