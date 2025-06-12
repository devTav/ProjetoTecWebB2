import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <h1>Projeto Tecnologias Web</h1>
      <nav>
        <ul>
          <li><Link to="/">Cadastro</Link></li>
          <li><Link to="/lista">Lista de Itens</Link></li>
        </ul>
      </nav>
    </header>
  );
}

