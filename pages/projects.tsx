import { useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "../styles/Projects.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

import baffle from "baffle";
import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function Projects() {
  interface Data {
    record: {
      id: number;
      name: string;
      username: string;
      email: string;
    }[];
    metadata: {
      id: string;
      private: boolean;
      createdAt: string;
    };
  }

  const X_MASTER_KEY = process.env.NEXT_PUBLIC_X_MASTER_KEY;
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const textRef = useRef(null);
  const variants = {
    hidden: { opacity: 0, x: 0, y: 40 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://api.jsonbin.io/v3/b/63f2a2d2ace6f33a22e1a270",
          {
            headers: {
              "X-Master-Key": X_MASTER_KEY,
              "Content-Type": "application/json",
              versioning: false,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();

    baffle(textRef.current)
      .start()
      .set({
        characters: "!/|~#.^+*$#%nwf",
        speed: 80,
      })
      .reveal(500, 1000);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.projectsWrapper}>
        <Header />
        <div className={styles.projects}>
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
            <div className={styles.projectsHead}>
              <h1 className={styles.caption} ref={textRef}>
                <FormattedMessage id="page.projects.caption" />
              </h1>
            </div>
          </motion.div>

          <div>
            {data &&
              Array.isArray(data.record) &&
              data.record.map((item, index) => (
                <div key={index}>
                  <p>{item.name}</p>
                  <p>{item.username}</p>
                  <p>{item.email}</p>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
