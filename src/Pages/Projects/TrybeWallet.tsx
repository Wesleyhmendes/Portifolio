/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import Header from '../../Components/Header/Header';
import walletVideo from '../../assets/videos/trybeWallet.mp4';
import walletStoreLogin from '../../assets/walletLogin.png';
import walletStoreForm from '../../assets/walletForm.png';

function TrybeWallet() {
  return (
    <>
      <Header />
      <section className="projectPageMainSection">

        <h1 className="ProjecTitle">Trybe Wallet</h1>

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
          Neste projeto, eu criei o Trybe Wallet, uma carteira de controle de gastos
          com conversor de moedas.
        </p>

        <div className="imgDivWallet">
          <img className="projectImgWallet" src={ walletStoreLogin } alt="home page" />
        </div>

        <h3 className="projectH3">Essa aplicação será capaz de:</h3>

        <ul className="ulList">
          <li className="projectList">📝 Adicionar, remover e editar um gasto.</li>
          <li className="projectList">📊 Visualizar sua tabela de gastos.</li>
          <li className="projectList">💱 Visualizar o total de gastos convertidos para uma moeda de sua escolha.</li>
        </ul>
        <h3 className="projectH3">Além disso, neste projeto, foi verificado minha capacidade de:</h3>
        <ul className="ulList">
          <li className="projectList">🔄 Criar um store Redux em aplicações React.</li>
          <li className="projectList">🔄 Criar reducers no Redux em aplicações React.</li>
          <li className="projectList">🔄 Criar actions no Redux em aplicações React.</li>
          <li className="projectList">🔄 Criar dispatchers no Redux em aplicações React.</li>
          <li className="projectList">🎣 Usar os hooks do Redux para manipulação e leitura do estado global.</li>
          <li className="projectList">🌐 Criar actions assíncronas na aplicação React que faz uso do Redux.</li>
        </ul>

        <div className="imgDivWallet">
          <img className="projectImgWallet" src={ walletStoreForm } alt="pagina de compra" />
        </div>
        <p className="projectResume">
          Para garantir a qualidade do código, utilizei neste projeto os linters ESLint e StyleLint.
          Assim, o código se manteve alinhado com as boas práticas de desenvolvimento, além de ser mais
          legível e de fácil manutenção.
        </p>

        <div className="videoDiv">
          <video className="projectVideo" width="860" height="520" controls>
            <source src={ walletVideo } type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>

        <h2 className="projectH2">Requisitos</h2>
        <ul className="ulList">
          <li className="projectList">- Criar uma página inicial de login com validação dos campos.</li>
          <li className="projectList">- Na página principal, criar um header para as informações da carteira do usuário</li>
          <li className="projectList">
            - Desenvolver um formulário para adicionar uma despesa contendo características
            como moeda, método de pagamento, descrição...
          </li>
          <li className="projectList">- Criar uma tabela com os gastos cadastrados pelo usuário</li>
          <li className="projectList">- Implementar a a funcionalidade de deletar uma despesa</li>
          <li className="projectList">- Implementar a funcionalidade de editar uma despesa</li>
          <li className="projectList">
            - Desenvolver testes que cobrem até 90% das linhas de código (como os testes foram
            feitos antes da estilização, a cobertura atual pode não atingir os 90%).
          </li>
        </ul>

        <p className="projectResume"><b>Além disso, toda a aplicação foi posteriormente estilizada garantindo um layout moderno e responsivo ao usuário.</b></p>

        <h2 className="projectH2">O que já veio pronto da Trybe</h2>
        <p className="projectResume">
          Neste projeto, utilizei o Cypress para garantir o funcionamento dos requisitos e dos testes criados
          e requisitados pela Trybe.
          As funções de renderWithRouter e similares já vieram prontas, cabendo a mim apenas usá-las.
          Por fim, um objeto contendo um retorno simulado da API foi disponibilizado para
          poder ser usado nos testes.
        </p>
      </section>
    </>
  );
}

export default TrybeWallet;
