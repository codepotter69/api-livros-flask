# API de Livros com Flask

## Objetivo

API mínima em Python e Flask para uma livraria. A rota `GET /livros` devolve, em JSON, os três livros
do catálogo, cada um com `id`, `titulo`, `autor` e `ano`. Os dados ficam numa lista no próprio
`app.py`, sem banco de dados.

## Instalar as dependências

```bash
python -m venv venv
```

Ative o ambiente virtual:

- Windows: `venv\Scripts\activate`
- Linux/macOS: `source venv/bin/activate`

Instale as bibliotecas:

```bash
pip install -r requirements.txt
```

## Executar

```bash
python app.py
```

## Rota disponível

| Método | Endereço | Resposta |
| --- | --- | --- |
| GET | http://127.0.0.1:5000/livros | JSON com os três livros |

Exemplo de resposta:

```json
{
  "livros": [
    {"id": 1, "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"id": 2, "titulo": "O Cortiço", "autor": "Aluísio Azevedo", "ano": 1890},
    {"id": 3, "titulo": "A Hora da Estrela", "autor": "Clarice Lispector", "ano": 1977}
  ]
}
```
