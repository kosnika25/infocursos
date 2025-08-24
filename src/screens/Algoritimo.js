// Algoritmo.js
import React from 'react';
import styles from './Algoritimo.module.css'
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/VLibrasWidget';
import { Link } from 'react-router-dom';

function Algoritmo() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={`${styles.mainContent} ${styles.contentPage}`}>
        <div className={styles.contentHeader}>
          <div className={styles.contentIcon}>🧮</div>
          <div>
            <h1 className={styles.contentTitle}>O que são algoritmos?</h1>
          </div>
        </div>
  <div className={styles.card}>

        <div className={styles.contentBody}>
          <div className={styles.contentImage}>
            <img src="/algoritmo.webp" alt="Algoritmos" />
          </div>
          <div className={styles.contentText}>
            <p>Antes de tudo: um erro muito comum é confundir 'algoritmo' e 'logaritmo'...</p>
            <p>Um algoritmo é uma sequência finita de instruções bem definidas e não ambíguas...</p>
            <p>Na prática, algoritmos são receitas passo a passo para resolver problemas...</p>
            <p>Os algoritmos podem ser representados de várias formas: linguagem natural, fluxogramas, pseudocódigo...</p>
          </div>
        </div>
</div>
        <Link to="/" className={styles.btn}>Voltar</Link>
      </main>
    </div>
  );
}

export default Algoritmo;
