import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Projects.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(process.env.NEXT_PUBLIC_API_KEY);
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const response = await axios.get(
          "https://api.jsonbin.io/v3/b/63f2a2d2ace6f33a22e1a270",
          {
            headers: {
              "X-Master-Key": apiKey,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Помилка запиту до API:", error);
      }
    }

    fetchData();
  }, []);

  const variants = {
    hidden: { opacity: 0, x: 0, y: 40 },
    enter: { opacity: 1, x: 0, y: 0 },
  };

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
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.7,
                  type: "tween",
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                <h1 className={styles.caption}>
                  <FormattedMessage id="page.projects.caption" />
                </h1>
              </motion.div>
            </div>
          </motion.div>

          <div>
            {data.map((item) => (
              <div key={item.id}>
                <p>Name: {item.name}</p>
                <p>Username: {item.username}</p>
                <p>Email: {item.email}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
