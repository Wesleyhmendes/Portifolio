import github from '../../assets/footer/github-icon.svg';
import linkedin from '../../assets/footer/linkedin-icon.png';
import {
  FooterSC,
  FooterDiv,
  FooterP,
  SocialImg,
} from './Footer.styles';

function Footer() {
  return (
    <FooterSC>
      <FooterDiv>
        <a href="https://www.linkedin.com/in/wesley-mendes/" target="blanket">
          <SocialImg src={ linkedin } alt="ícone do linkedin" />
        </a>
        <a href="https://github.com/Wesleyhmendes" target="blanket">
          <SocialImg src={ github } alt="ícone do github" />
        </a>
      </FooterDiv>
      <FooterP>Copyright © 2024 All rights reserved</FooterP>
    </FooterSC>
  );
}

export default Footer;
