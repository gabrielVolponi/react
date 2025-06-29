import { useState } from 'react'
import './App.css'
import Header from './components/Header'
<<<<<<< HEAD
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

=======
import Hero from './components/Hero'
import SectionPublico from './components/SectionPublico'
>>>>>>> master

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
     <Header src='https://images.unsplash.com/photo-1597871040916-4b4c20ba08dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' paginaAtual="sobre"/>
     <Hero src='https://images.unsplash.com/photo-1659168915827-1ccf35a141d0?q=80&w=1142&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' h2='Uma experiência Incrível' h4='Conheça Agora'/>
     <SectionPublico h2='Pra quem esse passeio foi feito'/>
    </>
    
  )
}

export default App

