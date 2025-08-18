import React from 'react'; 
import { NavLink } from 'react-router-dom';  // Para navegação entre páginas
import styles from './NavBar.module.css';  // Importando o CSS corretamente

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Cursos Tecnologia</div> {/* Logo do navbar */}
      <ul className={styles.links_list}>
        <li><NavLink to="/" className={styles.link} activeClassName={styles.active}>Home</NavLink></li>
        <li><NavLink to="/cursos" className={styles.link} activeClassName={styles.active}>Cursos</NavLink></li>
        <li><NavLink to="/noticias" className={styles.link} activeClassName={styles.active}>Notícias</NavLink></li>
        <li><NavLink to="/novidades" className={styles.link} activeClassName={styles.active}>Novidades</NavLink></li>
        <li><NavLink to="/contato" className={styles.link} activeClassName={styles.active}>Contato</NavLink></li>
        <li><NavLink to="/login" className={styles.link} activeClassName={styles.active}>Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
