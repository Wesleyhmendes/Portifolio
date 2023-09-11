/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import './projects.css';

function Projects() {
  return (
    <>
      <h2 className="projectsTitle">Principais projetos</h2>
      <section className="projectsMainSec">
        <div className="pinnedProject">
          <Link className="pinnedProjectLink" to="/projects/trybe-tunes">
            <img
              className="pinnedProjectImg"
              src="src/assets/trybe-tunes.png"
              alt="trybe tunes"
            />
          </Link>
          <div className="pinnedProjectTextDiv">
            <Link className="pinnedProjectLink" to="/projects/trybe-tunes">
              <h3 className="projectTitle">Trybe Tunes</h3>
            </Link>
            <div className="pinnedProjectYearLanguage">
              <button className="pinnedProjectYear" disabled>2023</button>
              <p className="pinnedProjectLang">React</p>
              <p className="pinnedProjectLang">TypeScript</p>
              <p className="pinnedProjectLang">JavaScript</p>
            </div>
            <p className="pinnedProjectDescription">
              Descrição do projeto: Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="pinnedProject">
          <Link className="pinnedProjectLink" to="/projects/code-store">
            <img
              className="pinnedProjectImg"
              src="src/assets/online-store.png"
              alt="online store"
            />
          </Link>
          <div className="pinnedProjectTextDiv">
            <Link className="pinnedProjectLink" to="/projects/code-store">
              <h3 className="projectTitle">Code Store</h3>
            </Link>
            <div className="pinnedProjectYearLanguage">
              <button className="pinnedProjectYear" disabled>2023</button>
              <p className="pinnedProjectLang">React</p>
              <p className="pinnedProjectLang">TypeScript</p>
              <p className="pinnedProjectLang">JavaScript</p>
            </div>
            <p className="pinnedProjectDescription">
              Descrição do projeto: Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="pinnedProject">
          <Link className="pinnedProjectLink" to="/projects/trybe-wallet">
            <img
              className="pinnedProjectImg"
              src="src/assets/trybe-wallet.png"
              alt="trybe wallet"
            />
          </Link>
          <div className="pinnedProjectTextDiv">
            <Link className="pinnedProjectLink" to="/projects/trybe-wallet">
              <h3 className="projectTitle">Trybe Wallet</h3>
            </Link>
            <div className="pinnedProjectYearLanguage">
              <button className="pinnedProjectYear" disabled>2023</button>
              <p className="pinnedProjectLang">React</p>
              <p className="pinnedProjectLang">TypeScript</p>
              <p className="pinnedProjectLang">JavaScript</p>
            </div>
            <p className="pinnedProjectDescription">
              Descrição do projeto: Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
