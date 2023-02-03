import styles from "../styles/Main.module.scss";
import PixelBackground from "../components/PixelBackground";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <PixelBackground />
        <div className={styles.wrapper}>
          <div className={styles.wrapperContent}>
            <div className={styles.wrapperContentLeft}>
              <h1 className={styles.name}>Litash Oleksandr</h1>
              <h2 className={styles.workPosition}>Web Developer</h2>

              <p className={styles.typingText}>
                Currently looking for a full-time position as a Front-End Developer
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
