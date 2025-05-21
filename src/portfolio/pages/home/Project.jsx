import React from 'react';
import styles from './Project.module.css';

const Project = () => {
  return (
    <div className={styles.productcontainer}>
      <h1 className={styles.h111}>My Projects</h1>

      <div className={styles.projectsGrid}>
        {/* === Project Card 1 === */}
        <div className={styles.projectCard}>
          <img
            src="/image/albinpic.jpg"
            alt="VivaQuizApp"
            className={styles.projectImage}
          />

          <h3 className={styles.projectTitle}>VivaQuizApp</h3>

          <p className={styles.techStack}>
            <strong>Technologies:</strong> React, HTML, JavaScript, CSS
          </p>

          <div className={styles.projectButtons}>
            <a
              href="https://github.com/yourusername/vivaquizapp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectButton}
            >
              GitHub
            </a>
            <a
              href="https://travelmate-demo.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectButton}
            >
              Demo
            </a>
          </div>
        </div>

        {/* === Project Card 2 === */}
        <div className={styles.projectCard}>
          <img
            src="/image/albinpic.jpg"
            alt="AnotherApp"
            className={styles.projectImage}
          />

          <h3 className={styles.projectTitle}>AnotherApp</h3>

          <p className={styles.techStack}>
            <strong>Technologies:</strong> MongoDB, Express, React, Node.js
          </p>

          <div className={styles.projectButtons}>
            <a
              href="https://github.com/yourusername/anotherapp"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectButton}
            >
              GitHub
            </a>
            <a
              href="https://anotherapp-demo.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectButton}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
