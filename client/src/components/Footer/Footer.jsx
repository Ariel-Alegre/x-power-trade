import styles from "./Footer.module.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from '../../Logos/logo-2.jpg';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.secciones}>
        <h4>
          ABOUT
          <hr className={styles.hr} />
        </h4>
        <div className={styles.About}>
          <p>
            <a href="/about/about-us/">About Us</a>
          </p>
          <p>
            <a href="/about/why-ezinvest/">Why EZinvest</a>
          </p>
          <p>
            <a href="/about/contact-us/">Contact Us</a>
          </p>
          <p>
            <a href="/about/faq/">Faq</a>
          </p>
        </div>
        <h4>
          TRADING
          <hr className={styles.hr} />
        </h4>
        <div className={styles.Trading}>
          <p>
            <a href="trading/trading-accounts/">Trading Account</a>
          </p>
          <p>
            <a href="trading/professional-traders/">Professional Traders</a>
          </p>
          <p>
            <a href="trading/safety-of-funds/">Safety of Funds</a>
          </p>
          <p>
            <a href="about/faq/">Deposits & Withdrawals</a>
          </p>
        </div>
      </div>
      <div className={`${styles.data} + card`}>
        <label>
          <strong>Address:</strong> 17 Midas Avenue, Olympus, Pretoria, Gauteng
          0081, South Africa
        </label>
        <label>
          <strong>Email:</strong> support@sanusfinancial.com
        </label>
        <label>
          <strong>Phone:</strong> +27 212 047 996
        </label>
        <p>
          <strong>Working hours:</strong> 9 AM – 10 PM
        </p>
      </div>
      <div className={styles.logoAndRedes}>
        <img src={Logo} alt="Not found" />
      
   
      </div>
      <div className={styles.hrLong}></div>
     
      <div className={styles.hrEnd}></div>
      <div className={styles.reserved}>
        <p>All rights reserved ©</p>
        <label>X POWER TRADE</label>
      </div>
    </div>
  );
}
