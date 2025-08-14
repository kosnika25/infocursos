import React from 'react';
import styles from './FooterModule.css'; // Estilo do rodapé

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2023 Plataforma de Cursos de TI. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
