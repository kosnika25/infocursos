import React, { useState, useMemo } from "react";
import styles from "./TelaPrincipal.module.css";

function TelaPrincipal() {
  const imageSrc = (filename) => `${process.env.PUBLIC_URL}/${filename}`;

  const cursosBase = [
    {
      id: 1,
      titulo: "Engenharia de Software",
      categoria: "Desenvolvimento",
      descricao: "Aprenda a projetar e gerenciar sistemas de software eficientes e escaláveis.",
      descricaoCompleta: "O curso de Engenharia de Software abrange princípios de desenvolvimento, testes, arquitetura e metodologias ágeis. Ideal para quem busca atuar na construção de sistemas de qualidade.",
      imagem: imageSrc("Engenharia_de_Software.jpg"),
      duracao: "12 meses",
      nivel: "Avançado",
      rating: 4.8
    },
    {
      id: 2,
      titulo: "Algoritmos e Programação",
      categoria: "Fundamentos",
      descricao: "Aprenda lógica e estrutura de algoritmos com foco em resolução de problemas.",
      descricaoCompleta: "Este curso apresenta os fundamentos da lógica computacional e programação estruturada. Inclui variáveis, loops, funções, e análise de complexidade de algoritmos.",
      imagem: imageSrc("algoritmo.webp"),
      duracao: "6 meses",
      nivel: "Iniciante",
      rating: 4.6
    },
    {
      id: 3,
      titulo: "Sistemas para Internet",
      categoria: "Web",
      descricao: "Descubra como desenvolver e manter aplicações modernas para a web.",
      descricaoCompleta: "O curso de Sistemas para Internet forma profissionais capazes de criar sistemas e sites dinâmicos utilizando linguagens modernas e bancos de dados integrados.",
      imagem: imageSrc("Sistemas_para_Internet.jpg"),
      duracao: "10 meses",
      nivel: "Intermediário",
      rating: 4.7
    },
    {
      id: 4,
      titulo: "Gestão de TI",
      categoria: "Infraestrutura",
      descricao: "Entenda como gerenciar recursos e equipes de tecnologia da informação.",
      descricaoCompleta: "Gestão de TI aborda planejamento estratégico, governança e segurança da informação, preparando profissionais para liderar equipes e projetos tecnológicos.",
      imagem: imageSrc("Gestão_de_TI.webp"),
      duracao: "8 meses",
      nivel: "Intermediário",
      rating: 4.5
    },
  ];

  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [expanded, setExpanded] = useState({});
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const categorias = useMemo(() => {
    return ["Todas", ...Array.from(new Set(cursosBase.map((c) => c.categoria)))];
  }, []);

  const cursosFiltrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cursosBase.filter((c) => {
      const matchCat = categoria === "Todas" ? true : c.categoria === categoria;
      const matchQuery =
        q === "" ||
        c.titulo.toLowerCase().includes(q) ||
        c.descricao.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, categoria, cursosBase]);

  function toggleExpand(id) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  async function carregarMais() {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    setVisibleCount((v) => v + 8);
    setIsLoading(false);
  }

  const RatingStars = ({ rating }) => {
    return (
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`${styles.star} ${i < Math.floor(rating) ? styles.filled : ''}`}
          >
            ★
          </span>
        ))}
        <span className={styles.ratingValue}>({rating})</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {/* Banner Hero Compacto */}
    {/* Banner Hero Compacto */}
