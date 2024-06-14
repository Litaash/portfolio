import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Projects.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { FormattedMessage } from "react-intl";
import { motion } from "framer-motion";
import Link from "next/link";

type ProjectData = {
  record: {
    link: string;
    poster: string;
    title: string;
    tags: string;
  }[];
};

type VariantsType = {
  hidden: { opacity: number; x: number; y: number };
  enter: { opacity: number; x: number; y: number };
};

const Projects: React.FC = () => {
  const [data, setData] = useState<ProjectData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<ProjectData>(
          "https://api.jsonbin.io/v3/b/63f2a2d2ace6f33a22e1a270",
          {
            headers: {
              //"X-Access-Key": process.env.API_KEY as string,
              "X-Access-Key":
                "$2b$10$Fx8twk3cvIiEdihDfpilouu8pKZWx5qMHhvSYHItbYJQPgJ8yrwYW",
              "Content-Type": "application/json",
              versioning: false,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(true);
      }
    }
    fetchData();
  }, []);

  const variants: VariantsType = {
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
            <div className={styles.wrapper}>
              {isLoading ? (
                <div className={styles.loader}>
                  <div className={styles.progress}></div>
                </div>
              ) : (
                <div className={styles.projectsList}>
                  {data &&
                    Array.isArray(data.record) &&
                    data.record.map((item, index) => (
                      <Link href={item.link} key={index}>
                        <img src={item.poster} alt={`Image ${index}`} />
                        <p>{item.title}</p>
                        <p>{item.tags}</p>
                        <p>
                          <FormattedMessage id="page.projects.show" />
                        </p>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
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
      </div>
    </>
  );
};

export default Projects;
