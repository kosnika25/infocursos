<<<<<<< HEAD
// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import { HashRouter, Routes, Route } from 'react-router-dom';
>>>>>>> bbc73c51efc89a0bc7666a7a4491ef657ec6df8b
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
import TelaPrincipal from './screens/TelaPrincipal';
import Perfil from './screens/Perfil';

function AppContent() {
  return (
    <div>
      <NavBar /> {/* ✅ Isso está agora dentro de <HashRouter>, então os hooks funcionam */}
      <AccessibilityTools />
      <main className="App-main">
        <div className="container">
          <Routes>
            <Route path="/" element={<TelaPrincipal />} />
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
            {/* ✅ Rota coringa para evitar tela branca se a rota não existir */}
            <Route path="*" element={<TelaPricipal />} />
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
<<<<<<< HEAD
      {/* Use HashRouter para GitHub Pages */}
      <BrowserRouter basename="/infocursos">
=======
      {/* ✅ HashRouter sem basename — ideal para GitHub Pages */}
      <HashRouter>
>>>>>>> bbc73c51efc89a0bc7666a7a4491ef657ec6df8b
        <AppContent />
      </HashRouter>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App; // ✅ Exportando o componente que contém o <HashRouter>
>>>>>>> bbc73c51efc89a0bc7666a7a4491ef657ec6df8b
