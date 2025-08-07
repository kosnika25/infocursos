// src/pages/login.js
import React from 'react';
import './LoginModule.css';

function LoginPage() {
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
                <div className="login-form">
                    <h1 className="page-title">Login</h1>
                    
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" required />
                        </div>
                        
                        <div className="form-actions">
                            <button type="submit" className="btn">Entrar</button>
                            <a href="/" className="btn btn-secondary">Cancelar</a>
                        </div>
                        
                        <div className="form-links">
                            <a href="/esqueci-senha">Esqueci minha senha</a>
                            <a href="/cadastro">Criar conta</a>
                        </div>
                    </form>
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2023 Plataforma de Cursos de TI. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

export default LoginPage;