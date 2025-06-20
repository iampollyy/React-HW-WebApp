import React from "react";
import styles from "./socialMedia.module.scss";


const SocialMedia: React.FC = () => {
  return (
    <div className={styles.social__media}>
      <div className={styles.circle}>
        <a href="https://www.instagram.com/iampollyaa?igsh=..." target="_blank" rel="noreferrer">
          <span className={`${styles.icon} ${styles.insta}`} />
        </a>
      </div>
      <div className={styles.circle}>
        <a href="https://x.com/" target="_blank" rel="noreferrer">
          <span className={`${styles.icon} ${styles.x}`} />
        </a>
      </div>
      <div className={styles.circle}>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <span className={`${styles.icon} ${styles.youtube}`} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
