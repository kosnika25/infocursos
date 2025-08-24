// Cadastro.js
import React, { useState } from 'react';
import styles from './Cadastro.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/VLibras';
import { Link, useNavigate } from 'react-router-dom';

// Importa Firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../firebase/connection"; // garante que a config foi importada

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();
    setErro("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    try {
      setCarregando(true);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, senha);
      navigate("/"); // redireciona para home após cadastro
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={styles.mainContent}>
        <div className={styles.cadastroForm}>
          <h1 className={styles.pageTitle}>Criar Conta</h1>
          <form onSubmit={handleCadastro}>
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
              <label htmlFor="senha">Senha</label>
              <input 
                type="password" 
                id="senha" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
                required 
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input 
                type="password" 
                id="confirmarSenha" 
                value={confirmarSenha} 
                onChange={(e) => setConfirmarSenha(e.target.value)} 
                required 
              />
            </div>

            {erro && <p className={styles.error}>{erro}</p>}

            <div className={styles.formActions}>
              <button type="submit" className={styles.btn} disabled={carregando}>
                {carregando ? "Criando..." : "Cadastrar"}
              </button>
              <Link to="/login" className={`${styles.btn} ${styles.btnSecondary}`}>Cancelar</Link>
            </div>

            <div className={styles.formLinks}>
              <span>Já tem uma conta?</span> <Link to="/login">Entrar</Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;
