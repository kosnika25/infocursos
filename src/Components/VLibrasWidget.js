// VLibrasWidget.js - Componente VLibras otimizado para React 19
import { useEffect, useRef, createElement } from 'react';
import { vlibrasManager } from '../hooks/VLibrasManager';

const VLibrasWidget = () => {
  const mountedRef = useRef(false);
  const initializingRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    
    const initializeVLibras = async () => {
      // Evitar múltiplas inicializações simultâneas
      if (initializingRef.current || mountedRef.current) {
        console.log('VLibras: Inicialização já em andamento ou concluída');
        return;
      }

      initializingRef.current = true;
      console.log('VLibras: Iniciando inicialização...');

      try {
        // Aguardar DOM estar pronto
        if (document.readyState !== 'complete') {
          await new Promise(resolve => {
            if (document.readyState === 'complete') {
              resolve();
            } else {
              const handler = () => {
                if (document.readyState === 'complete') {
                  document.removeEventListener('readystatechange', handler);
                  resolve();
                }
              };
              document.addEventListener('readystatechange', handler);
            }
          });
        }

        // Aguardar um pouco mais para garantir estabilidade do React 19
        await new Promise(resolve => setTimeout(resolve, 500));

        if (!isMounted) {
          console.log('VLibras: Componente foi desmontado, cancelando inicialização');
          return;
        }

        // Inicializar VLibras
        const success = await vlibrasManager.initializeWidget();
        
        if (success && isMounted) {
          mountedRef.current = true;
          console.log('✅ VLibras Widget montado com sucesso');
        }

      } catch (error) {
        console.error('❌ Erro ao inicializar VLibras Widget:', error);
      } finally {
        initializingRef.current = false;
      }
    };

    // Inicializar após um pequeno delay para garantir que o React 19 terminou a renderização
    const initTimer = setTimeout(initializeVLibras, 100);

    // Cleanup
    return () => {
      isMounted = false;
      clearTimeout(initTimer);
      
      if (mountedRef.current) {
        console.log('VLibras Widget: Limpeza no desmonte');
        // Não destruir completamente, apenas marcar como desmontado
        mountedRef.current = false;
        initializingRef.current = false;
      }
    };
  }, []); // Array vazio para executar apenas uma vez

  // Não renderizar nada - o VLibras é adicionado diretamente ao body
  return null;
};

export default VLibrasWidget;