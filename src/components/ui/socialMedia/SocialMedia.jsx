import React from "react";
import styles from "./socialMedia.module.scss";

export function SocialMedia() {
  return (
    <div className={styles.social__media}>
      <div className={styles.circle}><a href="https://www.instagram.com/iampollyaa?igsh=MTF2NnI0cGtpZ2FreA%3D%3D&utm_source=qr"  target='_blank'><img src="/src/assets/images/icons/inst.svg" alt="Instagram" /></a></div>
      <div className={styles.circle}><a href="https://x.com/duolingo/status/1896646674053030299" target='_blank'><img src="/src/assets/images/icons/twitter.svg" alt="Twitter" /></a></div>
      <div className={styles.circle}><a href="https://www.youtube.com/watch?v=KgDPUVRPNuc"  target='_blank'><img src="/src/assets/images/icons/youTube.svg" alt="YouTube" /></a></div>
    </div>
  )

}