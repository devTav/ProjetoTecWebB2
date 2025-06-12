# Projeto Tecnologias Web - 2º Bimestre

Aplicação web desenvolvida em React para cadastro e listagem de itens, com integração a uma API REST simulada e validação de formulário.

## 🚀 Funcionalidades

- Cadastro de itens com nome, descrição e categoria
- Validação dos campos obrigatórios
- Listagem dinâmica dos itens cadastrados
- Remoção de itens
- Navegação entre páginas
- Integração com API REST (`json-server`)
- Estilização responsiva com CSS puro
- Estado global com Context API

## 🛠️ Tecnologias Utilizadas

- React + Vite
- TypeScript
- React Router DOM
- Context API
- Axios
- React Hook Form + Yup
- CSS3

## ▶️ Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie a API REST simulada (requer json-server):

```bash
npx json-server --watch db.json --port 3001
```

3. Rode o projeto React:

```bash
npm run dev
```

4. Acesse em [text](http://localhost:5173)