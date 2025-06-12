import { Routes, Route } from 'react-router-dom';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';
import { AppProvider } from './contexts/AppContext';
import './App.css';
import { Header } from './components/Header';

export default function App() {
  return (
    <AppProvider>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/lista" element={<Home />} />
        </Routes>
      </main>
    </AppProvider>
  );
}
