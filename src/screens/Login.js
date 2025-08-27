// Login.js
import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/connection"; // conexão com Firebase

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // redireciona após login
    } catch (err) {
      setError("Email ou senha incorretos!");
    }
  };

  return (
    <div className={styles.container}>
      
      

      <main className={styles.mainContent}>
        <div className={styles.loginForm}>
          <h1 className={styles.pageTitle}>Login</h1>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.btn}>
                Entrar
              </button>
              <Link
                to="/"
                className={`${styles.btn} ${styles.btnSecondary}`}
              >
                Cancelar
              </Link>
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
