import { useState } from 'react'
import './App.css'

// O proxy do Vite (vite.config.js) encaminha /api/livros para http://127.0.0.1:5000/livros
const URL_API = '/api/livros'

function App() {
  // Estado do componente: quando muda, o React desenha a tela de novo.
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  // Executada só quando o usuário clica em "Buscar Livros".
  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const resposta = await fetch(URL_API) // GET é o método padrão do fetch
      if (!resposta.ok) {
        throw new Error(`A API respondeu com o status ${resposta.status}`)
      }
      const dados = await resposta.json() // converte o corpo da resposta de JSON
      setLivros(dados.livros)
    } catch (e) {
      console.error(e)
      setErro('Não foi possível buscar os livros. Verifique se a API Flask está em execução.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="pagina">
      <h1>Catálogo de Livros</h1>

      <button onClick={buscarLivros} disabled={carregando}>
        Buscar Livros
      </button>

      {/* Área de mensagens */}
      <div className="mensagens" aria-live="polite">
        {carregando && <p className="carregando">Carregando livros...</p>}
        {erro && <p className="erro">{erro}</p>}
      </div>

      {/* Área de exibição dos livros */}
      <ul className="livros">
        {livros.map((livro) => (
          <li key={livro.id} className="livro">
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Título:</strong> {livro.titulo}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
