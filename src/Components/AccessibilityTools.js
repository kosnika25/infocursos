import React, { useState, useEffect } from "react";

export default function AccessibilityTools() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const aumentarFonte = () => setFontSize(prev => prev + 2);
  const diminuirFonte = () => setFontSize(prev => (prev > 10 ? prev - 2 : prev));
  const fontePadrao = () => setFontSize(16);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    // Fundo preto ou branco
    document.body.style.backgroundColor = highContrast ? "#000" : "#fff";
    document.body.style.transition = "all 0.3s ease";

    // Texto normal: preto no modo alto contraste, branco no normal
    document.body.style.color = highContrast ? "#000" : "#000"; // no modo normal e alto contraste texto preto (ajustar se quiser)
    // Se quiser texto branco no normal: "#fff"

    // Fonte do texto normal: menor no alto contraste, ou controlado pelo fontSize
    document.body.style.fontSize = highContrast ? "12px" : `${fontSize}px`;

    // Títulos: brancos e grandes no alto contraste, pretos normais no modo normal
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach(heading => {
      heading.style.color = highContrast ? "#fff" : "#000";
      heading.style.fontSize = highContrast ? "24px" : ""; // padrão normal

    });
      // subtítulos (h2, h3, h4, h5, h6) preto no alto contraste, normal no normal
  const subtitles = document.querySelectorAll("h2, h3, h4, h5, h6");
  subtitles.forEach(subtitle => {
    subtitle.style.color = highContrast ? "#000" : "#000";
    subtitle.style.fontSize = highContrast ? "18px" : "";
  });

  }, [fontSize, highContrast]);

  return (
    <>
      {/* Botão de ativar acessibilidade */}
      <button
        onClick={() => setShowTools(prev => !prev)}
        aria-label="Abrir ferramentas de acessibilidade"
        title="Acessibilidade"
        style={accessButtonStyle}
      >
        🖐️
      </button>

      {/* Painel de acessibilidade */}
      {showTools && (
        <div style={panelStyle} aria-label="Ferramentas de acessibilidade">
          <button style={buttonStyle} onClick={aumentarFonte} aria-label="Aumentar fonte" title="Aumentar fonte">A+</button>
          <button style={buttonStyle} onClick={diminuirFonte} aria-label="Diminuir fonte" title="Diminuir fonte">A-</button>
          <button style={buttonStyle} onClick={fontePadrao} aria-label="Fonte padrão" title="Fonte padrão">A</button>

          <button
            style={{
              ...buttonStyle,
              backgroundColor: highContrast ? "#ff0" : "#000",
              color: highContrast ? "#000" : "#ff0",
            }}
            onClick={() => setHighContrast(!highContrast)}
            aria-label="Alternar alto contraste"
            title="Alto contraste"
          >
            ⬛
          </button>
        </div>
      )}

      {/* Botão voltar ao topo */}
      <button
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
        style={scrollButtonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = "#0a0140"}
        onMouseOut={e => e.currentTarget.style.backgroundColor = "#120161"}
      >
        ⬆
      </button>
    </>
  );
}

// Estilo do botão de acessibilidade
const accessButtonStyle = {
  position: "fixed",
  top: "100px",
  right: "20px",
  backgroundColor: "#120161",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  fontSize: "24px",
  cursor: "pointer",
  zIndex: 999,
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// Estilo do painel de acessibilidade
const panelStyle = {
  position: "fixed",
  top: "150px",
  right: "20px",
  backgroundColor: "#120161",
  color: "white",
  borderRadius: "12px",
  padding: "12px",
  zIndex: 998,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
};

// Estilo dos botões do painel
const buttonStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  backgroundColor: "#fff",
  color: "#120161",
  transition: "all 0.2s ease",
};

// Estilo do botão de voltar ao topo
const scrollButtonStyle = {
  position: "fixed",
  bottom: "80px",
  right: "30px",
  backgroundColor: "#120161",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  fontSize: "28px",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s ease",
};
