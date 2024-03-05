import { DownArrow, ArrowHead } from './ScrollArrow.styles';

function ScrollArrow() {
  const scrollToSection = () => {
    const section = document.getElementById('techSectionId');
    section?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <DownArrow onClick={ scrollToSection } className="down-arrow">
      <ArrowHead />
    </DownArrow>
  );
}

export default ScrollArrow;
