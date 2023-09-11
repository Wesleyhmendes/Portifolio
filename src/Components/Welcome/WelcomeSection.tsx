import profilePicture from '../../assets/profilePicture.png';
import curriculum from '../../CV/Wesley-Mendes-Profile.pdf';
import './welcome.css';

function WelcomeSection() {
  return (
    <section className="welcomeSection">
      <div className="welcomeText">
        <h1 className="presentationH1">
          Olá, eu sou Wesley,
          desenvolvedor Front End
        </h1>
        <p className="presentationP">
          Apaixonado por tecnologia e por ideias que transformam o mundo.
          Meu objetivo é fazer a diferença na vida das pessoas através dos códigos.
          Caso tenha interesse, abaixo você pode baixar meu currículo.
        </p>
        <a
          href={ curriculum }
          download="Wesley-Mendes-Profile"
          target="_blank"
          rel="noreferrer"
        >
          <button className="downloadCVButton">Baixar currículo</button>
        </a>
      </div>
      <img className="profilePic" src={ profilePicture } alt="foto de perfil" />
    </section>
  );
}

export default WelcomeSection;
