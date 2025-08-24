import React from "react";
import styles from "./TelaPrincipal.module.css";

function TelaPricipal() {
  const cursos = [
    {
      id: 1,
      titulo: "Introdução à Programação",
      descricao: "Aprenda lógica e fundamentos da programação com exemplos práticos.",
      imagem: "/images/programacao.jpg",
    },
    {
      id: 2,
      titulo: "Redes de Computadores",
      descricao: "Entenda como funcionam redes, protocolos e segurança em TI.",
      imagem: "/images/redes.jpg",
    },
    {
      id: 3,
      titulo: "Inteligência Artificial",
      descricao: "Explore IA, aprendizado de máquina e suas aplicações no mercado.",
      imagem: "/images/ia.jpg",
    },
    {
      id: 4,
      titulo: "Desenvolvimento Web",
      descricao: "Aprenda a criar sites modernos usando HTML, CSS e JavaScript.",
      imagem: "/images/web.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Plataforma de Cursos de TI</h1>
        <p className={styles.subtitle}>
          Aprenda tecnologias modernas e avance na sua carreira em TI.
        </p>
        <a href="/login" className={styles.loginBtn}>
          Entrar / Cadastrar
        </a>
      </header>

      <main className={styles.mainContent}>
        <h2 className={styles.sectionTitle}>Cursos Disponíveis</h2>
        <div className={styles.courseGrid}>
          {cursos.map((curso) => (
            <div key={curso.id} className={styles.courseCard}>
              <div className={styles.courseImage}>
                <img src={curso.imagem} alt={curso.titulo} />
              </div>
              <div className={styles.courseInfo}>
                <h3 className={styles.courseTitle}>{curso.titulo}</h3>
                <p className={styles.courseDesc}>{curso.descricao}</p>
                <a href="/cursos" className={styles.continueBtn}>
                  Explorar Curso
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default TelaPricipal;
