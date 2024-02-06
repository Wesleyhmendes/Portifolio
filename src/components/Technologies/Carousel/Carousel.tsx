import {
  TagButton,
  TagsSlide,
  TagsContainer,
} from './Carousel.styles.tsx';

function Carousel() {
  return (
    <TagsContainer>
      { Array.from({ length: 3 }, (_, i) => (
        <TagsSlide key={ i } className="tags-slide">
          <TagButton>Next.js</TagButton>
          <TagButton>Custom Hooks</TagButton>
          <TagButton>Context Api</TagButton>
          <TagButton>RTL Tests</TagButton>
          <TagButton>Git</TagButton>
          <TagButton>TailWind</TagButton>
          <TagButton>Express</TagButton>
          <TagButton>Arquitetura de Software</TagButton>
          <TagButton>JSON Web Token</TagButton>
          <TagButton>Sequelize</TagButton>
          <TagButton>Api RESTful</TagButton>
          <TagButton>POO</TagButton>
          <TagButton>Testes de integração</TagButton>
          <TagButton>Testes Unitários</TagButton>
        </TagsSlide>
      )) }
    </TagsContainer>
  );
}

export default Carousel;
