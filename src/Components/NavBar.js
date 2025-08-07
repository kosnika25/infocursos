import styles from './NavBarModule.css';
import {NavLink} from 'react-router-dom';
 
const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/">Home</NavLink>          
          </li>
          <li>
            <NavLink to="/cursos">Cursos</NavLink>          
          </li>
          <li>
            <NavLink to="/noticias">Noticias</NavLink>
          </li>
          <li>
            <NavLink to="/novidades">Novidades</NavLink>          
          </li>
          <li>
            <NavLink to="/contato">Contato</NavLink>          
          </li>
            <li>
            <NavLink to="/login">Login</NavLink>          
          </li>
        </ul>
      </nav>
    );
  };
 
  export default NavBar