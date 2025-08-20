// Libras.js
import { useEffect } from "react";

export default function Libras() {
  useEffect(() => {
    // Evita adicionar o script múltiplas vezes
    if (document.getElementById("vlibras-script")) return;

    const script = document.createElement("script");
    script.id = "vlibras-script";
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;
    script.onload = () => {
      if (window.VLibras) new window.VLibras.Widget("https://vlibras.gov.br/app");
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      {...{ vw: "true" }}
      className="enabled"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 999
      }}
    >
      <div {...{ "vw-access-button": "true" }} className="active"></div>
      <div {...{ "vw-plugin-wrapper": "true" }}>
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
