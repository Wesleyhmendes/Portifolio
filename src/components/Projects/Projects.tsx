import iphoneRecipeApp from '../../assets/projects/iphone_app_receitas.png';
import iphoneCodeNews from '../../assets/projects/iphone_site_noticias.png';
import {
  ProjectH1,
  ProjectH2,
  ProjectH4,
  ProjectImg,
  ProjectP,
  ProjectSection,
  ProjectDescriptionDiv,
  ProjectTagDiv,
  ProjectTagsReact,
  ProjectTagsTs,
  ProjectDiv,
  ProjectLink,
} from './Projects.styles';

function Projects() {
  return (
    <ProjectSection>
      <ProjectH1>Principais projetos</ProjectH1>
      <ProjectDiv>
        <ProjectImg src={ iphoneRecipeApp } alt="iphone rodando o aplicativo " />
        <ProjectDescriptionDiv>
          <ProjectLink href="https://github.com/Wesleyhmendes/RecipesApp">
            <ProjectH2>App de receitas</ProjectH2>
          </ProjectLink>
          <ProjectTagDiv>
            <ProjectH4>2023</ProjectH4>
            <ProjectTagsReact>React</ProjectTagsReact>
            <ProjectTagsTs>TypeScript</ProjectTagsTs>
          </ProjectTagDiv>
          <ProjectP>
            Um app de receitas com funcionalidade de login, pesquisa de receitas
            e bebidas, favoritar receita, acompanhar o progresso das receitas
            e perfil com dados do usuário.
          </ProjectP>
        </ProjectDescriptionDiv>
      </ProjectDiv>

      <ProjectDiv>
        <ProjectImg src={ iphoneCodeNews } alt="iphone rodando o aplicativo " />
        <ProjectDescriptionDiv>
          <ProjectLink href="https://github.com/Wesleyhmendes/CodeNews">
            <ProjectH2>Site de notícias</ProjectH2>
          </ProjectLink>
          <ProjectTagDiv>
            <ProjectH4>2023</ProjectH4>
            <ProjectTagsReact>React</ProjectTagsReact>
            <ProjectTagsTs>TypeScript</ProjectTagsTs>
          </ProjectTagDiv>
          <ProjectP>
            Uma página que mostra de forma atualizada as últimas notícias
            do site do IBGE. Nesta aplicação podemos ver cards de notícias,
            favoritar e filtrar por data, tipo ou favoritas.
          </ProjectP>
        </ProjectDescriptionDiv>
      </ProjectDiv>
    </ProjectSection>
  );
}

export default Projects;
