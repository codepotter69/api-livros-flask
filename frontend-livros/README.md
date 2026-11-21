# Catálogo de Livros (React + Vite)

Interface em React que consulta a API Flask de livros (`api-livros`). Ao clicar em **Buscar Livros**,
a página faz um `GET` na rota `/livros`, converte a resposta com `response.json()`, guarda os livros no
estado do componente e mostra ID, título, autor e ano de cada um. Enquanto a consulta acontece aparece
"Carregando livros..."; se a API estiver fora do ar, aparece uma mensagem de erro.

## Como executar

Os dois servidores precisam estar rodando ao mesmo tempo.

1. Inicie a API Flask (pasta `api-livros`, veja o README dela):

   ```bash
   python app.py
   ```

2. Em outro terminal, inicie o frontend:

   ```bash
   cd frontend-livros
   npm install
   npm run dev
   ```

3. Abra o endereço mostrado pelo Vite (normalmente http://localhost:5173).

## Integração com o Flask

O `vite.config.js` tem um proxy: as chamadas para `/api/livros` são encaminhadas para
`http://127.0.0.1:5000/livros`. Por isso o React chama `/api/livros` e o navegador não bloqueia a
requisição por CORS. Depois de mudar o `vite.config.js`, reinicie o `npm run dev`.

## Arquivos principais

- `src/App.jsx`: componente com o botão, a requisição `fetch()`, o estado e a lista renderizada com `map()`.
- `src/App.css` e `src/index.css`: estilos.
- `vite.config.js`: proxy para a API.
