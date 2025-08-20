// Login.js
import React from 'react';
import styles from './Login.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/VLibras';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={styles.mainContent}>
        <div className={styles.loginForm}>
          <h1 className={styles.pageTitle}>Login</h1>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" required />
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.btn}>Entrar</button>
              <Link to="/" className={`${styles.btn} ${styles.btnSecondary}`}>Cancelar</Link>
            </div>

            <div className={styles.formLinks}>
              <Link to="/esqueceu-senha">Esqueci minha senha</Link>
              <Link to="/cadastro">Criar conta</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
