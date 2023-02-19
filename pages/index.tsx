import styles from "../styles/Main.module.scss";

import PixelBackground from "../components/PixelBackground";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 40 },
    enter: { opacity: 1, x: 0, y: 0 }
  }

  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['Webflow Developer', 'Front-End Developer'],
      startDelay: 700,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main className={styles.main}>
        <motion.header
          variants={variants}
          initial='hidden'
          animate='enter'
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.6, delay: 0.6 }}
        >
          <Header />
        </motion.header>
        <PixelBackground />
        <div className={styles.wrapper}>
          <div className={styles.wrapperContent}>
            <div className={styles.wrapperContentLeft}>
              <motion.text
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.6, delay: 0.5 }}
              >
                <h1 className={styles.name}>
                  <FormattedMessage id="page.home.name" />
                </h1>
              </motion.text>

              <motion.text
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.6, delay: 0.4 }}
              >
                <h2 className={styles.workPosition}>
                  <FormattedMessage id="page.home.position" />
                </h2>
              </motion.text>

              <motion.text
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.6, delay: 0.3 }}
              >
                <p className={styles.typingText}>
                  <FormattedMessage id="page.home.description" />
                  <span ref={typedEl}></span>
                </p>
              </motion.text>
            </div>
            <div className={styles.wrapperContentRight}>
              <motion.div
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.6, delay: 0.2 }}
              >
                <Tilt
                  perspective={500}
                  glareEnable={false}
                  scale={1}
                  trackOnWindow={true}
                >
                  <div className={styles.contentImage}></div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.footer 
          variants={variants}
          initial='hidden'
          animate='enter'
          transition={{ type: 'tween', ease: 'easeOut', duration: 0.6, delay: 0.2 }}
        >
          <Footer />
        </motion.footer>
      </main>
    </>
  );
}
