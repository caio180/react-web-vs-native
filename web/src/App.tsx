import './App.css'
import { useState } from 'react';
function App() {
  const [nome, setnome] = useState('')
  const [email, setemail] = useState('');
  const [senha, setsenha] = useState('');
  const [cidade, setcidade] = useState('');

  return (
    <>

  <div className='container'>
      <h1>Tela de Cadastro</h1>

    
    <div className='formulario'>
      <p>Nome</p>
      <input
        placeholder='Digite seu nome'
        value={nome}
        onChange={(e) => setnome(e.target.value)}
        >
      </input>
      
      <p>E-mail</p>
      <input
        placeholder='Digite seu E-mail'
        value={email}
        onChange={(e) => setemail(e.target.value)}
        >
      </input>

      <p>Senha</p>
      <input
        placeholder='Crie uma senha'
        value={senha}
        onChange={(e) => setsenha(e.target.value) }
        >
      </input>

      <p>Cidade</p>
      <input
        placeholder='Digite o nome da sua cidade'
        value={cidade}
        onChange={(e) => setcidade(e.target.value)}
      >
      </input>
    <br/>
      <button
      title='Cadastrar-se'
      onClick={()=> alert("Cadastro concluido")}
      >
      Cadastrar-se
      </button>
    </div>
  </div>
    </>
  )
}

export default App
