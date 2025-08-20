import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'; // Certifique-se de que esse CSS está correto

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Cursos Tecnologia</div>

        {/* Ícone de menu hambúrguer */}
        <button className={styles.menuButton} onClick={toggleSidebar}>
          ☰
        </button>

        {/* Menu desktop */}
        <ul className={styles.links_list}>
          <li><NavLink to="/" onClick={closeSidebar}>Home</NavLink></li>
          <li><NavLink to="/cursos" onClick={closeSidebar}>Cursos</NavLink></li>
          <li><NavLink to="/noticias" onClick={closeSidebar}>Notícias</NavLink></li>
          <li><NavLink to="/novidades" onClick={closeSidebar}>Novidades</NavLink></li>
          <li><NavLink to="/contato" onClick={closeSidebar}>Contato</NavLink></li>
          <li><NavLink to="/login" onClick={closeSidebar}>Login</NavLink></li>
        </ul>

        {/* Sidebar mobile */}
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
          <button className={styles.closeButton} onClick={closeSidebar}>×</button>
          <ul>
            <li><NavLink to="/" onClick={closeSidebar}>Home</NavLink></li>
            <li><NavLink to="/cursos" onClick={closeSidebar}>Cursos</NavLink></li>
            <li><NavLink to="/noticias" onClick={closeSidebar}>Notícias</NavLink></li>
            <li><NavLink to="/novidades" onClick={closeSidebar}>Novidades</NavLink></li>
            <li><NavLink to="/contato" onClick={closeSidebar}>Contato</NavLink></li>
            <li><NavLink to="/login" onClick={closeSidebar}>Login</NavLink></li>
          </ul>
        </div>

        {/* Overlay para clicar fora e fechar */}
        {sidebarOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
      </nav>
    </header>
  );
};

export default NavBar;
