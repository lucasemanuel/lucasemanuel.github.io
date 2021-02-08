<template>
  <section>
    <header class="title">
      <h3>{{ title }}</h3>
      <hr />
    </header>
    <article class="content">
      <slot></slot>
    </article>
  </section>
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
<style scoped>
section {
  text-align: start;
  margin-top: 16px;
  width: 100%;
}

header.title hr {
  margin-top: -16px;
  height: 10px;
  background-color: var(--main-color);
}

header.title h3 {
  margin-left: 24px;
  font-size: 40px;
}

article.content {
  margin-top: 16px;
  font-size: 18px;
}

/* Media Queries */

@media (min-width: 720px) {
  section {
    margin-top: 0;
  }
}
</style>
