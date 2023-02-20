import { useEffect, useRef } from "react";
import styles from "../styles/Projects.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

import baffle from "baffle";
import { FormattedMessage } from 'react-intl';
import { motion } from "framer-motion";

export default function Projects() {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 40 },
    enter: { opacity: 1, x: 0, y: 0 }
  }
  const textRef = useRef(null);

  useEffect(() => {
    baffle(textRef.current).start().set({
      characters: '!/|~#.^+*$#%nwf',
      speed: 80
    })
    .reveal(500, 1000);
  }, []);
  
  return (
    <>
      <div className={styles.projectsWrapper}>
        <Header />
        <div className={styles.projects}>
          <motion.div
            variants={variants}
            initial='hidden'
            animate='enter'
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.projectsHead}>
              <h1 className={styles.caption} ref={textRef}>
                <FormattedMessage id="page.projects.caption" />
              </h1>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}