<section className={styles.heroSection}>
  <div className={styles.heroContainer}>
    <div className={styles.heroContent}>
      <div className={styles.heroBadge}>🚀 Plataforma Premium</div>
      <h1 className={styles.heroTitle}>
        <span className={styles.titleGradient}>InfoCursos</span>
        <span className={styles.titleSub}>Domine a Tecnologia</span>
      </h1>
      
      {/* Texto e Botões Alinhados */}
      <div className={styles.heroActionArea}>
        <p className={styles.heroSubtitle}>
          Cursos especializados de TI com experts do mercado. 
          <span className={styles.highlight}> Transforme sua carreira.</span>
        </p>
        <div className={styles.heroActions}>
          <a href="/cursos" className={styles.ctaPrimary}>
            <span>Explorar Cursos</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/cadastro" className={styles.ctaGhost}>
            Começar Agora
          </a>
        </div>
      </div>

      <div className={styles.heroStats}>
        <div className={styles.stat}>
          <strong>50+</strong>
          <span>Cursos</span>
        </div>
        <div className={styles.stat}>
          <strong>10K+</strong>
          <span>Estudantes</span>
        </div>
        <div className={styles.stat}>
          <strong>98%</strong>
          <span>Aprovação</span>
        </div>
      </div>
    </div>
    <div className={styles.heroImageContainer}>
      <img
        src={imageSrc("ti.jpeg")}
        alt="Tecnologia da Informação"
        className={styles.heroImage}
        loading="eager"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  </div>
</section>
      {/* Barra de Pesquisa com Espaçamento Correto */}
      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <div className={styles.controlsRow}>
            <div className={styles.searchWrap}>
              <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                className={styles.searchInput}
                placeholder="Buscar cursos, ex: 'programação'..."
                aria-label="Buscar cursos"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className={styles.filterWrap}>
              <div className={styles.filterLabel}>Categoria:</div>
              <select
                className={styles.filterSelect}
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                aria-label="Filtrar por categoria"
              >
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <main className={styles.mainContent}>
        {cursosFiltrados.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🔍</div>
            <strong className={styles.emptyTitle}>Nenhum curso encontrado</strong>
            <p className={styles.emptyText}>Tente ajustar seus filtros ou termos de busca.</p>
            <button 
              className={styles.ctaPrimary} 
              onClick={() => { setQuery(''); setCategoria('Todas'); }}
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <>
            {/* Resultados da Pesquisa */}
            <div className={styles.resultsHeader}>
              <h2 className={styles.resultsTitle}>
                {query || categoria !== "Todas" ? "Resultados da Pesquisa" : "Cursos em Destaque"}
              </h2>
              <p className={styles.resultsCount}>
                {cursosFiltrados.length} curso{cursosFiltrados.length !== 1 ? 's' : ''} encontrado{cursosFiltrados.length !== 1 ? 's' : ''}
                {query && ` para "${query}"`}
                {categoria !== "Todas" && ` na categoria ${categoria}`}
              </p>
            </div>

            <section className={styles.courseGrid}>
              {cursosFiltrados.slice(0, visibleCount).map((curso, index) => (
                <article 
                  key={curso.id} 
                  className={styles.courseCard}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className={styles.courseMedia}>
                    <img
                      src={curso.imagem}
                      alt={curso.titulo}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = imageSrc("placeholder.png");
                      }}
                    />
                    <div className={styles.courseOverlay}>
                      <span className={styles.difficultyBadge}>{curso.nivel}</span>
                      <div className={styles.courseMeta}>
                        <span className={styles.duration}>{curso.duracao}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.courseBody}>
                    <div className={styles.metaRow}>
                      <span className={styles.badge}>{curso.categoria}</span>
                      <RatingStars rating={curso.rating} />
                    </div>
                    <h3 className={styles.courseTitle}>{curso.titulo}</h3>
                    <p className={styles.courseDesc}>
                      {expanded[curso.id] ? curso.descricaoCompleta : curso.descricao}
                    </p>
                    <div className={styles.cardActions}>
                      <a href={`/cursos/${curso.id}`} className={styles.ctaPrimarySmall}>
                        <span>Inscrever-se</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                      <button
                        className={styles.expandBtn}
                        onClick={() => toggleExpand(curso.id)}
                        aria-expanded={!!expanded[curso.id]}
                      >
                        {expanded[curso.id] ? "Ver menos" : "Ver mais"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </>
        )}

        {cursosFiltrados.length > visibleCount && (
          <div className={styles.loadMoreWrap}>
            <button 
              className={`${styles.loadMoreBtn} ${isLoading ? styles.loading : ''}`} 
              onClick={carregarMais}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className={styles.spinner}></div>
                  Carregando...
                </>
              ) : (
                'Carregar mais cursos'
              )}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default TelaPrincipal;