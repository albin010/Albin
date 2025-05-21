import React, { useState } from 'react';
import styles from './Home.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/project'); // change this to your route
  };

  return (
    <div>
      {/* Home Section */}
      <div id="home" className={styles.container}>
        <p className={styles.intro}>Myself</p>
        <h1 className={styles.name}>Albin Joseph</h1>
        <h2 className={styles.role}>MCA Student</h2>

        <div className={styles.buttons}>
          <a href="https://www.canva.com/design/DAGnrUYtaSQ/j1m6Xg5ppCLpe2KMK9XQuw/view?utm_content=DAGnrUYtaSQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0b68863922" download className={styles.btnWhite}>
            Download CV
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            className={styles.btnBlack}
          >
            Contact Me
          </a>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/albin-joseph-532339293/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/albin010" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
        </div>

        <div className={styles.imagealbin}></div>
      </div>

      {/* Projects Section */}
      <div id="projects" className={styles.projectsSection}>
        <p className={styles.sectionSubtitle}>Browse My Recent</p>
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <img src="/image/albinpic.jpg" alt="SpendSense" className={styles.projectImage} />
            <h3 className={styles.projectTitle}>SpendSense</h3>
            <div className={styles.projectButtons}>
              <a href="https://github.com/albin010" target="_blank" className={styles.projectButton}>Github</a>
              <a href="https://travelmate-demo.netlify.app" target="_blank" className={styles.projectButton}>Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <img src="/image/albinpic.jpg" alt="VivaQuizApp" className={styles.projectImage} />
            <h3 className={styles.projectTitle}>VivaQuizApp</h3>
            <div className={styles.projectButtons}>
              <a href="https://github.com/yourusername/vivaquizapp" target="_blank" className={styles.projectButton}>Github</a>
              <a href="https://travelmate-demo.netlify.app" target="_blank" className={styles.projectButton}>Demo</a>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <img src="/image/albinpic.jpg" alt="TravelMate" className={styles.projectImage} />
            <h3 className={styles.projectTitle}>TravelMate</h3>
            <div className={styles.projectButtons}>
              <a href="https://github.com/yourusername/travelmate" target="_blank" className={styles.projectButton}>Github</a>
              <a href="https://travelmate-demo.netlify.app" target="_blank" className={styles.projectButton}>Demo</a>
            </div>
          </div>
        </div>
        <button className={styles.more} onClick={handleClick}>
          MORE
        </button>
      </div>

      {/* Contact Section */}
      <div id="contact" className={styles.contactSection}>
        <p className={styles.sectionSubtitle}>Get in Touch</p>
        <h2 className={styles.sectionTitle}>Contact Me</h2>

        <div className={styles.contactBox}>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <a href="mailto:albin2364@gmail.com" className={styles.contactText}>
                <AttachEmailIcon fontSize="large" />
              </a>

            </span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>
              <a href="https://www.linkedin.com/in/albin-joseph-532339293/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" />
              </a>
            </span>
            <a href="https://github.com/albin010" target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Modal with Personal Information */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Contact Information</h3>
            <p><strong>Name:</strong>Albin Joseph</p>
            <p><strong>Email:</strong>albin2364@gmail.com</p>
            <p><strong>Address:</strong>Padinjarematheckal,East Marady PO,Muvattupuzha,Ernakulam</p>
            <p><strong>Phone No:</strong>6282893398</p>
            <p><strong>Pin Code:</strong>686673</p>
            <div className={styles.modalButtons}>
              <button type="button" onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
