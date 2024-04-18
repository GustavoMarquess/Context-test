import './App.css'
import { useState } from 'react'
import { Alunos } from './components/Alunos'
import { UserProvider } from './context/user'
import { AlunosCadastro } from './components/CadastroAlunos'
import { TabelaAlunos } from './components/Tabela_de_alunos'
import Footer from './components/Footer'

function App() {
  return (
    <UserProvider>
    <div>
      <h1>  
        ContextApi - Atividade
      </h1> 
      <hr /> 
      <h2>Cadastro de Alunos</h2> 
      <AlunosCadastro/>
      <Alunos/>    
      <TabelaAlunos/> 
      <br />
      <Footer/>
      <br />
    </div> 
    </UserProvider> 
  )
}
export default App
