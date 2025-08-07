
// src/pages/index.js
import React from 'react';
import './HomeModule.css';

function Home() {
    return (
        <div className="container">
            <header className="header">
                <nav className="nav">
                    <div className="logo">Cursos TI</div>
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/cursos">Cursos</a>
                        <a href="/noticias">Notícias</a>
                        <a href="/novidades">Novidades</a>
                        <a href="/contato">Contato</a>
                        <a href="/login">Login</a>
                    </div>
                </nav>
            </header>

            <main className="main-content">
                <section>
                    <h1 className="page-title">Bem-vindo à Plataforma de Cursos de TI</h1>

                    <div className="card">
                        <div className="card-header">
                            <div className="card-icon">👋</div>
                            <h2 className="card-title">Olá, Fabiano!</h2>
                        </div>
                        <div className="card-content">
                            <p>Bem-vindo(a) ao aplicativo de cursos da área de tecnologia da informação, onde você irá aprender
                                sobre as tecnologias emergentes do mercado de trabalho.</p>
                            <p>Explore os links e navegue conosco nesta jornada de aprendizado.</p>
                        </div>
                        <a href="/cursos" className="btn">Explorar Cursos</a>
                    </div>
                </section>

                <section>
                    <h2 className="section-title">Destaques</h2>

                    <div className="card">
                        <h3 className="card-title">O que é Tecnologia da Informação</h3>
                        <div className="card-content">
                            <p>A Tecnologia da Informação (TI) é um dos pilares fundamentais da era digital...</p>
                        </div>
                        <a href="/tecnologia-informacao" className="btn">Saiba mais</a>
                    </div>

                    <div className="card">
                        <h3 className="card-title">O que é linguagem Portugol?</h3>
                        <div className="card-content">
                            <p>A programação é uma das habilidades mais importantes atualmente...</p>
                        </div>
                        <a href="/portugol" className="btn">Saiba mais</a>
                    </div>

                    <div className="card">
                        <h3 className="card-title">O que são algoritmos?</h3>
                        <div className="card-content">
                            <p>Antes de tudo: um erro muito comum é confundir as palavras 'algoritmo' e 'logaritmo'...</p>
                        </div>
                        <a href="/algoritmos" className="btn">Saiba mais</a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2023 Plataforma de Cursos de TI. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default Home;