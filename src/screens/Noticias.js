// Noticias.js
import React from 'react';
import styles from './Noticias.module.css';


function Noticias() {
  return (
    <div className={styles.container}>
   

      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Notícias</h1>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>📰</div>
            <h2 className={styles.cardTitle}>Ataques Cibernéticos!</h2>
          </div>
          <div className={styles.cardContent}>
            <p>
              Recentemente, diversas instituições sofreram ataques cibernéticos significativos,
              destacando a crescente sofisticação das ameaças digitais. Em novembro de 2023, a
              Nissan North America foi alvo de um ataque à sua VPN externa, resultando na exposição
              de dados pessoais de mais de 53.000 funcionários.
            </p>
          </div>
          <button className={styles.btn}>Saiba mais</button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>🔒</div>
            <h2 className={styles.cardTitle}>Novas Medidas de Segurança</h2>
          </div>
          <div className={styles.cardContent}>
            <p>
              Empresas de tecnologia estão adotando novas medidas de segurança para proteger contra
              ameaças cibernéticas cada vez mais sofisticadas. Saiba como essas medidas podem impactar
              seu trabalho diário.
            </p>
          </div>
          <button className={styles.btn}>Saiba mais</button>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardIcon}>💻</div>
            <h2 className={styles.cardTitle}>Tendências de TI para 2024</h2>
          </div>
          <div className={styles.cardContent}>
            <p>
              Confira as principais tendências de tecnologia da informação que devem dominar o mercado
              em 2024, desde inteligência artificial até computação quântica.
            </p>
          </div>
          <button className={styles.btn}>Saiba mais</button>
        </div>

        <button className={styles.btnSecondary} onClick={() => window.history.back()}>Voltar</button>
      </main>
    </div>
  );
}

export default Noticias;
