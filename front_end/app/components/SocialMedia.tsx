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
    <div>
      <BsLinkedin />
    </div>
    <div>
      <FaGithub />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
