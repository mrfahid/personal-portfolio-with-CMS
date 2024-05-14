import Link from 'next/link';
import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
// import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
interface SocialMediaProps {
  BsLinkedin?: boolean; 
  FaGithub?: boolean;   
  BsInstagram?: boolean; 
}


const SocialMedia: React.FC<SocialMediaProps> = () => (
  <div className="app__social">
    <a href='https://github.com/mrfahid' target='_blank'>
      <BsLinkedin />
    </a>
    <div>
      <FaGithub />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
