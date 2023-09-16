/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import Header from '../../Components/Header/Header';
import './ProjecPage.css';

function CodeStore() {
  return (
    <>
      <Header />
      <section className="projectPageMainSection">
        <h1 className="ProjecTitle"></h1>
        <div className="projectTagDiv">
          <button className="pinnedProjectYear" disabled>2023</button>
          <div className="pinnedProjectYearLanguage">
            <p className="pinnedProjectLang">React</p>
            <p className="pinnedProjectLang">TypeScript</p>
            <p className="pinnedProjectLang">JavaScript</p>
            <p className="pinnedProjectLang">Redux</p>
          </div>
        </div>

        <p className="projectResume"></p>
        <div className="imgDiv">
          <img className="projectImg" src={ loginPage } alt="tela de login" />
          <img className="projectImg" src={ searchPage } alt="tela de pesquisa" />
        </div>

        <h3 className="projectH3">Essa aplicação será capaz de:</h3>

        <ul className="ulList">
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
        </ul>
        <h3 className="projectH3"></h3>
        <ul className="ulList">
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
          <li className="projectList"></li>
        </ul>
        <p className="projectResume">
          <b></b>
        </p>

        <div className="videoDiv">
          <video className="projectVideo" width="860" height="520" controls>
            <source src={ trybeTunesVideo } type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

        <h2 className="projectH2">Requisitos</h2>
        <ul className="ulList">
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
          <li className="projectList">-</li>
        </ul>

        <p className="projectResume"><b></b></p>

        <h2 className="projectH2"></h2>
        <p className="projectResume"></p>
      </section>
    </>
  );
}

export default CodeStore;
