import { useEffect, useCallback } from 'react';

/**
 * Hook personalizado para gerenciar o VLibras
 */
export const useVLibras = () => {
  // Função para forçar atualização do VLibras
  const updateVLibras = useCallback(() => {
    console.log('Atualizando VLibras...');
    
    if (window.VLibras) {
      try {
        const button = document.querySelector('[vw-access-button]');
        if (button) {
          // Garantir que o botão está visível e posicionado corretamente
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
          `;
          console.log('✅ VLibras atualizado');
        } else {
          console.warn('⚠️ Botão VLibras não encontrado para atualização');
        }
      } catch (error) {
        console.warn('⚠️ Erro ao atualizar VLibras:', error);
      }
    } else {
      console.warn('⚠️ VLibras não está disponível para atualização');
    }
  }, []);

  // Função para verificar se o VLibras está ativo
  const isVLibrasActive = useCallback(() => {
    const isActive = !!(window.VLibras && document.querySelector('[vw-access-button]'));
    console.log('VLibras ativo:', isActive);
    return isActive;
  }, []);

  // Função para mostrar/ocultar o VLibras
  const showVLibras = useCallback(() => {
    const vlibrasElements = document.querySelectorAll('[vw]');
    vlibrasElements.forEach(element => {
      element.style.display = 'block';
    });
    console.log('VLibras mostrado');
  }, []);

  const hideVLibras = useCallback(() => {
    const vlibrasElements = document.querySelectorAll('[vw]');
    vlibrasElements.forEach(element => {
      element.style.display = 'none';
    });
    console.log('VLibras ocultado');
  }, []);

  // Função para toggle do VLibras
  const toggleVLibras = useCallback(() => {
    if (window.VLibras) {
      try {
        const button = document.querySelector('[vw-access-button]');
        if (button) {
          button.click();
          console.log('VLibras toggled');
        }
      } catch (error) {
        console.warn('Erro ao alternar VLibras:', error);
      }
    }
  }, []);

  // Função para recarregar completamente o VLibras
  const reloadVLibras = useCallback(() => {
    console.log('Recarregando VLibras...');
    
    // Remover elementos existentes
    const existingElements = document.querySelectorAll('[vw]');
    existingElements.forEach(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

    // Aguardar um pouco e tentar recriar
    setTimeout(() => {
      if (window.VLibras) {
        try {
          // Criar nova estrutura
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
          
          document.body.appendChild(vlibrasDiv);

          // Reinicializar
          new window.VLibras.Widget('https://vlibras.gov.br/app');
          
          console.log('✅ VLibras recarregado');
        } catch (error) {
          console.error('❌ Erro ao recarregar VLibras:', error);
        }
      }
    }, 1000);
  }, []);

  return {
    updateVLibras,
    isVLibrasActive,
    toggleVLibras,
    showVLibras,
    hideVLibras,
    reloadVLibras
  };
};