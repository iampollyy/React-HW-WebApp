import React from 'react';
import styles from "@layout/footer/footer.module.scss";


export function Footer() {


  return (
    <footer>
      <div className={styles.container}>

        <div className={styles.logo__motto}>
          <a href="#"><img src="/src/assets/images/logo/logo.svg" alt="logo" className={styles.logo} /></a>
          <p className={styles.motto}>Takeaway & Delivery template for small - medium businesses.</p>

        </div>

        <div className={styles.content}>

         <div className={styles.column}>
              <h4 className={styles.column__title}>Company</h4>
              <ul className={styles.column__list}>
                <li><a href="#">Order</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Home</a></li>
              </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.column__title}>Template</h4>
            <ul className={styles.column__list}>
              <li><a href="#">Style Guide</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Licence</a></li>
              <li><a href="#">Webflow University</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.column__title}>Flowbase</h4>
            <ul className={styles.column__list}>
              <li><a href="#">More Cloneables</a></li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className={styles.hr}></div>

      <div className={styles.footer__bottom}>
        <p className={styles.footer__bottom__text}>Built by <span><a href="https://www.flowbase.co/" target='_blank'>Flowbase</a></span> · Powered by <span><a  target='_blank' href="https://webflow.com/">Webflow</a></span></p>

        <div className={styles.social__media}>

        <div className={styles.circle}><a href="https://www.instagram.com/iampollyaa?igsh=MTF2NnI0cGtpZ2FreA%3D%3D&utm_source=qr"  target='_blank'><img src="/src/assets/images/icons/inst.svg" alt="Instagram" /></a></div>
        <div className={styles.circle}><a href="https://x.com/duolingo/status/1896646674053030299" target='_blank'><img src="/src/assets/images/icons/twitter.svg" alt="Twitter" /></a></div>
        <div className={styles.circle}><a href="https://www.youtube.com/watch?v=KgDPUVRPNuc"  target='_blank'><img src="/src/assets/images/icons/youTube.svg" alt="YouTube" /></a></div>
      </div>

      </div>
      
    </footer>
  )
}
