import profilePicture from '../../assets/presentation/profile-pic.png';
import cv from '../../assets/CV/Currículo_Wesley_fullstack.pdf';
import {
  PresentationDiv,
  PresentationSection,
  PresentationButtonDiv,
  PresentationPictureDiv,
} from './Presentation.styles';

function Presentation() {
  return (
    <PresentationSection>
      <PresentationPictureDiv>
        <img
          src={ profilePicture }
          alt="Foto de perfil"
        />
      </PresentationPictureDiv>
      <div className="textBtn">
        <PresentationDiv>
          <h2>Olá, eu sou o Wesley</h2>
          <h1>Desenvolvedor Web Full Stack</h1>
          <p>
            Trabalho com front-end como voluntário e possuo diversos
            projetos individuais e em equipe com uso de React e TypeScript
            com testes RTL com design responsivo. Além disso, também tenho
            experiência com diversos projetos em back-end com uso do Node.js
            com Sequelize, TypeScript e testes unitários e de integração.
          </p>
        </PresentationDiv>
        <PresentationButtonDiv>
          <a href={ cv } download>
            <button>
              Baixar Currículo
            </button>
          </a>
        </PresentationButtonDiv>
      </div>
    </PresentationSection>
  );
}

export default Presentation;
