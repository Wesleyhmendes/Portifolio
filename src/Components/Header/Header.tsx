import { Link } from 'react-router-dom';
import homeIcon from '../../assets/home.svg';
import './header.css';

function Header() {
  return (
    <section className="headerMainSection">
      <Link to="/">
        <img
          className="homeIcon"
          src={ homeIcon }
          alt="Página inicial"
        />
      </Link>
      <div className="headerDiv">
        <a className="link" href="https://github.com/Wesleyhmendes">
          <h2 className="projectsLink">Projetos</h2>
        </a>
        <Link className="link" to="/contact">
          <h2 className="contactLink">Contato</h2>
        </Link>
        <a
          className="link"
          href="https://www.linkedin.com/in/wesley-mendes/"
        >
          <h2 className="linkedinLink">Linkedin</h2>
        </a>
      </div>
    </section>
  );
}

export default Header;
