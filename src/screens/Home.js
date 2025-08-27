// src/screens/Home.js
import React from 'react';
import styles from './Home.module.css';
import AccessibilityTools from '../Components/AccessibilityTools';
import { Link } from 'react-router-dom';  // 🚨 importado Link para navegação sem reload

function Home() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <main className={styles.mainContent}>
        {/* Seção de boas-vindas */}
        <section>
          <h1 className={styles.pageTitle}>Bem-vindo à Plataforma de Cursos de TI</h1>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>👋</div>
              <h2 className={styles.cardTitle}>Olá, Fabiano!</h2>
            </div>
            <div className={styles.cardContent}>
              <p>
                Bem-vindo(a) ao aplicativo de cursos da área de tecnologia da informação,
                onde você irá aprender sobre as tecnologias emergentes do mercado de trabalho.
                Aqui você encontrará cursos sobre programação, redes, design, projetos,
                engenharia de software, inteligência artificial e muito mais.
              </p>
              <p>Explore os links e navegue conosco nesta jornada de aprendizado.</p>
            </div>

            {/* 🚨 Alterado de <a href> para <Link to> */}
            <Link to="/cursos" className={styles.btn}>Explorar Cursos</Link>
            <Link to="/meuscursos" className={`${styles.btn} ${styles.btnSecondary}`}>
              Meus Cursos
            </Link>
          </div>
        </section>

        {/* Seção de destaques */}
        <section>
          <h2 className={styles.sectionTitle}>Destaques</h2>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>O que é Tecnologia da Informação</h3>
            <div className={styles.cardContent}>
              <p>
                A Tecnologia da Informação (TI) é um dos pilares fundamentais da era digital,
                desempenhando um papel estratégico na inovação, automação e otimização
                de processos em empresas e na sociedade.
              </p>
            </div>
            <Link to="/tecnologia" className={styles.btn}>Saiba mais</Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>O que é linguagem Portugol?</h3>
            <div className={styles.cardContent}>
              <p>
                A programação é uma das habilidades mais importantes atualmente. Hoje em dia,
                a tecnologia está presente em praticamente todos os aspectos da nossa vida,
                desde aplicativos de celular até sistemas complexos de inteligência artificial.
              </p>
            </div>
            <Link to="/portugol" className={styles.btn}>Saiba mais</Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>O que são algoritmos?</h3>
            <div className={styles.cardContent}>
              <p>
                Antes de tudo: um erro muito comum é confundir as palavras 'algoritmo' e 'logaritmo'.
                São palavras parecidas, mas com significado bem diferente: 'Logaritmo' é uma ferramenta matemática.
                Algoritmo é uma ferramenta de computação.
              </p>
            </div>
            <Link to="/algoritimo" className={styles.btn}>Saiba mais</Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
