<template><div></div></template>

<script>
export default {
  name: "RedirectPageNotFound",
  created: function() {
    this.$router.push("/404");
  },
};
</script>

<style></style>