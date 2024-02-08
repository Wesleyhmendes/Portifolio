/* eslint-disable react/jsx-max-depth */
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import email from '../assets/contact/email.png';
import whastapp from '../assets/contact/whastapp.png';
import {
  ContactBody,
  H1Div,
  H1,
  BodySection,
  ContactDiv,
  ContactImg,
  ContactH3,
  ContactP,
  Span,
} from './Contact.styles';

function Contact() {
  return (
    <>
      <Header />
      <ContactBody>
        <H1Div>
          <H1>Como você prefere falar comigo?</H1>
        </H1Div>
        <BodySection>
          <ContactDiv>
            <ContactImg src={ email } alt="ícone de email" />
            <ContactH3>E-mail</ContactH3>
            <ContactP>wesleymendes123321@gmail.com</ContactP>
          </ContactDiv>
          <ContactDiv>
            <ContactImg src={ whastapp } alt="ícone do whatsapp" />
            <ContactH3>Whatsapp</ContactH3>

            <ContactP>
              Fale diretamente comigo por
              { ' ' }
              <a href="https://wa.me/+55992521732" target="blanket">
                <Span>aqui</Span>
              </a>
            </ContactP>
            <ContactP>(24) 99252-1732</ContactP>
          </ContactDiv>
        </BodySection>
        <Footer />
      </ContactBody>
    </>
  );
}

export default Contact;
