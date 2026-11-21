# API de Livros com Flask e frontend em React

Atividade da AV2 de Web Coding (UNINASSAU).

| Pasta | Lista | O que é |
| --- | --- | --- |
| [`api-livros/`](api-livros/) | Lista 1 | API em Python e Flask com a rota `GET /livros`, que devolve três livros em JSON |
| [`frontend-livros/`](frontend-livros/) | Lista 2 | Interface em React (Vite) que, ao clicar em **Buscar Livros**, consulta a API e mostra os livros |

## Objetivo da API

Disponibilizar o catálogo de uma livraria para outros sistemas. A rota `GET /livros` retorna três
livros, cada um com `id`, `titulo`, `autor` e `ano`.

## Instalar as dependências da API

```bash
cd api-livros
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Linux/macOS
pip install -r requirements.txt
```

## Executar a API

```bash
python app.py
```

Rota disponível: **http://127.0.0.1:5000/livros**

## Executar o frontend

Com a API rodando, em outro terminal:

```bash
cd frontend-livros
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite (normalmente http://localhost:5173) e clique em **Buscar Livros**.
Mais detalhes no README de cada pasta.
