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
          <p className="p-text dark:text-black">Frontend</p>
          <p className="p-text dark:text-black">Web Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <Image 
       src={images.logo4}
       alt="profile_bg2" 
       layout="responsive"
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
      className="animatedCircle w-[300px] h-[500px] md:w-[500px] md:h-[500px" 
      alt="profile_circle" 
      layout="responsive"
      priority
      />
      </motion.div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.redux, images.sass].map((circle, index) => (
        <div className="circles-cmp app__flex" key={`circle-${index}`}>
          <Image src={circle} alt="profile" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home', `app__whitebg`);
