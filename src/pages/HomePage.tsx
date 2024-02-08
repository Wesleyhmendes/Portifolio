import HeaderComponent from '../components/Header/Header';
import Presentation from '../components/Presentation/Presentation';
import Technologies from '../components/Technologies/Technologies';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import { Divisor, Divisor2, DivisorFooter } from './HomePage.styles';

function HomePage() {
  return (
    <body>
      <HeaderComponent />
      <Presentation />
      <Divisor />
      <Technologies />
      <Divisor2 />
      <Projects />
      <DivisorFooter />
      <Footer />
    </body>
  );
}

export default HomePage;
