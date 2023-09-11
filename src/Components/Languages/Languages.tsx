import './languages.css';
import html from '../../assets/html.png';
import css3 from '../../assets/css3.png';
import Javascript from '../../assets/Javascript.png';
import typescript from '../../assets/typescript.png';
import react from '../../assets/react.png';
import redux from '../../assets/redux.png';
import Git from '../../assets/Git.png';
import jest from '../../assets/jest.png';
import linux from '../../assets/linux.png';
import github from '../../assets/github.png';

function Languages() {
  return (
    <section className="langMainSection">
      <h2 className="langH2">Linguagens e tecnologias</h2>
      <div className="languagesIconsText">
        <div className="languagesIconsCard">
          <img
            className="langIcon htmlIcon"
            src={ html }
            alt="html"
          />
          <img
            className="langIcon cssIcon"
            src={ css3 }
            alt="css3"
          />
          <img
            className="langIcon jsIcon"
            src={ Javascript }
            alt="JavaScript"
          />
          <img
            className="langIcon tsIcon"
            src={ typescript }
            alt="typeScript"
          />
          <img
            className="langIcon reactIcon"
            src={ react }
            alt="react"
          />
          <img
            className="langIcon reduxIcon"
            src={ redux }
            alt="redux"
          />
          <img
            className="langIcon gitIcon"
            src={ Git }
            alt="Git"
          />
          <img
            className="langIcon jestIcon"
            src={ jest }
            alt="jest"
          />
          <img
            className="langIcon linuxIcon"
            src={ linux }
            alt="linux"
          />
          <img
            className="langIcon githubIcon"
            src={ github }
            alt="github"
          />
        </div>
        <p className="langP">
          Tenho experiência nas diversas linguagens  e tecnologias acima,
          adquirida por meio de projetos, tanto em colaboração com equipes
          quanto individuais seguindo requisitos estruturados. Todos eles estão
          disponíveis no meu
          { ' ' }
          <a className="langPLink" href="https://github.com/Wesleyhmendes">GitHub</a>
          .
        </p>
      </div>
    </section>
  );
}

export default Languages;
