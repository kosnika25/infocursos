import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import { auth } from '../firebase/connection';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false);
    navigate('/');
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Cursos Tecnologia</div>

        <ul className={styles.links_list}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/cursos">Cursos</NavLink></li>
          <li><NavLink to="/noticias">Notícias</NavLink></li>
          <li><NavLink to="/novidades">Novidades</NavLink></li>
          <li><NavLink to="/contato">Contato</NavLink></li>

          {user ? (
            <li className={styles.profileMenu}>
              <button className={styles.profileBtn} onClick={toggleMenu}>
                Perfil
              </button>
              {menuOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.userInfo}>
                    <p><strong>{user.displayName || "Usuário"}</strong></p>
                    <p>{user.email}</p>
                  </div>
                  <NavLink to="/perfil" className={styles.dropdownLink} onClick={() => setMenuOpen(false)}>
                    Ver Perfil
                  </NavLink>
                  <button className={styles.dropdownLink} onClick={handleLogout}>
                    Sair
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li><NavLink to="/login">Login</NavLink></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;