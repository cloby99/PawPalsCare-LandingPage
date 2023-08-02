import React, { useEffect, useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home');
      const about = document.getElementById('about');
      const experience = document.getElementById('experience');
      const services = document.getElementById('services');
      const contact = document.getElementById('contact');

      const sections = [
        { section: home, id: '#home' },
        { section: about, id: '#about' },
        { section: experience, id: '#experience' },
        { section: services, id: '#services' },
        { section: contact, id: '#contact' },
      ];

      const navHeight = 50; // Adjust this value based on your layout

      for (const { section, id } of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible =
            rect.top >= -navHeight && rect.bottom <= window.innerHeight;

          if (isVisible && activeNav !== id) {
            setActiveNav(id);
            break;
          }
        }
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [activeNav]);

  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
