<template>
  <section>
    <header class="title">
      <h3>{{ title }}</h3>
      <hr>
    </header>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
section {
  flex: 1;
  text-align: start;
}

header hr {
  margin-top: -14px;
  height: 12px;
  background-color: var(--main-color);
}

h3 {
  margin-left: 24px;
  font-size: 28px;
}

</style>
