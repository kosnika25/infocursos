import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { auth } from "../firebase/connection";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
    setSidebarOpen(false);
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Cursos Tecnologia</div>

        {/* Navbar desktop */}
        <ul className={styles.navLinks}>
          <li>
            <NavLink to={user ? "/home" : "/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/cursos">Cursos</NavLink>
          </li>
          <li>
            <NavLink to="/noticias">Notícias</NavLink>
          </li>
          <li>
            <NavLink to="/novidades">Novidades</NavLink>
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>
          </li>

          {user ? (
            <li className={styles.profileMenu}>
              <button
                className={styles.profileBtn}
                onClick={toggleProfile}
              >
                Perfil
              </button>
              {profileOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.userInfo}>
                    <p><strong>{user.displayName || "Usuário"}</strong></p>
                    <p>{user.email}</p>
                  </div>
                  <button className={styles.logoutBtn} onClick={handleLogout}>
                    Sair
                  </button>
                </div>
              )}
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>

        {/* Botão hamburguer mobile */}
        <button className={styles.hamburger} onClick={toggleSidebar}>
          {sidebarOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Sidebar mobile */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <NavLink to={user ? "/home" : "/"} onClick={toggleSidebar}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cursos" onClick={toggleSidebar}>
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink to="/noticias" onClick={toggleSidebar}>
              Notícias
            </NavLink>
          </li>
          <li>
            <NavLink to="/novidades" onClick={toggleSidebar}>
              Novidades
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" onClick={toggleSidebar}>
              Contato
            </NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink to="/perfil" onClick={toggleSidebar}>
                  Perfil ({user.displayName || "Usuário"})
                </NavLink>
              </li>
              <li className={styles.logoutWrapper}>
                <button className={styles.logoutBtn} onClick={handleLogout}>
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login" onClick={toggleSidebar}>
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
