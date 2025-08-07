// src/pages/portugol.js
import React from 'react';
import './PortugolModule.css';

function PortugolPage() {
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

            <main className="main-content content-page">
                <div className="content-header">
                    <div className="content-icon">📝</div>
                    <div>
                        <h1 className="content-title">O que é linguagem Portugol?</h1>
                        <p>Guia definitivo para iniciantes</p>
                    </div>
                </div>
                
                <div className="content-body">
                    <div className="content-image">
                        <img src="/images/portugol.webp" alt="Linguagem Portugol" />
                    </div>
                    
                    <div className="content-text">
                        <p>A programação é uma das habilidades mais importantes atualmente...</p>
                        <p>O Portugol é uma linguagem de programação educacional que utiliza comandos em português...</p>
                        <p>Com o Portugol, você pode aprender estruturas de controle como condicionais...</p>
                    </div>
                </div>
                
                <a href="/" className="btn">Voltar</a>
            </main>

            <footer className="footer">
                <p>&copy; 2023 Plataforma de Cursos de TI. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default PortugolPage;