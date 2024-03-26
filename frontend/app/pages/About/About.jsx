'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { urlFor } from '../../client'; // Import only urlFor, not the entire client
import client from '../../client'; // Import the Sanity client

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://xt0q7oh0.apicdn.sanity.io/v2024-03-25/data/query/production?query=*%5B_type+%3D%3D+%22abouts%22%5D&returnQuery=false';
        const response = await fetch(corsProxyUrl + apiUrl);
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        setAbouts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
        setLoading(false);
      }
    };
    fetchAbouts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Show an error message if data fetching fails
  }

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
            <Image src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
