import { useNavigate } from 'react-router-dom';
import {
  Header,
  HomeButton,
} from './Header.styles';
import headerHomeIcon from '../../assets/header/home head icon.png';

function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <Header>
      <HomeButton onClick={ () => navigate('/') }>
        <img src={ headerHomeIcon } alt="home icon" />
      </HomeButton>
      <div>
        <a href="https://github.com/Wesleyhmendes" target="blanket">Projetos</a>
        <button className="contact-btn" onClick={ () => navigate('/contact') }>
          Contato
        </button>
        <a href="https://www.linkedin.com/in/wesley-mendes/" target="blanket">Linkedin</a>
      </div>
    </Header>
  );
}

export default HeaderComponent;
