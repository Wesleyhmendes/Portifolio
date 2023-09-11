/* eslint-disable react/jsx-max-depth */
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import './contact.css';

function Contact() {
  return (
    <section className="contactBody">
      <Header />
      <div className="contactMainSection">
        <h2 className="contactTitle">
          Entre em contato comigo. Responderei assim que puder.
        </h2>
        <ul>
          <li className="contactList">
            <a
              className="contactPageLink"
              href="https://wa.me/5524992521732"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="contactPageImg"
                src="src/assets/whatsapp.svg"
                alt="whatsapp"
              />
              <p>Whatsapp</p>
            </a>
          </li>
          <li className="contactList">
            <a
              className="contactPageLink"
              href="mailto:wesleymendes123321@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="contactPageImg"
                src="src/assets/gmail.svg"
                alt="email"
              />
              <p>Email</p>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
