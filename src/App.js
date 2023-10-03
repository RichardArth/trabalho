
import './App.scss';

function App() {
  return (
    <div className="pagina-mercado">
      <header>
        <img src='./assets/images/OcaMarketlogo.png'></img>
      </header>

      <main>
        <h1>ADICIONAR PRODUTO</h1>

        <div className='tela-cadastro'>
          <div>
            <h5>Nome do Produto:</h5>
            <input></input>
          </div>

          <div>
            <h5>Tipo do Produto</h5>
            <input></input>
          </div>

          <div>
            <h5>Preço</h5>
          </div>

          <div>
            <h5>Estoque</h5>
            <input></input>
          </div>

          <div>
            <h5>Validade</h5>
            <input type='data'></input>
          </div>


          <button>ADICIONAR</button>
        </div>
      </main>
    </div>
  );
}

export default App;
