import './languages.css';

function Languages() {
  return (
    <section className="langMainSection">
      <h2 className="langH2">Linguagens e tecnologias</h2>
      <div className="languagesIconsText">
        <div className="languagesIconsCard">
          <img
            className="langIcon htmlIcon"
            src="src/assets/html.png"
            alt="html"
          />
          <img
            className="langIcon cssIcon"
            src="src/assets/css3.png"
            alt="css3"
          />
          <img
            className="langIcon jsIcon"
            src="src/assets/Javascript.png"
            alt="JavaScript"
          />
          <img
            className="langIcon tsIcon"
            src="src/assets/typescript.png"
            alt="typeScript"
          />
          <img
            className="langIcon reactIcon"
            src="src/assets/react.png"
            alt="react"
          />
          <img
            className="langIcon reactIcon"
            src="src/assets/redux.png"
            alt="redux"
          />
          <img
            className="langIcon gitIcon"
            src="src/assets/Git.png"
            alt="Git"
          />
          <img
            className="langIcon jestIcon"
            src="src/assets/jest.png"
            alt="jest"
          />
          <img
            className="langIcon linuxIcon"
            src="src/assets/linux.png"
            alt="linux"
          />
          <img
            className="langIcon githubIcon"
            src="src/assets/github.png"
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
