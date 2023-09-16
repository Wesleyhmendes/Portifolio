/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import Header from '../../Components/Header/Header';
import onlineStore1 from '../../assets/OnlineStore-1.png';
import onlineStore2 from '../../assets/onlineStore-2.png';
import trybeTunesVideo from '../../assets/videos/Code-Store.mp4';
import './ProjecPage.css';

function CodeStore() {
  return (
    <>
      <Header />
      <section className="projectPageMainSection">
        <h1 className="ProjecTitle">Online Store Project</h1>
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
          Neste projeto, nós criamos uma versão simplificada,
          sem persistência no banco de dados, de uma loja online, desenvolvendo em grupo as
          funcionalidades dela de acordo com demandas definidas em um quadro Kanban, em um
          cenário próximo ao do mercado de trabalho.
        </p>
        <div className="imgDivCodeStore">
          <img className="projectImgCodeStore" src={ onlineStore1 } alt="tela de login" />
        </div>

        <h3 className="projectH3">Essa aplicação será capaz de:</h3>

        <ul className="ulList">
          <li className="projectList">
            - Buscar produtos por termos e categorias
            por meio da API do Mercado Livre.
          </li>
          <li className="projectList">
            - Interagir com os produtos buscados, de modo a adicioná-los e removê-los de um carrinho de compras
            em diferentes quantidades.
          </li>
          <li className="projectList">- Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações.</li>
          <li className="projectList">- Simular a finalização da compra dos itens selecionados.</li>
        </ul>
        <h3 className="projectH3">Além disso, neste projeto, foi verificado minha capacidade de:</h3>
        <ul className="ulList">
          <li className="projectList">- Entender o que são Métodos Ágeis.</li>
          <li className="projectList">- Entender o que é Kanban.</li>
          <li className="projectList">- Entender o que é Scrum.</li>
          <li className="projectList">- Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz.</li>
          <li className="projectList">- Praticar todas as habilidades desenvolvidas até agora no módulo de Front-end.</li>

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
          <li className="projectList">- Implemente o módulo de acesso à API do Mercado Livre</li>
          <li className="projectList">- Crie uma página de listagem de produtos vazia</li>
          <li className="projectList">- Crie a página do carrinho de compras</li>
          <li className="projectList">- Liste as categorias de produtos disponíveis via API na página principal</li>
          <li className="projectList">- Liste os produtos buscados por termos, com os dados resumidos associados a esses termos</li>
          <li className="projectList">- Selecione uma categoria e mostre somente os produtos daquela categoria</li>
          <li className="projectList">- Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto</li>
          <li className="projectList">- Adicione produtos ao carrinho a partir da tela de listagem de produtos</li>
          <li className="projectList">- Adicione um produto ao carrinho a partir de sua tela de exibição detalhada</li>
          <li className="projectList">- Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da quantidade</li>
          <li className="projectList">- Finalize a compra vendo um resumo dela, preenchendo os dados e escolhendo a forma de pagamento</li>
          <li className="projectList">- Avalie e comente acerca de um produto em sua tela de exibição detalhada</li>
          <li className="projectList">- Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele em todas as telas em que ele aparece</li>
          <li className="projectList">- Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque</li>
          <li className="projectList">- Faça um layout para o site</li>
          <li className="projectList">- Faça um layout responsivo para o site</li>
        </ul>

        <div className="imgDivCodeStore">
          <img className="projectImgCodeStore" src={ onlineStore2 } alt="tela de pesquisa" />
        </div>
        <p className="projectResume">
          <b>Além disso, toda a aplicação foi posteriormente estilizada garantindo um layout agradável (inspirado no Spotify) e responsivo.</b>
        </p>
      </section>
    </>
  );
}

export default CodeStore;
