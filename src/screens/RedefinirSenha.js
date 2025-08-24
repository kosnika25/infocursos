// RedefinirSenha.js
import React from 'react';
import styles from './RedefinirSenha.module.css';

import { Link } from 'react-router-dom';

function RedefinirSenha() {
  return (
    <div className={styles.container}>
   

      <main className={styles.mainContent}>
        <div className={styles.passwordResetForm}>
          <div className={styles.contentHeader}>
            <div className={styles.contentIcon}>🔒</div>
            <h1 className={styles.contentTitle}>Redefinição de senha</h1>
          </div>

          <form>
            <div className={styles.formGroup}>
              <label htmlFor="new-password">Digite sua nova senha</label>
              <input type="password" id="new-password" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirm-password">Confirme sua senha</label>
              <input type="password" id="confirm-password" required />
            </div>

            <div className={styles.passwordRequirements}>
              <h3>Senha deve conter:</h3>
              <ul>
                <li>Mínimo 8 caracteres</li>
                <li>Uma letra minúscula</li>
                <li>Uma letra maiúscula</li>
                <li>Um caractere especial</li>
              </ul>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.btn}>Enviar</button>
              <Link to="/login" className={`${styles.btn} ${styles.btnSecondary}`}>Voltar</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RedefinirSenha;
