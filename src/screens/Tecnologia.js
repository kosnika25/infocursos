// TecnologiaInformacao.js
import React from 'react';
import styles from './Tecnologia.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/VLibras';
import { Link } from 'react-router-dom';

function Tecnologia() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={`${styles.mainContent} ${styles.contentPage}`}>
        <div className={styles.contentHeader}>
          <div className={styles.contentIcon}>💻</div>
          <div>
            <h1 className={styles.contentTitle}>O que é Tecnologia da Informação?</h1>
          </div>
        </div>

        <div className={styles.contentBody}>
          <div className={styles.contentImage}>
            <img src="/ti.jpeg" alt="Tecnologia da Informação" />
          </div>
          <div className={styles.contentText}>
            <p>A Tecnologia da Informação (TI) é um dos pilares fundamentais da era digital...</p>
            <p>Ela engloba um amplo conjunto de recursos tecnológicos e computacionais...</p>
            <p>Desde a infraestrutura de hardware e software até a cibersegurança...</p>
          </div>
        </div>

        <Link to="/" className={styles.btn}>Voltar</Link>
      </main>
    </div>
  );
}

export default Tecnologia;
