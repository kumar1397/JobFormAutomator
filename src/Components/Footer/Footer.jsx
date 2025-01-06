import React from 'react';
import logo from '../image/logo.svg';
// import telegram from './image/telegram.svg';
import instagram from '../image/instagram.svg';
import linkedin from '../image/linkedin.svg';
import youtube from '../image/youtube.svg';
import '../../App.css';
import facebook from "../image/facebook.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="newsletter">
          <img src={logo} alt="JobForm Automator Logo" className="footer-logo" />
          <h3>Email</h3>
          <p>contact@jobformautoator.com</p>
          <h3>Whatsapp</h3>
          <p>+91 9766116839</p>
          <h3>Address</h3>
          <p>Flat No.116, Sairpark Building, AP Alephata, Maharashtra 412411</p>
        
        </div>
        <div className="footer-links">
          <p>&copy; 2022 Aiking Software Solutions Pvt Ltd</p>
        </div>
        <div className="social-icons">
          {/* <a href="https://t.me/JobformAutomator"  target="_blank" rel="noreferrer"><img src={telegram} alt="Telegram"   /></a> */}
          <a href="https://www.instagram.com/jobtipsofficial?igsh=MWk4MDdsNjFreDE4dg=="  target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram" /></a>
          <a href="https://www.facebook.com/profile.php?id=61556365446390" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook"/></a>
          <a href="https://www.linkedin.com/showcase/jobform-automator/?viewAsMember=true"  target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
          <a href="https://www.youtube.com/@JobFormAutomator"  target="_blank" rel="noreferrer"><img src={youtube} alt="YouTube" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
