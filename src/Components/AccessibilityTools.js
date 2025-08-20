// AccessibilityTools.js
import React, { useState, useEffect } from "react";

export default function AccessibilityTools() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  const aumentarFonte = () => setFontSize(prev => prev + 2);
  const diminuirFonte = () => setFontSize(prev => (prev > 10 ? prev - 2 : prev));
  const fontePadrao = () => setFontSize(16);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.backgroundColor = highContrast ? "#000" : "#fff";
    document.body.style.color = highContrast ? "#ff0" : "#000";
    document.body.style.transition = "all 0.3s ease";
  }, [fontSize, highContrast]);

  return (
    <>
      {/* Menu de acessibilidade fixo */}
      <div style={{
        position: "fixed",
        top: "90px",
        right: "20px",
        backgroundColor: "#120161",
        color: "white",
        borderRadius: "12px",
        padding: "12px",
        zIndex: 998,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
      }}>
        <button style={buttonStyle} onClick={aumentarFonte}>A+</button>
        <button style={buttonStyle} onClick={diminuirFonte}>A-</button>
        <button style={buttonStyle} onClick={fontePadrao}>A (Padrão)</button>
        <button
          style={{ ...buttonStyle, backgroundColor: highContrast ? "#ff0" : "#000", color: highContrast ? "#000" : "#ff0" }}
          onClick={() => setHighContrast(!highContrast)}
        >
          {highContrast ? "Normal" : "Alto Contraste"}
        </button>
      </div>

      {/* Botão voltar ao topo */}
      <button
        onClick={scrollToTop}
        style={{
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
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = "#0a0140"}
        onMouseOut={e => e.currentTarget.style.backgroundColor = "#120161"}
      >
        ⬆
      </button>
    </>
  );
}

const buttonStyle = {
  padding: "6px 12px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  backgroundColor: "#fff",
  color: "#120161",
  transition: "all 0.2s ease",
};
