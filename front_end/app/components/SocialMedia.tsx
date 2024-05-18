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
    <Link className="mb-5 " href='https://www.linkedin.com/in/shah-fahid-a4543027b/' target='_blank'>
      <BsLinkedin className=" hover:bg-blue-700"/>
    </Link>
    <Link className="hover:bg-black-800" href='https://github.com/mrfahid' target="_blank">
      <FaGithub className="hover:bg-slate-400"/>
    </Link>
    <Link className="mt-5" href="https://www.instagram.com/mr_fahid.dev/" target="_blank">
      <BsInstagram className="hover:bg-red-400"/>
    </Link>
  </div>
);

export default SocialMedia;
