<template>
  <div id="container">
    <aside class="profile">
      <img
        class="rounded photo"
        src="https://avatars.githubusercontent.com/u/31216249?s=460&u=da97f7e2bad1d12d631f5724041004ad272c7b5f&v=4"
        alt="Photo Lucas Emanuel"
      />
      <h1 class="name">
        Lucas Emanuel
      </h1>
      <h2 class="subname">
        Backend Developer
      </h2>
      <ul class="social">
        <li>@</li>
        <li>@</li>
        <li>@</li>
        <li>@</li>
      </ul>
    </aside>
    <main></main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #eee;
}

#container {
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  background: #aaa;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
}

.profile {
  width: 320px;
  background: #2c3e;
}

.profile .photo {
  width: 180px;
}

.profile h1.name {
  font-size: 30px;
}

.profile h2.subname {
  font-size: 24px;
  font-weight: 400;
}

.profile .social {
  list-style: none;
}

.social li {
  display: inline-block;
  background: #45e4dc;
  padding: 8px;
  margin-right: 2px;
}

main {
  flex: 1;
  background: #2c3e50;
}

/* AUX */

.rounded {
  border-radius: 50%;
}
</style>
