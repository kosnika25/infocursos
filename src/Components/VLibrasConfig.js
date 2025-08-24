export const VLIBRAS_CONFIG = {
  scriptUrl: 'https://vlibras.gov.br/app/vlibras-plugin.js',
  serviceUrl: 'https://vlibras.gov.br/app',
  timeout: 10000,
  retryInterval: 100,
};

export const injectVLibrasStyles = () => {
  const existingStyle = document.getElementById('vlibras-custom-styles');
  if (!existingStyle) {
    const style = document.createElement('style');
    style.id = 'vlibras-custom-styles';
    style.textContent = `
      [vw] {
        position: fixed !important;
        z-index: 999999 !important;
      }
      
      [vw-access-button] {
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        z-index: 999999 !important;
        cursor: pointer !important;
      }
      
      [vw-plugin-wrapper] {
        z-index: 999998 !important;
      }
      
      .vw-plugin-top-wrapper {
        z-index: 999997 !important;
      }
    `;
    document.head.appendChild(style);
  }
};

export const removeVLibrasStyles = () => {
  const style = document.getElementById('vlibras-custom-styles');
  if (style) {
    style.remove();
  }
};

export const checkVLibrasAvailability = () => {
  return new Promise((resolve) => {
    if (window.VLibras) {
      resolve(true);
      return;
    }

    let attempts = 0;
    const maxAttempts = VLIBRAS_CONFIG.timeout / VLIBRAS_CONFIG.retryInterval;

    const checkInterval = setInterval(() => {
      attempts++;
      
      if (window.VLibras) {
        clearInterval(checkInterval);
        resolve(true);
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval);
        resolve(false);
      }
    }, VLIBRAS_CONFIG.retryInterval);
  });
};
