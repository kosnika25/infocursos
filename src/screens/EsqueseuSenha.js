// EsqueceuSenha.js
import React from 'react';
import styles from './EsqueceuSenha.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/Libras';
import { Link } from 'react-router-dom';

function EsqueceuSenha() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={styles.mainContent}>
        <div className={styles.passwordResetForm}>
          <div className={styles.contentHeader}>
            <div className={styles.contentIcon}>🔑</div>
            <h1 className={styles.contentTitle}>Esqueceu sua senha?</h1>
          </div>

          <p>Digite um email para enviarmos o link para redefinir sua senha</p>

          <form>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>

            <div className={styles.formActions}>
              <Link to="/login" className={styles.btnEnviar}>Enviar</Link>
              <Link to="/login" className={`${styles.btn} ${styles.btnSecondary}`}>Cancelar</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default EsqueceuSenha;
