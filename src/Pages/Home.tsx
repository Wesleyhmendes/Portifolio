import Header from '../Components/Header/Header';
import Languages from '../Components/Languages/Languages';
import WelcomeSection from '../Components/Welcome/WelcomeSection';
import Projects from '../Components/Projects/Projects';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <Languages />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
