import { useEffect, useRef } from 'react';

const VLibrasWidget = () => {
  const scriptLoadedRef = useRef(false);
  const widgetInitializedRef = useRef(false);

  useEffect(() => {
    const loadVLibrasScript = () => {
      return new Promise((resolve, reject) => {
        // Verificar se o script já foi carregado
        if (scriptLoadedRef.current || document.querySelector('script[src*="vlibras-plugin.js"]')) {
          console.log('VLibras script já carregado');
          resolve();
          return;
        }

        console.log('Carregando script do VLibras...');
        
        const script = document.createElement('script');
        script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          console.log('✅ Script VLibras carregado com sucesso');
          scriptLoadedRef.current = true;
          resolve();
        };
        
        script.onerror = (error) => {
          console.error('❌ Erro ao carregar script VLibras:', error);
          reject(error);
        };

        document.head.appendChild(script);
      });
    };

    const initializeVLibras = async () => {
      try {
        // Se já foi inicializado, não fazer novamente
        if (widgetInitializedRef.current) {
          console.log('VLibras já inicializado');
          return;
        }

        // Aguardar o script carregar
        await loadVLibrasScript();

        // Aguardar um pouco para garantir que o VLibras está disponível
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Verificar se window.VLibras está disponível
        if (!window.VLibras) {
          throw new Error('window.VLibras não está disponível');
        }

        console.log('Inicializando VLibras Widget...');

        // Limpar qualquer inicialização anterior
        const existingElements = document.querySelectorAll('[vw]');
        existingElements.forEach(el => {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });

        // Criar nova estrutura do VLibras
        const vlibrasDiv = document.createElement('div');
        vlibrasDiv.setAttribute('vw', '');
        vlibrasDiv.className = 'enabled';
        
        const accessButton = document.createElement('div');
        accessButton.setAttribute('vw-access-button', '');
        accessButton.className = 'active';
        
        const pluginWrapper = document.createElement('div');
        pluginWrapper.setAttribute('vw-plugin-wrapper', '');
        
        const topWrapper = document.createElement('div');
        topWrapper.className = 'vw-plugin-top-wrapper';
        
        pluginWrapper.appendChild(topWrapper);
        vlibrasDiv.appendChild(accessButton);
        vlibrasDiv.appendChild(pluginWrapper);
        
        // Adicionar ao body
        document.body.appendChild(vlibrasDiv);

        // Inicializar o widget
        new window.VLibras.Widget('https://vlibras.gov.br/app');
        
        widgetInitializedRef.current = true;
        
        console.log('✅ VLibras inicializado com sucesso!');

        // Verificar se o botão apareceu e aplicar estilos
        setTimeout(() => {
          const button = document.querySelector('[vw-access-button]');
          if (button) {
            console.log('✅ Botão VLibras encontrado e configurado!');
            
            // Garantir estilos corretos
            button.style.cssText = `
              position: fixed !important;
              bottom: 20px !important;
              right: 20px !important;
              z-index: 999999 !important;
              cursor: pointer !important;
              display: block !important;
              width: 64px !important;
              height: 64px !important;
              border-radius: 50% !important;
              background: #1976d2 !important;
              box-shadow: 0 4px 8px rgba(0,0,0,0.3) !important;
              border: none !important;
              outline: none !important;
            `;

            // Adicionar ícone de acessibilidade
            if (!button.innerHTML) {
              button.innerHTML = `
                <div style="
                  color: white;
                  font-size: 28px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  height: 100%;
                  font-weight: bold;
                ">♿</div>
              `;
            }
          } else {
            console.warn('⚠️ Botão VLibras não encontrado após inicialização');
          }
        }, 2000);

      } catch (error) {
        console.error('❌ Erro ao inicializar VLibras:', error);
        
        // Tentar novamente após 3 segundos
        setTimeout(() => {
          console.log('🔄 Tentando inicializar VLibras novamente...');
          widgetInitializedRef.current = false;
          initializeVLibras();
        }, 3000);
      }
    };

    // Inicializar VLibras
    initializeVLibras();

    // Cleanup function
    return () => {
      console.log('VLibrasWidget: Limpeza...');
    };
  }, []);

  return null;
};

export default VLibrasWidget;