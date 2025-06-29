import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header src='https://images.unsplash.com/photo-1597871040916-4b4c20ba08dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' paginaAtual="sobre" />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
    
  )
}

export default App

