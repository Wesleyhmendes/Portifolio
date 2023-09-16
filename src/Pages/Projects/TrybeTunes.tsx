/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import Header from '../../Components/Header/Header';
import './ProjecPage.css';
import loginPage from '../../assets/LoginPageTrybeTunes.png';
import searchPage from '../../assets/SearchPageTrybeTunes.png';
import trybeTunesVideo from '../../assets/videos/trybe-tunes-apresentação.mp4';

function TrybeTunesPage() {
  return (
    <>
      <Header />
      <section className="projectPageMainSection">
        <h1 className="ProjecTitle">Trybe Tunes</h1>
        <div className="projectTagDiv">
          <button className="pinnedProjectYear" disabled>2023</button>
          <div className="pinnedProjectYearLanguage">
            <p className="pinnedProjectLang">React</p>
            <p className="pinnedProjectLang">TypeScript</p>
            <p className="pinnedProjectLang">JavaScript</p>
            <p className="pinnedProjectLang">Redux</p>
          </div>
        </div>

        <p className="projectResume">
          Neste projeto, eu criei o TrybeTunes, uma aplicação capaz de reproduzir músicas dos mais variados artistas
          e bandas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.
        </p>
        <div className="imgDiv">
          <img className="projectImg" src={ loginPage } alt="tela de login" />
          <img className="projectImg" src={ searchPage } alt="tela de pesquisa" />
        </div>

        <h3 className="projectH3">Essa aplicação será capaz de:</h3>

        <ul className="ulList">
          <li className="projectList">🎵 Fazer login.</li>
          <li className="projectList">🔍 Pesquisar por uma banda ou artista.</li>
          <li className="projectList">📀 Listar os álbuns disponíveis dessa banda ou artista.</li>
          <li className="projectList">🎶 Visualizar as músicas de um álbum selecionado.</li>
          <li className="projectList">▶️ Reproduzir uma prévia das músicas do álbum.</li>
          <li className="projectList">❤️ Favoritar e desfavoritar músicas.</li>
          <li className="projectList">📜 Ver a lista de músicas favoritadas.</li>
          <li className="projectList">👤 Ver o perfil do usuário logado.</li>
          <li className="projectList">✏️ Editar o perfil do usuário logado.</li>
        </ul>
        <h3 className="projectH3">Além disso, neste projeto, foi verificado minha capacidade de:</h3>
        <ul className="ulList">
          <li className="projectList">🌐 Fazer requisições e consumir dados de uma API.</li>
          <li className="projectList">🪝 Utilizar o hook useEffect.</li>
          <li className="projectList">🪝 Utilizar o hook useState.</li>
          <li className="projectList">🚀 Utilizar o componente BrowserRouter corretamente.</li>
          <li className="projectList">🚀 Criar rotas, mapeando o caminho da URL com o componente correspondente via Route.</li>
          <li className="projectList">🌐 Utilizar o Routes do React Router Dom.</li>
          <li className="projectList">🔗 Criar links de navegação na aplicação com o componente Link.</li>
        </ul>
        <p className="projectResume">
          <b>Para garantir a qualidade do código, utilizei neste projeto os linters ESLint e StyleLint. Assim, o código se manteve alinhado com as boas práticas de desenvolvimento, além de ser mais legível e de fácil manutenção.</b>
        </p>

        <div className="videoDiv">
          <video className="projectVideo" width="860" height="520" controls>
            <source src={ trybeTunesVideo } type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

        <h2 className="projectH2">Requisitos</h2>
        <ul className="ulList">
          <li className="projectList">- Criar um formulário para identificação</li>
          <li className="projectList">- Criar um formulário para pesquisar artistas</li>
          <li className="projectList">- Criar uma lista de músicas do álbum selecionado</li>
          <li className="projectList">- Criar um componente de cabeçalho</li>
          <li className="projectList">- Criar o mecanismo para adicionar músicas na lista de favoritas</li>
          <li className="projectList">- Fazer uma requisição para adicionar e remover múscas da lista de favoritas</li>
          <li className="projectList">- Fazer uma requisição para recuperar as músicas favoritadas ao recarregar a página</li>
          <li className="projectList">- Criar uma página com as músicas favoritas</li>
          <li className="projectList">- Criar uma página de perfil</li>
          <li className="projectList">- Criar um formulário para editar o perfil</li>
        </ul>

        <p className="projectResume"><b>Além disso, toda a aplicação foi posteriormente estilizada garantindo um layout agradável (inspirado no Spotify) e responsivo.</b></p>

        <h2 className="projectH2">O que já veio pronto da Trybe</h2>
        <p className="projectResume">
          Neste projeto, utilizei a React Testing Library (RTL) para a execução dos testes. Todos os testes foram feitos pela Trybe, cabendo a mim criar a aplicação baseando-me neles.
          Também já existe no projeto um diretório src/services que contém os arquivos favoriteSongsAPI.ts, searchAlbumsAPI.ts, userAPI.ts e musicsAPI.ts. Esses arquivos serão responsáveis por lidar com as requisições simuladas utilizadas durante o desenvolvimento. Também é possível encontrar o arquivo src/types.ts, neste arquivo estão armazenados todos os tipos utilizados pelas funções presentes nos arquivos de serviço mencionados acima.
        </p>
      </section>
    </>
  );
}

export default TrybeTunesPage;
