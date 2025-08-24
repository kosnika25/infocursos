// VLibrasManager.js - Gerenciador completo do VLibras para React 19
export const VLIBRAS_CONFIG = {
  scriptUrl: 'https://vlibras.gov.br/app/vlibras-plugin.js',
  serviceUrl: 'https://vlibras.gov.br/app',
  timeout: 15000,
  retryInterval: 200,
  maxRetries: 3,
};

class VLibrasManager {
  constructor() {
    this.scriptLoaded = false;
    this.widgetInitialized = false;
    this.initAttempts = 0;
    this.retryTimeouts = [];
  }

  // Limpar todos os timeouts ativos
  clearTimeouts() {
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
    this.retryTimeouts = [];
  }

  // Injetar estilos CSS necessários
  injectStyles() {
    const styleId = 'vlibras-enhanced-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        /* VLibras - Estilos aprimorados */
        [vw] {
          position: fixed !important;
          z-index: 2147483647 !important;
          pointer-events: none !important;
        }
        
        [vw-access-button] {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          z-index: 2147483647 !important;
          cursor: pointer !important;
          pointer-events: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 64px !important;
          height: 64px !important;
          border-radius: 50% !important;
          background: linear-gradient(135deg, #1976d2, #1565c0) !important;
          box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4) !important;
          border: 2px solid #fff !important;
          outline: none !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
          user-select: none !important;
        }
        
        [vw-access-button]:hover {
          background: linear-gradient(135deg, #1565c0, #0d47a1) !important;
          box-shadow: 0 6px 16px rgba(25, 118, 210, 0.5) !important;
          transform: scale(1.05) translateY(-2px) !important;
        }
        
        [vw-access-button]:active {
          transform: scale(0.95) !important;
        }
        
        [vw-plugin-wrapper] {
          position: fixed !important;
          z-index: 2147483646 !important;
          pointer-events: auto !important;
        }
        
        .vw-plugin-top-wrapper {
          z-index: 2147483645 !important;
          position: relative !important;
        }
        
        /* Ícone personalizado */
        [vw-access-button]::before {
          content: "♿" !important;
          color: white !important;
          font-size: 28px !important;
          font-weight: bold !important;
          text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;
        }
        
        /* Animação de carregamento */
        [vw-access-button].loading::before {
          content: "⟳" !important;
          animation: vlibras-spin 1s linear infinite !important;
        }
        
        @keyframes vlibras-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Tooltip */
        [vw-access-button]:hover::after {
          content: "VLibras - Tradução para Libras" !important;
          position: absolute !important;
          bottom: 72px !important;
          right: 0 !important;
          background: rgba(0, 0, 0, 0.8) !important;
          color: white !important;
          padding: 8px 12px !important;
          border-radius: 6px !important;
          font-size: 12px !important;
          white-space: nowrap !important;
          opacity: 0 !important;
          animation: vlibras-tooltip 0.3s ease forwards !important;
        }
        
        @keyframes vlibras-tooltip {
          to { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
      console.log('✅ Estilos VLibras injetados');
    }
  }

  // Carregar script do VLibras
  loadScript() {
    return new Promise((resolve, reject) => {
      if (this.scriptLoaded || window.VLibras || document.querySelector('script[src*="vlibras-plugin.js"]')) {
        console.log('📦 Script VLibras já carregado');
        this.scriptLoaded = true;
        resolve(true);
        return;
      }

      console.log('📥 Carregando script VLibras...');
      
      const script = document.createElement('script');
      script.src = VLIBRAS_CONFIG.scriptUrl;
      script.async = true;
      script.crossOrigin = 'anonymous';
      
      const timeout = setTimeout(() => {
        console.error('⏰ Timeout ao carregar script VLibras');
        reject(new Error('Timeout loading VLibras script'));
      }, VLIBRAS_CONFIG.timeout);
      
      script.onload = () => {
        clearTimeout(timeout);
        console.log('✅ Script VLibras carregado com sucesso');
        this.scriptLoaded = true;
        resolve(true);
      };
      
      script.onerror = (error) => {
        clearTimeout(timeout);
        console.error('❌ Erro ao carregar script VLibras:', error);
        reject(error);
      };

      document.head.appendChild(script);
    });
  }

  // Aguardar VLibras estar disponível
  waitForVLibras() {
    return new Promise((resolve) => {
      if (window.VLibras && typeof window.VLibras.Widget === 'function') {
        resolve(true);
        return;
      }

      let attempts = 0;
      const maxAttempts = VLIBRAS_CONFIG.timeout / VLIBRAS_CONFIG.retryInterval;

      const checkInterval = setInterval(() => {
        attempts++;
        
        if (window.VLibras && typeof window.VLibras.Widget === 'function') {
          clearInterval(checkInterval);
          console.log('✅ VLibras disponível após', attempts, 'tentativas');
          resolve(true);
        } else if (attempts >= maxAttempts) {
          clearInterval(checkInterval);
          console.warn('⚠️ VLibras não disponível após timeout');
          resolve(false);
        }
      }, VLIBRAS_CONFIG.retryInterval);
    });
  }

  // Limpar elementos VLibras existentes (exceto os do HTML)
  clearExistingElements() {
    // Não remover elementos que estão no HTML original
    const dynamicElements = document.querySelectorAll('[vw]:not(.from-html), .vlibras-widget, #vlibras-widget');
    dynamicElements.forEach(element => {
      try {
        element.remove();
      } catch (e) {
        // Ignorar erros de remoção
      }
    });
    console.log('🧹 Elementos VLibras dinâmicos removidos');
  }

  // Usar ou criar estrutura DOM do VLibras
  createVLibrasStructure() {
    // Verificar se já existe estrutura no HTML
    let vlibrasDiv = document.querySelector('[vw]');
    let accessButton = document.querySelector('[vw-access-button]');
    let pluginWrapper = document.querySelector('[vw-plugin-wrapper]');
    let topWrapper = document.querySelector('.vw-plugin-top-wrapper');

    if (vlibrasDiv && accessButton && pluginWrapper && topWrapper) {
      console.log('🔍 Usando estrutura VLibras existente do HTML');
      
      // Marcar como vinda do HTML para não remover
      vlibrasDiv.classList.add('from-html');
      
      // Configurar botão existente
      this.configureExistingButton(accessButton);
      
      // Configurar wrapper existente
      this.configureExistingWrapper(pluginWrapper, topWrapper);
      
      return { vlibrasDiv, accessButton, pluginWrapper, topWrapper };
    } else {
      console.log('🏗️ Criando nova estrutura VLibras...');
      
      // Criar elemento principal
      vlibrasDiv = document.createElement('div');
      vlibrasDiv.setAttribute('vw', '');
      vlibrasDiv.className = 'enabled';
      
      // Botão de acesso
      accessButton = document.createElement('div');
      accessButton.setAttribute('vw-access-button', '');
      accessButton.className = 'active';
      this.configureExistingButton(accessButton);
      
      // Plugin wrapper
      pluginWrapper = document.createElement('div');
      pluginWrapper.setAttribute('vw-plugin-wrapper', '');
      
      // Top wrapper
      topWrapper = document.createElement('div');
      topWrapper.className = 'vw-plugin-top-wrapper';
      
      this.configureExistingWrapper(pluginWrapper, topWrapper);
      
      // Montar estrutura
      pluginWrapper.appendChild(topWrapper);
      vlibrasDiv.appendChild(accessButton);
      vlibrasDiv.appendChild(pluginWrapper);
      
      // Adicionar ao body
      document.body.appendChild(vlibrasDiv);
      
      console.log('🏗️ Nova estrutura DOM VLibras criada');
      return { vlibrasDiv, accessButton, pluginWrapper, topWrapper };
    }
  }

  // Configurar botão existente
  configureExistingButton(button) {
    button.setAttribute('title', 'VLibras - Tradução para Libras');
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
    button.setAttribute('aria-label', 'Ativar tradução para Libras');
    
    // Adicionar ícone se não existir
    if (!button.innerHTML.trim()) {
      button.innerHTML = '<div style="color: white; font-size: 28px; font-weight: bold;">♿</div>';
    }
    
    console.log('✅ Botão VLibras configurado');
  }

  // Configurar wrapper existente
  configureExistingWrapper(pluginWrapper, topWrapper) {
    pluginWrapper.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      pointer-events: none !important;
      z-index: 2147483646 !important;
    `;
    
    topWrapper.style.cssText = `
      position: relative !important;
      width: 100% !important;
      height: 100% !important;
      pointer-events: auto !important;
      display: none !important;
    `;
    
    // Adicionar container do avatar se não existir
    if (!topWrapper.querySelector('.vw-avatar-container')) {
      const avatarArea = document.createElement('div');
      avatarArea.className = 'vw-avatar-container';
      avatarArea.style.cssText = `
        position: fixed !important;
        bottom: 100px !important;
        right: 20px !important;
        width: 250px !important;
        height: 250px !important;
        background: rgba(255, 255, 255, 0.95) !important;
        border-radius: 15px !important;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3) !important;
        pointer-events: auto !important;
        z-index: 2147483647 !important;
        border: 2px solid #1976d2 !important;
      `;
      topWrapper.appendChild(avatarArea);
    }
    
    console.log('✅ Wrapper VLibras configurado');
  }

  // Inicializar widget VLibras
  async initializeWidget() {
    if (this.widgetInitialized) {
      console.log('✅ Widget VLibras já inicializado');
      return true;
    }

    try {
      this.initAttempts++;
      console.log(`🚀 Inicializando VLibras (tentativa ${this.initAttempts})...`);

      // Injetar estilos
      this.injectStyles();

      // Carregar script
      await this.loadScript();

      // Aguardar VLibras estar disponível
      const isAvailable = await this.waitForVLibras();
      
      if (!isAvailable) {
        throw new Error('VLibras não está disponível');
      }

      // Limpar elementos dinâmicos existentes
      this.clearExistingElements();

      // Aguardar um pouco antes de configurar estrutura
      await new Promise(resolve => setTimeout(resolve, 300));

      // Configurar ou criar estrutura DOM
      const { accessButton, pluginWrapper, topWrapper } = this.createVLibrasStructure();

      // Aguardar estrutura estar pronta
      await new Promise(resolve => setTimeout(resolve, 500));

      // Inicializar o widget VLibras PRIMEIRO
      console.log('🎯 Criando instância VLibras.Widget...');
      const widget = new window.VLibras.Widget(VLIBRAS_CONFIG.serviceUrl);
      
      // Salvar referência do widget
      this.widget = widget;

      // Aguardar inicialização do widget
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Tentar encontrar elementos criados pelo VLibras oficial
      await this.integrateWithOfficialVLibras();

      // Configurar interação do botão
      this.setupButtonInteraction(accessButton);
      
      // Configurar sistema de toggle que funciona com VLibras real
      this.setupManualToggle(accessButton, topWrapper);
      
      console.log('✅ VLibras inicializado e botão configurado!');
      this.widgetInitialized = true;
      
      // Verificar funcionalidade
      setTimeout(() => {
        this.verifyFunctionality();
      }, 1000);
      
      return true;

    } catch (error) {
      console.error(`❌ Erro na tentativa ${this.initAttempts}:`, error);
      
      if (this.initAttempts < VLIBRAS_CONFIG.maxRetries) {
        const retryDelay = 3000 * this.initAttempts; // Delay crescente
        console.log(`🔄 Tentando novamente em ${retryDelay}ms...`);
        
        const timeout = setTimeout(() => {
          this.widgetInitialized = false; // Reset para permitir nova tentativa
          this.initializeWidget();
        }, retryDelay);
        
        this.retryTimeouts.push(timeout);
      } else {
        console.error('❌ Falha ao inicializar VLibras após', VLIBRAS_CONFIG.maxRetries, 'tentativas');
      }
      
      return false;
    }
  }

  // Configurar interação do botão
  setupButtonInteraction(button) {
    // Adicionar eventos de acessibilidade
    button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.handleButtonClick();
      }
    });

    // Interceptar cliques para debug
    button.addEventListener('click', (e) => {
      console.log('🖱️ Botão VLibras clicado');
      this.handleButtonClick();
    });

    // Garantir estilos corretos
    button.style.cssText = `
      position: fixed !important;
      bottom: 20px !important;
      right: 20px !important;
      z-index: 2147483647 !important;
      cursor: pointer !important;
      pointer-events: auto !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 64px !important;
      height: 64px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #1976d2, #1565c0) !important;
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4) !important;
      border: 2px solid #fff !important;
      outline: none !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    `;

    console.log('✅ Botão VLibras configurado com eventos');
  }

  // Configurar sistema de toggle que usa o VLibras real
  setupManualToggle(button, topWrapper) {
    let isActive = false;
    
    const toggleVLibras = () => {
      try {
        console.log('🎯 Toggling VLibras...', isActive ? 'OFF' : 'ON');
        
        if (!isActive) {
          // Ativar VLibras - Usar o sistema original do VLibras
          console.log('🟢 Ativando VLibras real...');
          
          // Tentar usar a função original do VLibras se disponível
          if (window.VLibras && window.VLibras.Widget && window.VLibras.Widget.show) {
            window.VLibras.Widget.show();
          }
          
          // Também ativar manualmente o plugin
          this.activateVLibrasPlugin(topWrapper);
          
          button.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';
          button.classList.add('active');
          isActive = true;
          
        } else {
          // Desativar VLibras
          console.log('🔴 Desativando VLibras...');
          
          if (window.VLibras && window.VLibras.Widget && window.VLibras.Widget.hide) {
            window.VLibras.Widget.hide();
          }
          
          topWrapper.style.display = 'none';
          button.style.background = 'linear-gradient(135deg, #1976d2, #1565c0)';
          button.classList.remove('active');
          isActive = false;
        }
        
      } catch (error) {
        console.error('❌ Erro no toggle:', error);
        this.fallbackToggle(button, topWrapper);
      }
    };
    
    // Remover listeners antigos
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
    
    // Adicionar novo listener
    newButton.addEventListener('click', toggleVLibras);
    newButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleVLibras();
      }
    });
    
    console.log('✅ Sistema de toggle VLibras real configurado');
  }

  // Ativar plugin VLibras original
  activateVLibrasPlugin(topWrapper) {
    try {
      // Mostrar o wrapper principal
      topWrapper.style.display = 'block';
      
      // Carregar iframe do VLibras se não existe
      const avatarContainer = topWrapper.querySelector('.vw-avatar-container');
      if (avatarContainer && !avatarContainer.querySelector('iframe')) {
        console.log('📺 Carregando iframe do VLibras...');
        
        // Criar iframe do VLibras
        const iframe = document.createElement('iframe');
        iframe.src = 'https://vlibras.gov.br/app/vlibras-plugin.html';
        iframe.style.cssText = `
          width: 100% !important;
          height: 100% !important;
          border: none !important;
          border-radius: 15px !important;
          background: transparent !important;
        `;
        iframe.setAttribute('allow', 'camera; microphone; display-capture');
        iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms');
        
        // Limpar container e adicionar iframe
        avatarContainer.innerHTML = '';
        avatarContainer.appendChild(iframe);
        
        // Adicionar botão de fechar
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.style.cssText = `
          position: absolute !important;
          top: 5px !important;
          right: 5px !important;
          width: 30px !important;
          height: 30px !important;
          border: none !important;
          background: rgba(0,0,0,0.7) !important;
          color: white !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          font-size: 16px !important;
          font-weight: bold !important;
          z-index: 2147483648 !important;
        `;
        closeButton.onclick = () => {
          topWrapper.style.display = 'none';
          const button = document.querySelector('[vw-access-button]');
          if (button) {
            button.style.background = 'linear-gradient(135deg, #1976d2, #1565c0)';
            button.classList.remove('active');
          }
        };
        
        avatarContainer.appendChild(closeButton);
        
        console.log('✅ Iframe VLibras carregado');
      }
      
    } catch (error) {
      console.error('❌ Erro ao ativar plugin:', error);
      this.fallbackActivation(topWrapper);
    }
  }

  // Fallback para ativação
  fallbackActivation(topWrapper) {
    console.log('🔄 Usando fallback para VLibras...');
    
    topWrapper.style.display = 'block';
    const avatarContainer = topWrapper.querySelector('.vw-avatar-container');
    
    if (avatarContainer) {
      avatarContainer.innerHTML = `
        <div style="
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #1976d2;
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 20px;
          box-sizing: border-box;
          background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
          border-radius: 15px;
        ">
          <div style="font-size: 48px; margin-bottom: 10px; animation: pulse 2s infinite;">🤟</div>
          <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">VLibras Ativo</div>
          <div style="font-size: 12px; color: #666; margin-bottom: 10px;">Serviço de tradução para Libras</div>
          <div style="font-size: 10px; color: #999;">Conectando ao servidor VLibras...</div>
          <button onclick="this.parentElement.parentElement.parentElement.style.display='none'; document.querySelector('[vw-access-button]').style.background='linear-gradient(135deg, #1976d2, #1565c0)';" 
                  style="
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    width: 25px;
                    height: 25px;
                    border: none;
                    background: rgba(0,0,0,0.7);
                    color: white;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 14px;
                  ">×</button>
        </div>
        <style>
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        </style>
      `;
    }
  }

  // Fallback toggle
  fallbackToggle(button, topWrapper) {
    const isCurrentlyActive = button.classList.contains('active');
    
    if (!isCurrentlyActive) {
      this.fallbackActivation(topWrapper);
      button.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';
      button.classList.add('active');
    } else {
      topWrapper.style.display = 'none';
      button.style.background = 'linear-gradient(135deg, #1976d2, #1565c0)';
      button.classList.remove('active');
    }
  }

  // Integrar com VLibras oficial
  async integrateWithOfficialVLibras() {
    console.log('🔗 Tentando integrar com VLibras oficial...');
    
    // Procurar por elementos criados pelo VLibras oficial
    const checkForOfficialElements = () => {
      const officialButton = document.querySelector('[vw-access-button]');
      const officialWrapper = document.querySelector('[vw-plugin-wrapper]');
      
      if (officialButton && officialWrapper) {
        console.log('✅ Elementos oficiais do VLibras encontrados');
        
        // Interceptar cliques no botão oficial
        officialButton.addEventListener('click', (e) => {
          console.log('🖱️ Clique interceptado no botão oficial VLibras');
          // Permitir que o VLibras oficial processe o clique
          setTimeout(() => {
            this.checkOfficialState();
          }, 500);
        });
        
        return true;
      }
      return false;
    };
    
    // Tentar encontrar elementos por até 5 segundos
    let attempts = 0;
    const maxAttempts = 25;
    
    const findElements = setInterval(() => {
      attempts++;
      
      if (checkForOfficialElements() || attempts >= maxAttempts) {
        clearInterval(findElements);
        
        if (attempts < maxAttempts) {
          console.log('✅ Integração com VLibras oficial bem-sucedida');
        } else {
          console.log('⚠️ VLibras oficial não encontrado, usando fallback');
        }
      }
    }, 200);
  }

  // Verificar estado do VLibras oficial
  checkOfficialState() {
    try {
      const wrapper = document.querySelector('[vw-plugin-wrapper]');
      const button = document.querySelector('[vw-access-button]');
      
      if (wrapper && button) {
        const isVisible = window.getComputedStyle(wrapper).display !== 'none';
        
        if (isVisible) {
          console.log('🟢 VLibras oficial ativado');
          button.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';
        } else {
          console.log('🔴 VLibras oficial desativado');
          button.style.background = 'linear-gradient(135deg, #1976d2, #1565c0)';
        }
      }
    } catch (error) {
      console.error('❌ Erro ao verificar estado oficial:', error);
    }
  }

  // Lidar com clique no botão (método obsoleto, mantido para compatibilidade)
  handleButtonClick() {
    console.log('🎯 Clique detectado - usando sistema de toggle manual');
  }

  // Forçar ativação do plugin
  forcePluginActivation() {
    try {
      console.log('🔧 Forçando ativação do VLibras...');
      
      if (window.VLibras && window.VLibras.Widget) {
        // Tentar recriar o widget
        new window.VLibras.Widget(VLIBRAS_CONFIG.serviceUrl);
        
        setTimeout(() => {
          const wrapper = document.querySelector('[vw-plugin-wrapper] .vw-plugin-top-wrapper');
          if (wrapper) {
            wrapper.style.display = 'block';
            console.log('✅ VLibras forçado a ativar');
          }
        }, 1000);
      }
    } catch (error) {
      console.error('❌ Erro ao forçar ativação:', error);
    }
  }

  // Verificar funcionalidade
  verifyFunctionality() {
    const button = document.querySelector('[vw-access-button]');
    const wrapper = document.querySelector('[vw-plugin-wrapper]');
    
    console.log('🔍 Verificando funcionalidade VLibras:');
    console.log('- Botão presente:', !!button);
    console.log('- Wrapper presente:', !!wrapper);
    console.log('- Script carregado:', !!window.VLibras);
    console.log('- Widget disponível:', !!(window.VLibras && window.VLibras.Widget));
    
    if (button && wrapper && window.VLibras) {
      console.log('✅ VLibras parece estar funcionando corretamente');
    } else {
      console.warn('⚠️ Possíveis problemas detectados no VLibras');
    }
  }

  // Destruir instância
  destroy() {
    this.clearTimeouts();
    this.clearExistingElements();
    
    // Remover estilos
    const style = document.getElementById('vlibras-enhanced-styles');
    if (style) {
      style.remove();
    }
    
    this.scriptLoaded = false;
    this.widgetInitialized = false;
    this.initAttempts = 0;
    
    console.log('🗑️ VLibrasManager destruído');
  }

  // Verificar se está ativo
  isActive() {
    return !!(window.VLibras && document.querySelector('[vw-access-button]'));
  }

  // Toggle do widget
  toggle() {
    const button = document.querySelector('[vw-access-button]');
    if (button) {
      button.click();
      console.log('🔄 VLibras toggled');
      return true;
    }
    console.warn('⚠️ Botão VLibras não encontrado para toggle');
    return false;
  }
}

// Instância singleton
export const vlibrasManager = new VLibrasManager();

// Funções de conveniência
export const initVLibras = () => vlibrasManager.initializeWidget();
export const destroyVLibras = () => vlibrasManager.destroy();
export const toggleVLibras = () => vlibrasManager.toggle();
export const isVLibrasActive = () => vlibrasManager.isActive();