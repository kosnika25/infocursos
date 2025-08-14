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

// O componente App, que é o layout global
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* NavBar será exibido em todas as páginas */}
        <NavBar />

        {/* Conteúdo das páginas */}
        <main className="App-main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cursos" element={<Cursos />} />
              <Route path="noticias" element={<Noticias />} />
              <Route path="novidades" element={<Novidades />} />
              <Route path="contato" element={<Contato />} />
              <Route path="login" element={<Login />} />
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
