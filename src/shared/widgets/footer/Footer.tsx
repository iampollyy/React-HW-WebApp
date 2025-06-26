import React from "react";
import styles from "./footer.module.scss";

import navLinksFooter from "@config/navLinksFooter";
import  SocialMedia  from '@ui/socialMedia/SocialMedia';
import Logo from '@images/logo/logo.svg';
import { FooterLinksColumn }  from './footerLinksColumn/FooterLinksColumn';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>

        <div className={styles.logo__motto}>
          <a href="#"><img src={Logo} alt="logo" className={styles.logo} /></a>
          <p className={styles.motto}>Takeaway & Delivery template for small - medium businesses.</p>
        </div>

        <div className={styles.content}>
          <FooterLinksColumn title="Company" links={navLinksFooter.company} />
          <FooterLinksColumn title="Template" links={navLinksFooter.template} />
          <FooterLinksColumn title="Flowbase" links={navLinksFooter.flowbase} />
        </div>

      </div>
    
      <div className={styles.hr}></div>

      <div className={styles.footer__bottom}>
        <p className={styles.footer__bottom__text}>
          Built by <span><a href="https://www.flowbase.co/" target='_blank' id={styles.span_a}>Flowbase</a></span> · 
          Powered by <span><a target='_blank' href="https://webflow.com/" id={styles.span_a}>Webflow</a></span>
        </p>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;