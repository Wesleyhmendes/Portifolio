import iphoneRecipeApp from '../../assets/projects/iphone-byte-for-bite.png';
import iphoneCodeNews from '../../assets/projects/iphone_site_noticias.png';
import TFC2 from '../../assets/projects/TFC2.png';
import * as S from './Projects.styles';

function Projects() {
  return (
    <S.ProjectSection>
      <S.ProjectH1>Principais projetos</S.ProjectH1>
      <S.ProjectDiv>
        <S.ProjectImg src={ iphoneRecipeApp } alt="iphone rodando o aplicativo " />
        <S.ProjectDescriptionDiv>
          <S.ProjectH2>Byte for Bite</S.ProjectH2>
          <S.ProjectTagDiv>
            <S.ProjectH4>2023</S.ProjectH4>
            <S.ProjectTagsFront>Front-end</S.ProjectTagsFront>
            <S.ProjectTagsReact>React</S.ProjectTagsReact>
            <S.ProjectTagsTs>TypeScript</S.ProjectTagsTs>
            <S.ProjectTagsNode>Node.js</S.ProjectTagsNode>
          </S.ProjectTagDiv>
          <S.ProjectP>
            Meu projeto mais completo. Um aplicativo de receitas full stack
            com autenticação de login, cadastro, pesquisa de receitas e
            drinks e tela de perfil.
            Nele o usuário pode favoritar receitas, deixá-las em progresso,
            filtrar por categorias e muito mais.
          </S.ProjectP>
          <S.ProjectLink href="https://github.com/Wesleyhmendes/Byte-for-Bite" target="blanket">
            <S.ProjectAccessBtn>
              Acessar projeto
            </S.ProjectAccessBtn>
          </S.ProjectLink>
        </S.ProjectDescriptionDiv>
      </S.ProjectDiv>

      <S.ProjectDiv>
        <S.ProjectDescriptionDiv>
          <S.ProjectH2>Site de notícias</S.ProjectH2>
          <S.ProjectTagDiv>
            <S.ProjectH4>2023</S.ProjectH4>
            <S.ProjectTagsFront>Front-end</S.ProjectTagsFront>
            <S.ProjectTagsReact>React</S.ProjectTagsReact>
            <S.ProjectTagsTs>TypeScript</S.ProjectTagsTs>
          </S.ProjectTagDiv>
          <S.ProjectP>
            Uma página que mostra de forma atualizada as últimas notícias
            do site do IBGE. Nesta aplicação podemos ver cards de notícias,
            favoritar e filtrar por data, tipo ou favoritas.
          </S.ProjectP>
          <S.ProjectLink href="https://github.com/Wesleyhmendes/CodeNews" target="blanket">
            <S.ProjectAccessBtn>
              Acessar projeto
            </S.ProjectAccessBtn>
          </S.ProjectLink>
        </S.ProjectDescriptionDiv>
        <S.ProjectImg src={ iphoneCodeNews } alt="iphone rodando o aplicativo " />
      </S.ProjectDiv>

      <S.ProjectDiv>
        <S.ProjectDescriptionDiv>
          <S.ProjectH2>Football Table</S.ProjectH2>
          <S.ProjectTagDiv>
            <S.ProjectH4>2023</S.ProjectH4>
            <S.ProjectTagsBack>Back-end</S.ProjectTagsBack>
            <S.ProjectTagsNode>Node.js</S.ProjectTagsNode>
            <S.ProjectTagsTs>TypeScript</S.ProjectTagsTs>
          </S.ProjectTagDiv>
          <S.ProjectP>
            Uma Api com endpoints que mostram a tabela
            em ordem de pontos, vitórias e saldo de gols. Também é possível
            criar partidas, filtrar resultados e fazer login com validação
            de token, email e senha.
          </S.ProjectP>
          <S.ProjectLink href="https://github.com/Wesleyhmendes/Football-Table" target="blanket">
            <S.ProjectAccessBtn>
              Acessar projeto
            </S.ProjectAccessBtn>
          </S.ProjectLink>
        </S.ProjectDescriptionDiv>
        <S.ProjectImgDesktop src={ TFC2 } alt="notebook rodando o aplicativo " />
      </S.ProjectDiv>

      <S.ProjectDiv>
        <S.ProjectDescriptionDiv>
          <S.ProjectH2>Blogs Api</S.ProjectH2>
          <S.ProjectTagDiv>
            <S.ProjectH4>2023</S.ProjectH4>
            <S.ProjectTagsBack>Back-end</S.ProjectTagsBack>
            <S.ProjectTagsNode>Node.js</S.ProjectTagsNode>
            <S.ProjectTagsDocker>Docker</S.ProjectTagsDocker>
          </S.ProjectTagDiv>
          <S.ProjectP>
            Uma Api com princípios do REST e um banco de dados para produção
            de conteúdo para um blog usando Node.js com Sequelize. É possível fazer login
            com token, além de criar, deletar e editar um post.
          </S.ProjectP>
          <S.ProjectLink href="https://github.com/Wesleyhmendes/blogs-api-back-end" target="blanket">
            <S.ProjectAccessBtn>
              Acessar projeto
            </S.ProjectAccessBtn>
          </S.ProjectLink>
        </S.ProjectDescriptionDiv>
      </S.ProjectDiv>
    </S.ProjectSection>
  );
}

export default Projects;
