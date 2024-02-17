import React from 'react';
import { FaLinkedin, FaInstagram,FaGithub,FaDiscord } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-4">Connect with Me</h2>
        <div className="flex space-x-4 ">
          <a href="https://www.linkedin.com/in/sumit-shukla-5aa09624b" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 md:text-3xl">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/sumitshukla1001?igsh=NHd1eTBrNGV5eXRn" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 md:text-3xl">
            <FaInstagram />
          </a>
          <a href="https://github.com/sumitshukla10" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 md:text-3xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sumit-shukla-5aa09624b" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 md:text-3xl">
            <FaDiscord />
          </a>
          <a href="mailto:9910sumitshukla@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 md:text-3xl">
            <HiOutlineMail />
          </a>
        </div>
        <p className="mt-4">© 2024 Sumit Shukla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
