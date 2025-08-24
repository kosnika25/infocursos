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

        <div className={styles.card}>
          <div className={styles.contentBody}>
            <div className={styles.contentImage}>
              <img src="/ti.jpeg" alt="Tecnologia da Informação" />
            </div>
            <div className={styles.contentText}>
              <p>A Tecnologia da Informação (TI) abrange o uso de computadores,
                 softwares, redes e outros sistemas para criar, processar, armazenar,
                  proteger e transmitir dados e informações. É a base da nossa era digital, 
                  fundamental para a comunicação instantânea, o acesso a grandes bancos de 
                  dados e a automação de processos em empresas e na vida quotidiana.
                  As áreas de TI incluem desenvolvimento de hardware, software, redes, 
                  segurança de dados, análise de dados e inteligência artificial, sendo 
                  essencial para a tomada de decisões, a eficiência e a inovação. </p>
            </div>
          </div>
        </div>
        <Link to="/" className={styles.btn}>Voltar</Link>
      </main>
    </div>
  );
}

export default Tecnologia;
