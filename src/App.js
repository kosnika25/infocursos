import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';  // Página inicial
import Cursos from './screens/Cursos'; // Exemplo de outra página
import Noticias from './screens/Noticias';
import Novidades from './screens/Novidades';
import Contato from './screens/Contato';
import Login from './screens/Login';
import NavBar from './Components/NavBar';  // Importando o NavBar global
import Footer from './Components/Footer';  // Importando o Footer global
import './App.css';
import AccessibilityTools from './Components/AccessibilityTools';
import VLibras from './Components/VLibras';
import Tecnologia from './screens/Tecnologia';
import Portugol from './screens/Portugol';
import Algoritmo from './screens/Algoritimo';
import MeusCursos from './screens/MeusCursos';
import Cadastro from './screens/Cadastro';
import TelaPricipal from './screens/TelaPricipal';
// O componente App, que é o layout global
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* NavBar será exibido em todas as páginas */}
        <NavBar />
        <AccessibilityTools />
        <VLibras />
        {/* Conteúdo das páginas */}
        <main className="App-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<TelaPricipal />} />
              <Route path="home" element={<Home />} />
              <Route path="cursos" element={<Cursos />} />
              <Route path="noticias" element={<Noticias />} />
              <Route path="novidades" element={<Novidades />} />
              <Route path="contato" element={<Contato />} />
              <Route path="login" element={<Login />} />
              <Route path="tecnologia" element={<Tecnologia />} />
              <Route path="Portugol" element={<Portugol />} />
              <Route path="algoritimo" element={<Algoritmo />} />
              <Route path="accessibilitytools" element={<AccessibilityTools />} />
              <Route path="meuscursos" element={<MeusCursos />} />
              <Route path="cadastro" element={<Cadastro />} />

            </Routes>
          </div>
        </main>

        {/* Footer será exibido em todas as páginas */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
