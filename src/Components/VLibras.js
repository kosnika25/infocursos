// src/Components/VLibras.js
import { useEffect } from "react";
import "./VLibras.module.css";

function VLibras() {
  useEffect(() => {
    // Verifica se o VLibras já foi carregado
    if (window.VLibras) {
      initVLibras();
      return;
    }

    // Cria o script do VLibras
    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    
    script.onload = () => {
      // Pequeno delay para garantir que o script foi completamente carregado
      setTimeout(() => {
        if (window.VLibras) {
          initVLibras();
        }
      }, 1000);
    };

    script.onerror = () => {
      console.error("Falha ao carregar o script do VLibras");
    };

    document.head.appendChild(script);

    // Remove o script quando o componente for desmontado
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const initVLibras = () => {
    try {
      // Destrói qualquer instância anterior
      if (window.vlibrasWidget) {
        window.vlibrasWidget.destroy();
      }
      
      // Cria nova instância
      window.vlibrasWidget = new window.VLibras.Widget({
        rootPath: "https://vlibras.gov.br/app",
        personalization: "https://vlibras.gov.br/app/configs",
        opacity: 0.9,
        position: "R",
        avatar: "random",
      });
      
      console.log("VLibras inicializado com sucesso");
    } catch (error) {
      console.error("Erro ao inicializar VLibras:", error);
    }
  };

  return (
    <div 
      vw="true" 
      vw-access-button="true" 
      vw-plugin-wrapper="true"
      className="vlibras-button-wrapper"
      style={{ position: 'relative' }}
    >
      <div id="vlibras-plugin"></div>
    </div>
  );
}

export default VLibras;