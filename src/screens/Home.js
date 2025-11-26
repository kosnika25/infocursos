// src/screens/Home.js
import React from 'react';
import styles from './Home.module.css';
import AccessibilityTools from '../Components/AccessibilityTools';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      
      <main className={styles.mainContent}>
        {/* Seção de boas-vindas */}
        <section className={styles.welcomeSection}>
          <div className={styles.welcomeHeader}>
            <h1 className={styles.pageTitle}>Bem-vindo à Plataforma de Cursos</h1>
            <p className={styles.pageSubtitle}>Aprenda tecnologia com os melhores cursos do mercado</p>
          </div>

          <div className={styles.welcomeContainer}>
            <div className={styles.userGreeting}>
              <div className={styles.avatar}>
                <span>F</span>
              </div>
              <div className={styles.userInfo}>
                <h2 className={styles.greetingTitle}>Olá, Fabiano!</h2>
                <p className={styles.greetingText}>Pronto para aprender algo novo hoje?</p>
              </div>
            </div>
            
            <div className={styles.welcomeContent}>
              <p className={styles.welcomeMessage}>
                Bem-vindo(a) ao aplicativo de cursos da área de tecnologia da informação,
                onde você irá aprender sobre as tecnologias emergentes do mercado de trabalho.
                Aqui você encontrará cursos sobre programação, redes, design, projetos,
                engenharia de software, inteligência artificial e muito mais.
              </p>
              <p className={styles.welcomeMessage}>
                Explore os links e navegue conosco nesta jornada de aprendizado.
              </p>
            </div>

            <div className={styles.quickActions}>
              <Link to="/cursos" className={styles.actionPrimary}>
                <div className={styles.actionIcon}>📚</div>
                <div className={styles.actionContent}>
                  <span className={styles.actionTitle}>Explorar Cursos</span>
                  <span className={styles.actionDesc}>Descubra todos os cursos disponíveis</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <Link to="/meuscursos" className={styles.actionSecondary}>
                <div className={styles.actionIcon}>🎯</div>
                <div className={styles.actionContent}>
                  <span className={styles.actionTitle}>Meus Cursos</span>
                  <span className={styles.actionDesc}>Continue de onde parou</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção de destaques */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Destaques</h2>
            <p className={styles.sectionSubtitle}>Conheça os fundamentos da tecnologia</p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💻</div>
              <h3 className={styles.featureTitle}>O que é Tecnologia da Informação</h3>
              <div className={styles.featureContent}>
                <p>
                  A Tecnologia da Informação (TI) é um dos pilares fundamentais da era digital,
                  desempenhando um papel estratégico na inovação, automação e otimização de processos
                  em empresas e na sociedade.
                </p>
              </div>
              <Link to="/tecnologia" className={styles.featureLink}>
                <span>Saiba mais</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔤</div>
              <h3 className={styles.featureTitle}>O que é linguagem Portugol?</h3>
              <div className={styles.featureContent}>
                <p>
                  A programação é uma das habilidades mais importantes atualmente.
                  Hoje em dia, a tecnologia está presente em praticamente todos os aspectos da nossa vida,
                  desde aplicativos de celular até sistemas complexos de inteligência artificial.
                </p>
              </div>
              <Link to="/portugol" className={styles.featureLink}>
                <span>Saiba mais</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3 className={styles.featureTitle}>O que são algoritmos?</h3>
              <div className={styles.featureContent}>
                <p>
                  Antes de tudo: um erro muito comum é confundir as palavras 'algoritmo' e 'logaritmo'.
                  São palavras parecidas, mas com significado bem diferente:
                  'Logaritmo' é uma ferramenta matemática. Algoritmo é uma ferramenta de computação.
                </p>
              </div>
              <Link to="/algoritimo" className={styles.featureLink}>
                <span>Saiba mais</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;