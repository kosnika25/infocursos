import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/screens/Home';
import Cursos from '../src/screens/Cursos'; // Corrigido com C maiúsculo
import Noticias from '../src/screens/Noticias';
import Novidades from '../src/screens/Novidades';
import Contato from '../src/screens/Contato';
import Login from '../src/screens/Login';
import logo from './logo.svg';
import NavBar from '../src/Components/NavBar';
import PublicLayout from './Components/PublicLayout';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='App-header'>
          <NavBar />
        </header>
        <main className='App-main'>
          <div className='container'>
            <Routes>
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="cursos" element={<Cursos />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/novidades" element={<Novidades />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;