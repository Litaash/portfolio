import styles from "../styles/Main.module.scss";
import PixelBackground from "../components/PixelBackground";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

type VariantsType = {
  hidden: { opacity: number; x: number; y: number };
  enter: { opacity: number; x: number; y: number };
};

const Home: React.FC = () => {
  const typedEl = useRef<HTMLSpanElement | null>(null);
  const variants: VariantsType = {
    hidden: { opacity: 0, x: 0, y: 40 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  useEffect(() => {
    if (typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: ["Front-End Developer", "React Developer"],
        startDelay: 700,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <PixelBackground />
      <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
          <div className={styles.wrapperContentLeft}>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="enter"
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.6,
                delay: 0.5,
              }}
            >
              <h1 className={styles.name}>
                <FormattedMessage id="page.home.name" />
              </h1>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="enter"
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.6,
                delay: 0.4,
              }}
            >
              <h2 className={styles.workPosition}>
                <FormattedMessage id="page.home.position" />
              </h2>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              animate="enter"
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.6,
                delay: 0.3,
              }}
            >
              <div className={styles.typingText}>
                <p>
                  <FormattedMessage id="page.home.description" />
                </p>
                <span ref={typedEl}></span>
              </div>
            </motion.div>
          </div>
          <div className={styles.wrapperContentRight}>
            <motion.div
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
    </>
  );
};

export default Home;
