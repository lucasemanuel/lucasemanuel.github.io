<template>
  <main>
    <header class="title">
      <h3>{{ title }}</h3>
      <hr />
    </header>
    <article class="content">
      <p>
        Desenvolvedor backend, experiente em PHP (Laravel e Yii2 Framework), SQL
        e Git. Estudando e executando projetos desde 2016. Recém graduado com
        leitura razoável em inglês. Em constante busca por conhecimento, a
        exemplo de tecnologias frontend - Vue e React - e metodologias como Test
        Driven Development (TDD) e SCRUM. Sempre preparado para novos desafios e
        em busca do primeiro emprego como desenvolvedor.
      </p>
    </article>
  </main>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
main {
  flex: 1;
  text-align: start;
  margin-top: 16px;
}

header.title hr {
  margin-top: -14px;
  height: 12px;
  background-color: var(--main-color);
}

header.title h3 {
  margin-left: 24px;
  font-size: 28px;
}

article.content {
  margin-top: 16px;
  font-size: 18px;
}

/* Media Queries */

@media (min-width: 720px) {
  main {
    margin-top: 0;
  } 
}
</style>
