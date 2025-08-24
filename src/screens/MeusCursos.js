import React from 'react';
import styles from './MeusCursos.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/VLibras';
import { Link } from 'react-router-dom';

function MeusCursos() {
  const cursosAndamento = [
    { 
      id: 1, 
      nome: "Curso de React", 
      descricao: "Aprenda fundamentos do React e crie interfaces modernas.", 
      progresso: 40, 
      aulaAtual: 3, 
      totalAulas: 10,
      imagem: "/rt.png",
      link: "/estudar/react" 
    },
    { 
      id: 2, 
      nome: "Curso de Redes", 
      descricao: "Conceitos de redes e protocolos de comunicação.", 
      progresso: 70, 
      aulaAtual: 7, 
      totalAulas: 10,
      imagem: "/redes-course.jpg",
      link: "/estudar/redes" 
    },
  ];

  const cursosConcluidos = [
    { 
      id: 3, 
      nome: "Curso de Portugol", 
      descricao: "Lógica de programação em Portugol.", 
      progresso: 100, 
      aulaAtual: 10, 
      totalAulas: 10,
      imagem: "/portugol-course.jpg",
      link: "/estudar/portugol" 
    },
  ];

  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Meus Cursos</h1>

        {/* Cursos em andamento */}
        <section>
          <h2 className={styles.sectionTitleActive}>📚 Em Andamento</h2>
          <div className={styles.courseGrid}>
            {cursosAndamento.map(curso => (
              <div key={curso.id} className={`${styles.courseCard} ${styles.active}`}>
                <img src={curso.imagem} alt={curso.nome} className={styles.courseImg} />
                <div className={styles.courseInfo}>
                  <h3 className={styles.courseTitle}>{curso.nome}</h3>
                  <p className={styles.courseDesc}>{curso.descricao}</p>
                  <p className={styles.lessonInfo}>Aula {curso.aulaAtual} de {curso.totalAulas}</p>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${curso.progresso}%` }}></div>
                  </div>
                  <Link to={curso.link} className={styles.continueBtn}>Continuar Curso</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cursos concluídos */}
        <section>
          <h2 className={styles.sectionTitleCompleted}>✅ Concluídos</h2>
          <div className={styles.courseGrid}>
            {cursosConcluidos.map(curso => (
              <div key={curso.id} className={`${styles.courseCard} ${styles.completed}`}>
                <img src={curso.imagem} alt={curso.nome} className={styles.courseImg} />
                <div className={styles.courseInfo}>
                  <h3 className={styles.courseTitle}>{curso.nome}</h3>
                  <p className={styles.courseDesc}>{curso.descricao}</p>
                  <p className={styles.lessonInfo}>Todas as aulas concluídas</p>
                  <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${curso.progresso}%` }}></div>
                  </div>
                  <Link to={curso.link} className={styles.continueBtn}>Revisar / Certificado</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default MeusCursos;
