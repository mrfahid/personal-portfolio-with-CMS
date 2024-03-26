'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './About.scss'
import { urlFor } from '../../client'; // Only import urlFor, not the entire client
import { client } from '../../client'; // Import the Sanity client

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then(data => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Apps</span><br />means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <Image src={urlFor(about.imgUrl)} alt={about.title} width={300} height={200}/>
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
