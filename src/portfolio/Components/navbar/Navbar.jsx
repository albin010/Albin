import React from 'react';
import styles from './Navbar.module.css';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on homepage, scroll to #home section
      scroller.scrollTo('home', {
        duration: 500,
        smooth: true,
      });
    } else {
      // Navigate back and let Homepage handle scroll
      navigate(-1);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#home" onClick={handleHomeClick} className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <ScrollLink to="projects" smooth={true} duration={500} className={styles.navLink}>
              Project
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink to="contact" smooth={true} duration={500} className={styles.navLink}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
