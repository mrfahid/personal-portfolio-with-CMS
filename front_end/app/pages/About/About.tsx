"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { client, urlFor } from "../../client";
import "./About.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

type AboutType = {
  title: string;
  description: string;
  imgUrl: string;
};

const About: React.FC<{}> = () => {
  const [abouts, setAbouts] = useState<AboutType[]>([]);

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const query = '*[_type == "abouts"]';
        const data = await client.fetch<AboutType[]>(query);
        setAbouts(data);
      } catch (error) {
        console.error("Error fetching 'abouts' data:", error);
      }
    };

    fetchAbouts();
  }, []);

  return (
    <>
      <h2 className="head-text dark:text-white">
        I Know that <span>Good Apps</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <Image
              className="img"
              src={urlFor(about.imgUrl)}
              alt={about.title}
              width={200}
              height={170}
              layout="responsive"
              priority
            />

            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
