import iphoneRecipeApp from '../../assets/projects/iphone_app_receitas.png';
import iphoneCodeNews from '../../assets/projects/iphone_site_noticias.png';
import TFC2 from '../../assets/projects/TFC2.png';
import wallet from '../../assets/projects/wallet.png';
import {
  ProjectH1,
  ProjectH2,
  ProjectH4,
  ProjectImg,
  ProjectImgDesktop,
  ProjectP,
  ProjectSection,
  ProjectDescriptionDiv,
  ProjectTagDiv,
  ProjectTagsReact,
  ProjectTagsTs,
  ProjectTagsNode,
  ProjectTagsFront,
  ProjectTagsBack,
  ProjectTagsDocker,
  ProjectDiv,
  ProjectLink,
  ProjectAccessBtn,
} from './Projects.styles';

function Projects() {
  return (
    <ProjectSection>
      <ProjectH1>Principais projetos</ProjectH1>
      <ProjectDiv>
        <ProjectImg src={ iphoneRecipeApp } alt="iphone rodando o aplicativo " />
        <ProjectDescriptionDiv>
          <ProjectH2>App de receitas</ProjectH2>
          <ProjectTagDiv>
            <ProjectH4>2023</ProjectH4>
            <ProjectTagsFront>Front-end</ProjectTagsFront>
            <ProjectTagsReact>React</ProjectTagsReact>
            <ProjectTagsTs>TypeScript</ProjectTagsTs>
          </ProjectTagDiv>
          <ProjectP>
            Um app de receitas com funcionalidade de login, pesquisa de receitas
            e bebidas, favoritar receita, acompanhar o progresso das receitas
            e perfil com dados do usuário.
          </ProjectP>
          <ProjectLink href="https://github.com/Wesleyhmendes/RecipesApp" target="blanket">
            <ProjectAccessBtn>
              Acessar projeto
            </ProjectAccessBtn>
          </ProjectLink>
        </ProjectDescriptionDiv>
      </ProjectDiv>

      <ProjectDiv>
        <ProjectDescriptionDiv>
          <ProjectH2>Football Table</ProjectH2>
          <ProjectTagDiv>
            <ProjectH4>2023</ProjectH4>
            <ProjectTagsBack>Back-end</ProjectTagsBack>
            <ProjectTagsNode>Node.js</ProjectTagsNode>
            <ProjectTagsTs>TypeScript</ProjectTagsTs>
          </ProjectTagDiv>
          <ProjectP>
            Uma Api com endpoints que mostram a tabela
            em ordem de pontos, vitórias e saldo de gols. Também é possível
            criar partidas, filtrar resultados e fazer login com validação
            de token, email e senha.
          </ProjectP>
          <ProjectLink href="https://github.com/Wesleyhmendes/Football-Table" target="blanket">
            <ProjectAccessBtn>
              Acessar projeto
            </ProjectAccessBtn>
          </ProjectLink>
        </ProjectDescriptionDiv>
        <ProjectImgDesktop src={ TFC2 } alt="notebook rodando o aplicativo " />
      </ProjectDiv>

      <ProjectDiv>
        <ProjectImg src={ iphoneCodeNews } alt="iphone rodando o aplicativo " />
        <ProjectDescriptionDiv>
          <ProjectH2>Site de notícias</ProjectH2>
          <ProjectTagDiv>
            <ProjectH4>2023</ProjectH4>
            <ProjectTagsFront>Front-end</ProjectTagsFront>
            <ProjectTagsReact>React</ProjectTagsReact>
            <ProjectTagsTs>TypeScript</ProjectTagsTs>
          </ProjectTagDiv>
          <ProjectP>
            Uma página que mostra de forma atualizada as últimas notícias
            do site do IBGE. Nesta aplicação podemos ver cards de notícias,
            favoritar e filtrar por data, tipo ou favoritas.
          </ProjectP>
          <ProjectLink href="https://github.com/Wesleyhmendes/CodeNews" target="blanket">
            <ProjectAccessBtn>
              Acessar projeto
            </ProjectAccessBtn>
          </ProjectLink>
        </ProjectDescriptionDiv>
      </ProjectDiv>

      <ProjectDiv>
        <ProjectDescriptionDiv>
          <ProjectH2>Blogs Api</ProjectH2>
          <ProjectTagDiv>
            <ProjectH4>2023</ProjectH4>
            <ProjectTagsBack>Back-end</ProjectTagsBack>
            <ProjectTagsNode>Node.js</ProjectTagsNode>
            <ProjectTagsDocker>Docker</ProjectTagsDocker>
          </ProjectTagDiv>
          <ProjectP>
            Uma Api com princípios do REST e um banco de dados para produção
            de conteúdo para um blog usando Node.js com Sequelize. É possível fazer login
            com token, além de criar, deletar e editar um post.
          </ProjectP>
          <ProjectLink href="https://github.com/Wesleyhmendes/blogs-api-back-end" target="blanket">
            <ProjectAccessBtn>
              Acessar projeto
            </ProjectAccessBtn>
          </ProjectLink>
        </ProjectDescriptionDiv>
      </ProjectDiv>

      <ProjectDiv>
        <ProjectDescriptionDiv>
          <ProjectH2>Wallet App</ProjectH2>
          <ProjectTagDiv>
            <ProjectH4>2023</ProjectH4>
            <ProjectTagsFront>Front-end</ProjectTagsFront>
            <ProjectTagsReact>React</ProjectTagsReact>
            <ProjectTagsTs>Redux</ProjectTagsTs>
          </ProjectTagDiv>
          <ProjectP>
            Uma aplicação que faz o controle de gastas com conversor de moedas. É
            possível adicionar, remover ou editar um gasto, além de visualizar a
            tabela de gastos e o total de gastos convertidos para qualquer moeda.
          </ProjectP>
          <ProjectLink href="https://github.com/Wesleyhmendes/Wallet" target="blanket">
            <ProjectAccessBtn>
              Acessar projeto
            </ProjectAccessBtn>
          </ProjectLink>
        </ProjectDescriptionDiv>
        <ProjectImg src={ wallet } alt="notebook rodando o aplicativo " />
      </ProjectDiv>
    </ProjectSection>
  );
}

export default Projects;
