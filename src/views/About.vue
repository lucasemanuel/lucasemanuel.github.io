<template>
  <Section title="Hey, I'm Emanuel">
    <p id="resume">
      Sou <u>desenvolvedor backend</u>, experiente em
      <u>PHP utilizando Laravel e Yii2 Framework</u>,
      <u>Git e SQL (PostgreSQL e Mysql)</u>. 99% Graduado em Tecnologia em
      Sistemas para Internet, com leitura razoável em inglês. Em constante busca
      por conhecimento, recentemente
      <u>estudando e aplicando os estudos em projetos</u> utilizando tecnologias
      frontend, como, <u>Vue e React</u>, e metodologias como
      <u>Test Driven Development (TDD), Kanban e Git Flow</u>. Sempre preparado
      para novos desafios e em busca do primeiro emprego como desenvolvedor.
    </p>
    <article id="skills">
      <h4>Skills</h4>
      <hr />
      <ul>
        <li>
          <font-awesome-icon :icon="['fab', 'php']" /> PHP - Laravel e Yii2
        </li>
        <li><font-awesome-icon :icon="['fab', 'js']" /> JS - Vue e React</li>
        <li>
          <font-awesome-icon :icon="['fas', 'database']" /> Database - MySQL e
          PostgreSQL
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'cogs']" /> Outras Ferramentas -
          Kanban, TDD, Git e Git Flow
        </li>
      </ul>
    </article>
    <article id="education">
      <h4>Education</h4>
      <hr />
      <ul>
        <li>
          <strong>Tecnologia em Sistemas para Internet</strong> (2016-2021),
          Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do
          Norte (IFRN) - Currais Novos/RN.
        </li>
      </ul>
    </article>
    <article id="lecture">
      <h4>Lecture</h4>
      <hr />
      <ul>
        <li>
          <strong>Minicurso de Controle de Versão com Git e Github</strong> -
          EXPOTEC IX - IFRN Currais Novos (2019, 4h30m, Ministrado em dupla).
        </li>
        <li>
          Minicurso de <strong>Git e Github</strong> - EXPOTEC VIII - IFRN
          Currais Novos (2018, 2h, Ministrado em dupla).
        </li>
      </ul>
    </article>
  </Section>
</template>

<script>
import Section from "../components/Section.vue";

export default {
  name: "About",
  components: {
    Section,
  },
};
</script>

<style>
h4 {
  font-size: 24px;
}
</style>

<style scoped>
p,
article {
  margin-bottom: 16px;
}

article h4 {
  margin-left: 24px;
}

article hr {
  height: 8px;
  width: 88px;
  margin-top: -10px;
  background: var(--main-color);
}

article ul {
  margin-top: 16px;
}

article ul li {
  list-style: square inside;
}
</style>
