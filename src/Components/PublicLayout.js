import React from 'react';
import { Outlet } from 'react-router-dom';  // Isso permite o conteúdo dinâmico da página ser carregado aqui

const PublicLayout = () => {
  return (
    <div>
      {/* A estrutura do layout (NavBar já foi carregado no App.js) */}
      <main>
        <Outlet /> {/* Exibe o conteúdo da página (Home, Cursos, etc.) aqui */}
      </main>
    </div>
  );
};

export default PublicLayout;
