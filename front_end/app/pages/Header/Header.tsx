"use client";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import Image from "next/image";
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text dark:text-black">Hello, I am</p>
            <h1 className="head-text">Fahid</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text dark:text-black">Full Stack</p>
          <p className="p-text dark:text-black">Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <Image
       src={images.logo}
       alt="profile_bg2"
       fill
       sizes="(max-width: 600px) 100vw, (max-width: 1200px) 100vw, 40vw"
       style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
       priority
       className="image-profile"
       />
      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="overlay_circle"
      > 
      <Image
      src={images.circle}
      className="animatedCircle"
      alt="profile_circle"
      width={500}
      height={500}
      priority
      />
      </motion.div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.nodejs, images.nextjs, images.mongodb].map((circle, index) => (
        <div className="circles-cmp app__flex" key={`circle-${index}`}>
          <Image src={circle} alt="profile" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home', `app__whitebg`);