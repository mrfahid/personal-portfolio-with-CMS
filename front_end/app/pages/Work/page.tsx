"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./work.scss";
import Image from "next/image";
import Link from "next/link";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import type { Work } from "@/app/types";


const Work =  () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [filterWork, setFilterWork] = useState<Work[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 }); 

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {["UI/UX", "Web App", "Website", "React Js", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <Image src={urlFor(work.imgUrl)} alt={work.name} width={200} height={90}/>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <Link href={work.projectLink || 'https://githum.com'} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </Link>
                <Link href={work.codeLink || 'https://githum.com'} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
            <h4 className="bold-text">{work.title}</h4>
              <p className="p-text line-clamp-3" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
