

// Novidades.js
import React from 'react';
import styles from './Novidades.module.css'; // Crie o CSS correspondente
import AccessibilityTools from "../Components/AccessibilityTools";
import Libras from '../Components/VLibras';

function Novidades() {
  return (
    <div className={styles.container}>
      <AccessibilityTools />
      <Libras />

      <main className={styles.mainContent}>
        {/* Cabeçalho da página */}
        <div className={styles.contentHeader}>
          <div className={styles.contentIcon}>🌟</div>
          <div>
            <h1 className={styles.contentTitle}>Novidades</h1>
            <p>Fique por dentro das últimas atualizações</p>
          </div>
        </div>

        {/* Seção Lançamentos de Cursos */}
        <div className={styles.newsSection}>
          <h2>Lançamentos de Cursos</h2>
          <div className={styles.card}>
            <p>
              A educação está se transformando com novos cursos inovadores que atendem às necessidades emergentes do mercado de trabalho e às tendências tecnológicas atuais. Entre os lançamentos mais esperados, destacam-se os cursos de Inteligência Artificial Aplicada, Desenvolvimento de Realidade Aumentada e Gestão de Sustentabilidade Empresarial.
            </p>
            <p>
              O curso de Inteligência Artificial Aplicada oferece uma imersão prática nas tecnologias que estão moldando o futuro, capacitando os alunos a implementarem IA em diversos setores como saúde, finanças e marketing. Já o Desenvolvimento de Realidade Aumentada traz uma experiência única para quem deseja explorar as fronteiras da interação digital, permitindo a criação de aplicativos imersivos para entretenimento, educação e comércio.
            </p>
          </div>
        </div>

        {/* Seção Mentorias e Programas de Aceleração */}
        <div className={styles.newsSection}>
          <h2>Mentorias e Programas de Aceleração</h2>
          <div className={styles.card}>
            <p>
              Impulsione Sua Carreira com Orientação e Oportunidades Reais. A nova oferta de Mentorias e Programas de Aceleração foi criada para ajudar profissionais e estudantes a alcançar seu pleno potencial, com o apoio de especialistas renomados e oportunidades práticas no mercado.
            </p>
            <p>
              Esses programas têm como objetivo fornecer as ferramentas e o conhecimento necessários para que você se destaque em sua área de atuação. Mentoria Personalizada: Em nosso programa de Mentoria Personalizada, cada participante tem acesso a um mentor especializado em sua área de interesse, que irá guiá-lo de perto em sua jornada profissional. Seja para avançar em sua carreira, iniciar um negócio ou desenvolver habilidades específicas, nossas mentorias oferecem um espaço único para troca de experiências, conselhos estratégicos e insights valiosos. A mentoria é adaptada às suas necessidades, garantindo que você receba orientação prática e personalizada de profissionais experientes que estão no topo de seus campos.
            </p>
          </div>
        </div>

        {/* Seção Novos Métodos de Ensino */}
        <div className={styles.newsSection}>
          <h2>Novos Métodos de Ensino</h2>
          <div className={styles.card}>
            <p>
              O futuro da educação está se transformando com a implementação de novas metodologias que priorizam a interatividade, a personalização e a colaboração. O método de imersão digital permite aos estudantes vivenciar contextos antes inimagináveis, enquanto o aprendizado gamificado traz uma abordagem divertida e competitiva ao ensino, onde o aprendizado se dá de forma mais leve e engajante.
            </p>
            <p>
              Já o ensino modular e personalizado coloca o aluno no controle de sua jornada, oferecendo conteúdos sob medida e respeitando seu ritmo. Estes métodos não só tornam a aprendizagem mais eficaz, como também a tornam mais prazerosa, conectando o aluno com o conhecimento de uma forma única e inovadora.
            </p>
          </div>
        </div>

        {/* Botão voltar */}
        <a href="/" className={styles.btn}>Voltar</a>
      </main>
    </div>
  );
}

export default Novidades;

