import React from "react";
import styles from "./socialMedia.module.scss";

import Insta from "@images/icons/inst.svg";
import X from "@images/icons/x.svg";
import YouTube from "@images/icons/youTube.svg";

export const SocialMedia = () =>{
    return (
      <div className={styles.social__media}>
        <div className={styles.circle}><a href="https://www.instagram.com/iampollyaa?igsh=MTF2NnI0cGtpZ2FreA%3D%3D&utm_source=qr" target='_blank'><img src={Insta} alt="Instagram" /></a></div>
        <div className={styles.circle}><a href="https://x.com/" target='_blank'><img src={X} alt="Twitter" /></a></div>
        <div className={styles.circle}><a href="https://www.youtube.com/" target='_blank'><img src={YouTube} alt="YouTube" /></a></div>
      </div>
    )
}