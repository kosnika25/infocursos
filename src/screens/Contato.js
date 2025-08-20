// Contato.js
import React from 'react';
import styles from './Contato.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/Libras';
import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={`${styles.mainContent} ${styles.contactPage}`}>
        <div className={styles.contentHeader}>
          <div className={styles.contentIcon}>📞</div>
          <div>
            <h1 className={styles.contentTitle}>Contato</h1>
            <p>Entre em contato conosco</p>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Informações</h2>
          <p>Olá! Bem-vindo ao nosso espaço dedicado aos cursos de Tecnologia da Informação (TI)! Somos uma equipe apaixonada por inovação e educação...</p>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <h3>E-mail</h3>
              <p>contato@cursosdeTI.com.br</p>
            </div>
            <div className={styles.contactMethod}>
              <h3>Telefone</h3>
              <p>(11) 1234-5678</p>
            </div>
            <div className={styles.contactMethod}>
              <h3>WhatsApp</h3>
              <p>(11) 98765-4321</p>
            </div>
            <div className={styles.contactMethod}>
              <h3>Endereço</h3>
              <p>Rua da Tecnologia, 123 - São Paulo, SP</p>
            </div>
            <div className={styles.contactMethod}>
              <h3>Redes Sociais</h3>
              <p>Facebook: /CursosTI</p>
              <p>Instagram: @CursosTI</p>
              <p>LinkedIn: Cursos de TI Oficial</p>
            </div>
          </div>
        </div>

        <Link to="/" className={styles.btn}>Voltar</Link>
      </main>
    </div>
  );
}

export default Contato;
