<template>
  <Section title="Not Found">
    <span class="error">404</span>
  </Section>
</template>

<script>
import Section from "../components/Section.vue";

export default {
  name: "NotFound",
  components: {
    Section,
  },
};
</script>

<style scoped>
span.error {
  font-size: 8rem;
  font-weight: 700;
}
</style>
