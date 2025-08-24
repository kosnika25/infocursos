// useVLibras.js - Hook personalizado para gerenciar VLibras no React 19
import { useCallback, useEffect, useRef } from 'react';
import { vlibrasManager } from './VLibrasManager.js';

export const useVLibras = () => {
  const lastLocationRef = useRef('');

  // Atualizar VLibras quando necessário
  const updateVLibras = useCallback(() => {
    console.log('useVLibras: Atualizando VLibras...');
    
    if (vlibrasManager.isActive()) {
      const button = document.querySelector('[vw-access-button]');
      if (button) {
        // Garantir que o botão está visível e acessível
        button.style.display = 'flex';
        button.style.pointerEvents = 'auto';
        console.log('✅ VLibras atualizado com sucesso');
      }
    } else {
      console.log('🔄 VLibras não ativo, tentando reiniicializar...');
      vlibrasManager.initializeWidget();
    }
  }, []);

  // Verificar se VLibras está ativo
  const isVLibrasActive = useCallback(() => {
    return vlibrasManager.isActive();
  }, []);

  // Toggle VLibras
  const toggleVLibras = useCallback(() => {
    return vlibrasManager.toggle();
  }, []);

  // Mostrar VLibras
  const showVLibras = useCallback(() => {
    const vlibrasElements = document.querySelectorAll('[vw]');
    vlibrasElements.forEach(element => {
      element.style.display = 'block';
    });
    console.log('VLibras: Mostrado');
  }, []);

  // Ocultar VLibras
  const hideVLibras = useCallback(() => {
    const vlibrasElements = document.querySelectorAll('[vw]');
    vlibrasElements.forEach(element => {
      element.style.display = 'none';
    });
    console.log('VLibras: Ocultado');
  }, []);

  // Reinicializar VLibras completamente
  const reinitializeVLibras = useCallback(async () => {
    console.log('useVLibras: Reinicializando VLibras...');
    
    try {
      // Destruir instância atual
      vlibrasManager.destroy();
      
      // Aguardar um pouco
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reinicializar
      const success = await vlibrasManager.initializeWidget();
      
      if (success) {
        console.log('✅ VLibras reinicializado com sucesso');
      } else {
        console.error('❌ Falha ao reinicializar VLibras');
      }
      
      return success;
    } catch (error) {
      console.error('❌ Erro ao reinicializar VLibras:', error);
      return false;
    }
  }, []);

  // Lidar com mudanças de rota
  const handleRouteChange = useCallback((location) => {
    if (location !== lastLocationRef.current) {
      lastLocationRef.current = location;
      
      // Aguardar um pouco antes de atualizar para permitir que a rota seja processada
      setTimeout(() => {
        updateVLibras();
      }, 300);
      
      console.log('useVLibras: Rota alterada para:', location);
    }
  }, [updateVLibras]);

  // Status detalhado do VLibras
  const getVLibrasStatus = useCallback(() => {
    const hasScript = !!window.VLibras;
    const hasButton = !!document.querySelector('[vw-access-button]');
    const hasWidget = !!document.querySelector('[vw]');
    
    return {
      hasScript,
      hasButton,
      hasWidget,
      isActive: hasScript && hasButton && hasWidget,
      isInitialized: vlibrasManager.widgetInitialized
    };
  }, []);

  return {
    // Funções principais
    updateVLibras,
    toggleVLibras,
    reinitializeVLibras,
    handleRouteChange,
    
    // Funções de visibilidade
    showVLibras,
    hideVLibras,
    
    // Funções de verificação
    isVLibrasActive,
    getVLibrasStatus,
    
    // Instância do manager para uso avançado
    vlibrasManager
  };
};

export default useVLibras;