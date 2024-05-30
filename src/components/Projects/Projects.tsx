/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import iphoneRecipeApp from '../../assets/projects/iphone-byte-for-bite.png';
import iphoneCodeNews from '../../assets/projects/iphone_site_noticias.png';
import igoTicket from '../../assets/projects/igoTitcket.png';
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
            <h4>2024</h4>
            <div className="tags-div">
              <button className="fullstack-tag">Full Stack</button>
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
            <h4>2024</h4>
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
        <div className="img-div">
          <img className="iphone-pic" src={ igoTicket } alt="iphone rodando o site " />
        </div>
        <div>
          <h2>IGo Tickets</h2>
          <div>
            <h4>2024</h4>
            <div className="tags-div">
              <button className="fullstack-tag">Full Stack</button>
              <button className="php-laravel-tag">Laravel</button>
              <button className="react-tag">React</button>
              <button className="docker-tag">Docker</button>
            </div>
          </div>
          <p>
            Um site de vendas de tickets e divulgação de eventos.
            Nele, o usuário cria sua conta e pode fazer a compra do ingresso via cartão de crédito ou via pix. O ingresso é recebido via email com um código e um QR Code.
            <br />
            O site também conta com uma área de produtos onde é possível criar e editar eventos, ingressos e fazer validação de ingresso automaticamente via leitura do QR Code.
            A aplicação é feita em Php com Laravel e parte em React com deploy na AWS.
          </p>
          <a href="https://www.igoticket.com.br/" target="blanket">
            <button className="acessar-projeto">
              Acessar projeto
            </button>
          </a>
        </div>
      </S.ProjectDiv>

      <S.ProjectDiv>
        <div className="img-div" />
        <div>
          <h2>Agrix</h2>
          <div>
            <h4>2024</h4>
            <div className="tags-div">
              <button className="backend-tag">Back-end</button>
              <button className="java-tag">Java & Spring</button>
              <button className="docker-tag">Docker</button>
            </div>
          </div>
          <p>
            Maria e João são pessoas empreendedoras que estão muito preocupadas com os impactos ambientais e sociais dos nossos processos agrícolas.
            Por isso, decidiram criar a AgroTech, uma empresa especializada em tecnologias para melhorar a eficiência no cultivo de plantações.
            Isso visa reduzir o desperdício de recursos em geral e de alimentos em específico, fazendo um uso mais responsável da terra disponível para plantio.
            O primeiro produto dessa empresa será o Agrix, um sistema que permitirá a gestão e o monitoramento das fazendas participantes.
          </p>
          <a href="https://github.com/Wesleyhmendes/Agrix" target="blanket">
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
