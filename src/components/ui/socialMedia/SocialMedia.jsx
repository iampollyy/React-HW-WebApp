import React from "react";
import styles from "./socialMedia.module.scss";

import Insta from "@images/icons/inst.svg";
import Twitter from "@images/icons/twitter.svg";
import YouTube from "@images/icons/youTube.svg";

export function SocialMedia() {
  return (
    <div className={styles.social__media}>
      <div className={styles.circle}><a href="https://www.instagram.com/iampollyaa?igsh=MTF2NnI0cGtpZ2FreA%3D%3D&utm_source=qr"  target='_blank'><img src={Insta} alt="Instagram" /></a></div>
      <div className={styles.circle}><a href="https://x.com/duolingo/status/1896646674053030299" target='_blank'><img src={Twitter} alt="Twitter" /></a></div>
      <div className={styles.circle}><a href="https://www.youtube.com/watch?v=KgDPUVRPNuc"  target='_blank'><img src={YouTube} alt="YouTube" /></a></div>
    </div>
  )

}