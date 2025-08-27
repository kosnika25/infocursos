// src/App.js
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Cursos from './screens/Cursos';
import Noticias from './screens/Noticias';
import Novidades from './screens/Novidades';
import Contato from './screens/Contato';
import Login from './screens/Login';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import './App.css';
import AccessibilityTools from './Components/AccessibilityTools';
import Tecnologia from './screens/Tecnologia';
import Portugol from './screens/Portugol';
import Algoritmo from './screens/Algoritimo';
import MeusCursos from './screens/MeusCursos';
import Cadastro from './screens/Cadastro';
import TelaPricipal from './screens/TelaPricipal';
import Perfil from './screens/Perfil';

function AppContent() {
  return (
    <div>
      <NavBar />
      <AccessibilityTools />
      <main className="App-main">
        <div className="container">
          <Routes>
            <Route path="/" element={<TelaPricipal />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/novidades" element={<Novidades />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/portugol" element={<Portugol />} />
            <Route path="/algoritimo" element={<Algoritmo />} />
            <Route path="/accessibilitytools" element={<AccessibilityTools />} />
            <Route path="/meuscursos" element={<MeusCursos />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* 🚨 Alterado de BrowserRouter para HashRouter */}
      <HashRouter>
        <AppContent />
      </HashRouter>
    </div>
  );
}

export default App;
