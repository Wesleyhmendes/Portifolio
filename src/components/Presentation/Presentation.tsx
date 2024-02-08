/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import wesley from '../../assets/presentation/foto-perfil-amarela.png';
import cv from '../../assets/CV/Wesley-CV-2024.pdf';
import {
  PresentationPicture,
  PresentationDiv,
  PresentationDivH2,
  PresentationDivH1,
  PresentationDivP,
  PresentationSection,
  PresentationCVButton,
  PresentationButtonDiv,
  PresentationPictureDiv,
} from './Presentation.styles';
import ScrollArrow from './ScrollArrow/ScrollArrow';

function Presentation() {
  return (
    <PresentationSection>
      <PresentationPictureDiv>
        <PresentationPicture
          src={ wesley }
          alt="Foto de perfil"
        />
      </PresentationPictureDiv>
      <PresentationDiv>
        <PresentationDivH2>Olá, eu sou o Wesley</PresentationDivH2>
        <PresentationDivH1>Desenvolvedor Web</PresentationDivH1>
        <PresentationDivP>
          Trabalho com front-end como voluntário e possuo diversos
          projetos individuais e em equipe com uso de React e TypeScript
          com testes RTL com design responsivo. Além disso, também tenho
          experiência com diversos projetos em back-end com uso do Node.js
          com Sequelize, TypeScript e testes unitários e de integração.
        </PresentationDivP>
      </PresentationDiv>
      <PresentationButtonDiv>
        <a href={ cv } download>
          <PresentationCVButton>
            Baixar Currículo
          </PresentationCVButton>
        </a>
      </PresentationButtonDiv>
      <ScrollArrow />
    </PresentationSection>
  );
}

export default Presentation;
