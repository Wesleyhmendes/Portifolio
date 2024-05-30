/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import iphoneRecipeApp from '../../assets/projects/iphone-byte-for-bite.png';
import iphoneCodeNews from '../../assets/projects/iphone_site_noticias.png';
import TFC2 from '../../assets/projects/TFC2.png';
import * as S from './Projects.styles';

function Projects() {
  return (
    <S.ProjectSection>
      <h1>Principais projetos</h1>
      <S.ProjectDiv>
        <div className="img-div">
          <img className="iphone-pic" src={ iphoneRecipeApp } alt="iphone rodando o aplicativo " />
        </div>
        <div>
          <h2>Byte for Bite</h2>
          <div>
            <h4>2023</h4>
            <div className="tags-div">
              <button className="front-end-tag">Front-end</button>
              <button className="react-tag">React</button>
              <button className="ts-tag">TypeScript</button>
              <button className="node-tag">Node.js</button>
            </div>
          </div>
          <p>
            Meu projeto mais completo. Um aplicativo de receitas full stack
            com autenticação de login, cadastro, pesquisa de receitas e
            drinks e tela de perfil.
            Nele o usuário pode favoritar receitas, deixá-las em progresso,
            filtrar por categorias e muito mais.
          </p>
          <a href="https://github.com/Wesleyhmendes/Byte-for-Bite" target="blanket">
            <button className="acessar-projeto">
              Acessar projeto
            </button>
          </a>
        </div>
      </S.ProjectDiv>

      <S.ProjectDiv>
        <div className="img-div">
          <img className="iphone-pic" src={ iphoneCodeNews } alt="iphone rodando o aplicativo " />
        </div>
        <div>
          <h2>Site de notícias</h2>
          <div>
            <h4>2023</h4>
            <div className="tags-div">
              <button className="front-end-tag">Front-end</button>
              <button className="react-tag">React</button>
              <button className="ts-tag">TypeScript</button>
            </div>
          </div>
          <p>
            Uma página que mostra de forma atualizada as últimas notícias
            do site do IBGE. Nesta aplicação podemos ver cards de notícias,
            favoritar e filtrar por data, tipo ou favoritas.
          </p>
          <a href="https://github.com/Wesleyhmendes/CodeNews" target="blanket">
            <button className="acessar-projeto">
              Acessar projeto
            </button>
          </a>
        </div>
      </S.ProjectDiv>

      <S.ProjectDiv>
        <div className="img-div">
          <img className="mac-pic" src={ TFC2 } alt="notebook rodando o aplicativo " />
        </div>
        <div>
          <h2>Football Table</h2>
          <div>
            <h4>2023</h4>
            <div className="tags-div">
              <button className="backend-tag">Back-end</button>
              <button className="node-tag">Node.js</button>
              <button className="ts-tag">TypeScript</button>
            </div>
          </div>
          <p>
            Uma Api com endpoints que mostram a tabela
            em ordem de pontos, vitórias e saldo de gols. Também é possível
            criar partidas, filtrar resultados e fazer login com validação
            de token, email e senha.
          </p>
          <a href="https://github.com/Wesleyhmendes/Football-Table" target="blanket">
            <button className="acessar-projeto">
              Acessar projeto
            </button>
          </a>
        </div>
      </S.ProjectDiv>

      <S.ProjectDiv>
        <div>
          <h2>Blogs Api</h2>
          <div>
            <h4>2023</h4>
            <div className="tags-div">
              <button className="backend-tag">Back-end</button>
              <button className="node-tag">Node.js</button>
              <button className="docker-tag">Docker</button>
            </div>
          </div>
          <p>
            Uma Api com princípios do REST e um banco de dados para produção
            de conteúdo para um blog usando Node.js com Sequelize. É possível fazer login
            com token, além de criar, deletar e editar um post.
          </p>
          <a href="https://github.com/Wesleyhmendes/blogs-api-back-end" target="blanket">
            <button className="acessar-projeto">
              Acessar projeto
            </button>
          </a>
        </div>
      </S.ProjectDiv>
    </S.ProjectSection>
  );
}

export default Projects;
