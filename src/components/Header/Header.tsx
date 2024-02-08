import { useNavigate } from 'react-router-dom';
import {
  Header,
  HeaderDiv,
  HeaderDivH3,
  HeaderDivImg,
  HomeButton,
} from './Header.styles';
import headerHomeIcon from '../../assets/header/home head icon.png';

function HeaderComponent() {
  const navigate = useNavigate();
  return (
    <Header>
      <HomeButton onClick={ () => navigate('/') }>
        <HeaderDivImg src={ headerHomeIcon } alt="home icon" />
      </HomeButton>
      <HeaderDiv>
        <HeaderDivH3 href="https://github.com/Wesleyhmendes" target="blanket">Projetos</HeaderDivH3>
        <HeaderDivH3 onClick={ () => navigate('/contact') }>Contato</HeaderDivH3>
        <HeaderDivH3 href="https://www.linkedin.com/in/wesley-mendes/" target="blanket">Linkedin</HeaderDivH3>
      </HeaderDiv>
    </Header>
  );
}

export default HeaderComponent;
