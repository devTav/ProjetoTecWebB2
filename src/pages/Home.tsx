// src/pages/Home.tsx
import { useAppContext } from '../contexts/AppContext';
import './Home.css';

export function Home() {
  const { itens, removerItem } = useAppContext();

  return (
    <div id="lista-itens">
      <h2>Itens Cadastrados</h2>
      {itens.length === 0 ? (
        <p>Nenhum item cadastrado ainda.</p>
      ) : (
        itens.map((item) => (
          <div className="item" key={item.id}>
            <div>
              <h3>{item.nome}</h3>
              <p><strong>Categoria:</strong> {item.categoria}</p>
              <p>{item.descricao}</p>
              <small>Cadastrado em: {item.dataCadastro}</small>
            </div>
            <button onClick={() => removerItem(item.id)}>Remover</button>
          </div>
        ))
      )}
    </div>
  );
}