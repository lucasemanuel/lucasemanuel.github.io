<template>
  <div id="application">
    <nav class="navbar">
      <span class="bold">
        Lucas Emanuel
      </span>
      <span>
        About
      </span>
      <span>
        Projects
      </span>
    </nav>
    <main class="container">
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
      <section></section>
    </main>
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

  color: #d6dfe0;
}

body {
  background: #202020;
}

#application {
  height: 100vh;
}

.navbar {
  width: 100%;
  background-color: #141414;
  text-align: center;
  padding: 8px 0;
}

.navbar span::after {
  content: "/";
  margin: 0 8px;
}

.navbar span:last-child::after {
  content: "";
}

.container {
  margin: 40px auto 0;
  max-width: 1080px;
  display: flex;
  text-align: center;
}

.profile {
  width: 320px;
}

.profile .photo {
  width: 180px;
}

.profile h1.name {
  margin-top: 8px;
  font-size: 28px;
}

.profile h2.subname {
  margin-top: 2px;
  font-size: 22px;
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

section {
  flex: 1;
}

/* AUX */

.rounded {
  border-radius: 50%;
}

.bold {
  font-weight: 700;
}
</style>
