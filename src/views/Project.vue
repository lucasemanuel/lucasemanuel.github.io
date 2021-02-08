<template>
  <Section title="Projects">
    <ul>
      <li class="project">
        <header class="info-project">
          <h4>Conarket</h4>
          <span>
            (2020 - PRESENTE) (Projeto em Grupo)
          </span>
        </header>
        <article class="about-project">
          <p>
            E-commerce para cooperativas gerenciadas pela CONAB - Currais
            Novos/RN.
          </p>
          <p>
            Desenvolvi parte da API Restful, utilizando de migrações, transações
            no banco de dados, controle de acesso baseado em papéis, observers,
            eventos, gerenciamento de arquivos via upload, documentação da API,
            factories, seeds, TDD, análise de requisitos junto com os colegas do
            projeto e Git flow.
          </p>
          <p>
            - Stack: Laravel, PostgreSQL e React.
          </p>
        </article>
      </li>
      <li class="project">
        <header class="info-project">
          <h4>SISMEV</h4>
          <span>
            (2019 - 2020) (TCC)
            <a href="https://github.com/lucasemanuel/sismev" target="_blank"
              >Github</a
            >
          </span>
        </header>
        <article class="about-project">
          <p>
            SISMEV, Sistema Simplificado para Microempresas Varejistas (2019 -
            2020) é uma SIG para microempresas varejistas, oferecendo: Módulo de
            PDV; Módulo de Despesas; Controle de Estoque; Controle de usuários
            baseado em papéis; Criação de relatórios personalizados;
            Gerenciamento de produtos com variação...
          </p>
          <p>
            No desenvolvimento deste sistema foi aplicando análise de
            requisitos, arquitetura MVC, controle de acesso baseado em papéis
            (RBAC) junto do filtro de controle de acesso (ACF), modelagem e
            migração do banco de dados, sub-queries, junções de tabelas,
            transações, soft deletes, traits, eventos, comportamentos
            (behaviors), validadores customizados, componentização e Docker para
            o SGBD, utilizando Kanban.
          </p>
          <p>
            - Stack: Yii Framework, Mysql e Vue.
          </p>
        </article>
      </li>
      <li class="project">
        <header class="info-project">
          <h4>MyNotes</h4>
          <span>
            (2020)
            <a href="https://github.com/lucasemanuel/mynotes" target="_blank"
              >Github</a
            >
          </span>
        </header>
        <article class="about-project">
          <p>
            Sistema para armazenar anotações dos usuários, permitindo salvá-las
            automaticamente, fixar as favoritas e buscá-las pelo seu conteúdo.
          </p>
          <p>
            Neste projeto foi aplicado TDD desenvolvendo API Restful, com
            migrações, autenticação, forms request, binding na rota,
            componentização, api de contexto, hooks, react router, state lift e
            requisições assíncronas.
          </p>
          <p>
            - Stack: Laravel, MySQL e React.
          </p>
        </article>
      </li>
      <li class="project">
        <header class="info-project">
          <h4>WebCPU</h4>
          <span>
            (2019)
            <a href="https://github.com/lucasemanuel/web-cpu" target="_blank"
              >Github</a
            >
          </span>
        </header>
        <article class="about-project">
          <p>
            Aplicação web que fornece um conjunto de instruções básicas,
            simulando operações efetuadas em uma CPU com dois registradores.
          </p>
          <p>
            Neste projeto foi aplicado, renderização condicional, manipuladores
            de evento e deploy no github pages. Stack: Vue.
          </p>
          <p>
            - Stack: Vue.
          </p>
        </article>
      </li>
      <li class="project">
        <header class="info-project">
          <h4>IX EXPOTEC</h4>
          <span>
            (2019)
          </span>
        </header>
        <article class="about-project">
          <p>
            Home page para o evento da IX EXPOTEC - Exposição Científica,
            Tecnológica e Cultural do IFRN - Currais Novos/RN, apresentando
            sobre o evento, fotos das edições anteriores e como participar.
          </p>
          <p>
            Minha responsabilidade no projeto foi desenvolver o layout usando
            HTML e CSS.
          </p>
          <p>
            - Stack: HTML e CSS.
          </p>
        </article>
      </li>
    </ul>
  </Section>
</template>

<script>
import Section from "../components/Section.vue";

export default {
  name: "Project",
  components: {
    Section,
  },
};
</script>

<style scoped>
.rectangle {
  height: 34px;
  width: 100px;
  position: absolute;
  background-color: #eee;
  z-index: -1;
}

.info-project {
  display: inline-block;
  padding: 2px 24px;
  background: var(--main-color);
}

.info-project h4 {
  display: inline-block;
}

.info-project span,
ul li {
  font-size: 16px;
}

.info-project h4 {
  font-size: 24px;
}

.about-project {
  margin-bottom: 32px;
  padding: 12px;
  border: solid 2px var(--main-color);
}
</style>
