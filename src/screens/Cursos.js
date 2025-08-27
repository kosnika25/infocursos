// src/screens/Cursos.js
import React from "react";
import "./Cursos.module.css";

function Cursos() {
  return (
    <div className="cursos-container">
      <h1 className="titulo">Nossos Cursos</h1>
      <div className="cursos-grid">
        {/* Engenharia de Software */}
        <div className="curso-card">
          <img
            src={`${process.env.PUBLIC_URL}/images/engenharia-software.jpg`}
            alt="Engenharia de Software"
          />
          <h2>Engenharia de Software</h2>
        </div>

        {/* Gestão de TI */}
        <div className="curso-card">
          <img
            src={`${process.env.PUBLIC_URL}/images/gestao-ti.webp`}
            alt="Gestão de TI"
          />
          <h2>Gestão de TI</h2>
        </div>

        {/* Sistemas para Internet */}
        <div className="curso-card">
          <img
            src={`${process.env.PUBLIC_URL}/images/sistemas-internet.jpg`}
            alt="Sistemas para Internet"
          />
          <h2>Sistemas para Internet</h2>
        </div>

        {/* Análise e Desenvolvimento de Sistemas */}
        <div className="curso-card">
          <img
            src={`${process.env.PUBLIC_URL}/images/analise-sistemas.jpg`}
            alt="Análise e Desenvolvimento de Sistemas"
          />
          <h2>Análise e Desenvolvimento de Sistemas</h2>
        </div>

        {/* Banco de Dados */}
        <div className="curso-card">
          <img
            src={`${process.env.PUBLIC_URL}/images/banco-dados.jpg`}
            alt="Banco de Dados"
          />
          <h2>Banco de Dados</h2>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
