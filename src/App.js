import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, createElement } from 'react';
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
import VLibrasWidget from './Components/VLibrasWidget';
import { useVLibras } from './hooks/useVLibras';

// Componente interno para lidar com mudanças de rota
function AppContent() {
  const location = useLocation();
  const { updateVLibras } = useVLibras();

  // Atualizar VLibras quando a rota mudar
  useEffect(() => {
    const timer = setTimeout(() => {
      updateVLibras();
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname, updateVLibras]);

  return createElement('div', null,
    createElement(NavBar),
    createElement(AccessibilityTools),
    createElement('main', { className: 'App-main' },
      createElement('div', { className: 'container' },
        createElement(Routes, null,
          createElement(Route, { path: '/', element: createElement(TelaPricipal) }),
          createElement(Route, { path: 'home', element: createElement(Home) }),
          createElement(Route, { path: 'cursos', element: createElement(Cursos) }),
          createElement(Route, { path: 'noticias', element: createElement(Noticias) }),
          createElement(Route, { path: 'novidades', element: createElement(Novidades) }),
          createElement(Route, { path: 'contato', element: createElement(Contato) }),
          createElement(Route, { path: 'login', element: createElement(Login) }),
          createElement(Route, { path: 'tecnologia', element: createElement(Tecnologia) }),
          createElement(Route, { path: 'portugol', element: createElement(Portugol) }),
          createElement(Route, { path: 'algoritimo', element: createElement(Algoritmo) }),
          createElement(Route, { path: 'accessibilitytools', element: createElement(AccessibilityTools) }),
          createElement(Route, { path: 'meuscursos', element: createElement(MeusCursos) }),
          createElement(Route, { path: 'cadastro', element: createElement(Cadastro) }),
          createElement(Route, { path: 'perfil', element: createElement(Perfil) })
        )
      )
    ),
    createElement(Footer),
    // VLibras Widget - deve ficar fora do container para funcionar corretamente
    createElement(VLibrasWidget)
  );
}

function App() {
  return createElement('div', { className: 'App' },
    createElement(BrowserRouter, null,
      createElement(AppContent)
    )
  );
}

export default App;