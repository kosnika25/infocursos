// Cadastro.js
import React from 'react';
import styles from './Cadastro.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/Libras';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={styles.mainContent}>
        <div className={styles.registerForm}>
          <h1 className={styles.pageTitle}>Cadastro</h1>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirm-password">Confirmar Senha</label>
              <input type="password" id="confirm-password" required />
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.btn}>Cadastrar</button>
              <Link to="/" className={`${styles.btn} ${styles.btnSecondary}`}>Cancelar</Link>
            </div>

            <div className={styles.formLinks}>
              <span>Já tem conta?</span>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;
