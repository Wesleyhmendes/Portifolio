import facebookIcon from '../../assets/facebookIcon.svg';
import instagramIcon from '../../assets/instagramIcon.svg';
import linkedinIcon from '../../assets/Linkedin.svg';
import twitterIcon from '../../assets/twitterIcon.svg';
import './footer.css';

function Footer() {
  return (
    <div className="footerDiv">
      <div className="socialIcons">
        <img className="socialIcon" src={ facebookIcon } alt="" />
        <img className="socialIcon" src={ instagramIcon } alt="" />
        <img className="socialIcon" src={ linkedinIcon } alt="" />
        <img className="socialIcon" src={ twitterIcon } alt="" />
      </div>
      <p className="copyrightP">Copyright ©2023 All rights reserved</p>
    </div>
  );
}

export default Footer;
