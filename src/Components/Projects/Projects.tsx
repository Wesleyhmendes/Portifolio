/* eslint-disable react/jsx-max-depth */
import { Link } from 'react-router-dom';
import trybeTunes from '../../assets/trybe-tunes.png';
import trybeWallet from '../../assets/trybe-wallet.png';
import codeStore from '../../assets/onlineStore-2.png';
import './projects.css';

function Projects() {
  return (
    <>
      <h2 className="projectsTitle">Principais projetos</h2>
      <section className="projectsMainSec">
        <div className="pinnedProject">
          <Link className="pinnedProjectLink" to="/trybe-tunes">
            <img
              className="pinnedProjectImg"
              src={ trybeTunes }
              alt="trybe tunes"
            />
          </Link>
          <div className="pinnedProjectTextDiv">
            <Link className="pinnedProjectLink" to="/trybe-tunes">
              <h3 className="projectTitle">Trybe Tunes</h3>
            </Link>
            <div className="pinnedProjectYearLanguage">
              <button className="pinnedProjectYear" disabled>2023</button>
              <p className="pinnedProjectLang">React</p>
              <p className="pinnedProjectLang">TypeScript</p>
              <p className="pinnedProjectLang">JavaScript</p>
              <p className="pinnedProjectLang">Redux</p>
            </div>
            <p className="pinnedProjectDescription">
              Descrição do projeto: Neste projeto, eu criei o TrybeTunes,
              uma aplicação capaz de reproduzir músicas dos mais variados artistas
              e bandas, criar uma lista de músicas favoritas e editar o perfil da
              pessoa usuária logada.
            </p>
          </div>
        </div>
        <div className="pinnedProject">
          <Link className="pinnedProjectLink" to="/code-store">
            <img
              className="pinnedProjectImg"
              src={ codeStore }
              alt="online store"
            />
          </Link>
          <div className="pinnedProjectTextDiv">
            <Link className="pinnedProjectLink" to="/code-store">
              <h3 className="projectTitle">Code Store</h3>
            </Link>
            <div className="pinnedProjectYearLanguage">
              <button className="pinnedProjectYear" disabled>2023</button>
              <p className="pinnedProjectLang">React</p>
              <p className="pinnedProjectLang">TypeScript</p>
              <p className="pinnedProjectLang">JavaScript</p>
              <p className="pinnedProjectLang">Redux</p>
            </div>
            <p className="pinnedProjectDescription">
              Descrição do projeto: Neste projeto, nós criamos uma versão simplificada,
              sem persistência no banco de dados, de uma loja online, desenvolvendo
              em grupo as funcionalidades dela de acordo com demandas definidas em
              um quadro Kanban, em um cenário próximo ao do mercado de trabalho.
            </p>
          </div>
        </div>
        <div className="pinnedProject">
          <Link className="pinnedProjectLink" to="/trybe-wallet">
            <img
              className="pinnedProjectImg"
              src={ trybeWallet }
              alt="trybe wallet"
            />
          </Link>
          <div className="pinnedProjectTextDiv">
            <Link className="pinnedProjectLink" to="/trybe-wallet">
              <h3 className="projectTitle">Trybe Wallet</h3>
            </Link>
            <div className="pinnedProjectYearLanguage">
              <button className="pinnedProjectYear" disabled>2023</button>
              <p className="pinnedProjectLang">React</p>
              <p className="pinnedProjectLang">TypeScript</p>
              <p className="pinnedProjectLang">JavaScript</p>
              <p className="pinnedProjectLang">Redux</p>
            </div>
            <p className="pinnedProjectDescription">
              Descrição do projeto: Neste projeto, eu criei o Trybe Wallet,
              uma carteira de controle de gastos e despesas que possui um
              conversor de moedas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
