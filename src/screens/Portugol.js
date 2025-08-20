// Portugol.js
import React from 'react';
import styles from './Portugol.module.css';
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/Libras';
import { Link } from 'react-router-dom';

function Portugol() {
    return (
        <div className={styles.container}>
            <AccessibilityTools />
            <Libras />

            <main className={`${styles.mainContent} ${styles.contentPage}`}>
                <div className={styles.contentHeader}>
                    <div className={styles.contentIcon}>📝</div>
                    <div>
                        <h1 className={styles.contentTitle}>O que é linguagem Portugol?</h1>
                        <p>Guia definitivo para iniciantes</p>
                    </div>
                </div>

                <div className={styles.contentBody}>
                    <div className={styles.contentImage}>
                        <img src="/images/portugol.webp" alt="Linguagem Portugol" />
                    </div>
                    <div className={styles.contentText}>
                        <p>A programação é uma das habilidades mais importantes atualmente. Hoje em dia, a tecnologia está presente em praticamente todos os aspectos da nossa vida, desde aplicativos de celular até sistemas complexos de inteligência artificial.<br></br>

                            O Portugol é uma linguagem de programação educacional que utiliza comandos em português para ensinar lógica de programação. Ele foi desenvolvido especificamente para ajudar iniciantes a entenderem os conceitos fundamentais da programação sem se preocupar com a sintaxe complexa de linguagens reais.<br></br>

                            Com o Portugol, você pode aprender estruturas de controle como condicionais (se-então-senão) e loops (enquanto, para), além de conceitos como variáveis, operadores e funções, tudo em um ambiente amigável e em português.</p>
                    </div>
                </div>

                <Link to="/" className={styles.btn}>Voltar</Link>
            </main>
        </div>
    );
}

export default Portugol;
