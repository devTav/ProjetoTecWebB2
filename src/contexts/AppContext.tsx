import { createContext, useContext, useEffect, useState } from 'react';
import { getItens, postItem, deleteItem } from '../services/api';

export interface Item {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  dataCadastro: string;
}

interface AppContextType {
  itens: Item[];
  adicionarItem: (item: Omit<Item, 'id' | 'dataCadastro'>) => void;
  removerItem: (id: number) => void;
}

const AppContext = createContext({} as AppContextType);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<Item[]>([]);

  useEffect(() => {
    getItens().then(setItens);
  }, []);

  function adicionarItem(dado: Omit<Item, 'id' | 'dataCadastro'>) {
    const novoItem: Omit<Item, 'id'> = {
      ...dado,
      dataCadastro: new Date().toLocaleString(),
    };
    postItem(novoItem).then((item) => setItens((prev) => [...prev, item]));
  }

  function removerItem(id: number) {
    deleteItem(id).then(() => setItens(itens.filter((i) => i.id !== id)));
  }

  return (
    <AppContext.Provider value={{ itens, adicionarItem, removerItem }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
