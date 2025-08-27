// src/screens/Cursos.js
import React from "react";
import styles from "./Cursos.module.css";
//teste
function Cursos() {
  return (
    <main className={styles.mainContent}>
      <h1 className={styles.pageTitle}>Cursos Especializados</h1>

      <div className={styles.coursesGrid}>
        {/* Curso 1 */}
        <div className={styles.courseCard}>
          <div className={styles.courseImage}>
            <img
              src={`${process.env.PUBLIC_URL}/images/engenharia-software.jpg`}
              alt="Engenharia de Software"
            />
          </div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>Engenharia de Software</h3>
            <p>
              Engenharia de software é uma área da computação que se dedica ao desenvolvimento, manutenção e gerenciamento de programas.
            </p>
          </div>
        </div>

        {/* Curso 2 */}
        <div className={styles.courseCard}>
          <div className={styles.courseImage}>
            <img
              src={`${process.env.PUBLIC_URL}/images/gestao-ti.webp`}
              alt="Gestão de TI"
            />
          </div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>Gestão de TI</h3>
            <p>
              A gestão da tecnologia da informação (TI) é a área responsável por administrar os recursos e sistemas de TI de uma organização.
            </p>
          </div>
        </div>

        {/* Curso 3 */}
        <div className={styles.courseCard}>
          <div className={styles.courseImage}>
            <img
              src={`${process.env.PUBLIC_URL}/images/sistemas-internet.jpg`}
              alt="Sistemas para Internet"
            />
          </div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>Sistemas para Internet</h3>
            <p>
              A gestão da tecnologia da informação (TI) é a área responsável por administrar os recursos e sistemas de TI de uma organização.
            </p>
          </div>
        </div>

        {/* Curso 4 */}
        <div className={styles.courseCard}>
          <div className={styles.courseImage}>
            <img
              src={`${process.env.PUBLIC_URL}/images/ti.jpeg`}
              alt="TI"
            />
          </div>
          <div className={styles.courseContent}>
            <h3 className={styles.courseTitle}>TI</h3>
            <p>
              A gestão da tecnologia da informação (TI) é a área responsável por administrar os recursos e sistemas de TI de uma organização.
            </p>
          </div>
        </div>
      </div>

      <a href="/home" className={`${styles.btn} ${styles.btnSecondary}`}>
        Voltar
      </a>
    </main>
  );
}

export default Cursos;
