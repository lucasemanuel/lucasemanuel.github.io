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
        <div class="profile-info">
          <h1 class="name">
            Lucas Emanuel
          </h1>
          <h2 class="subname">
            Backend Developer
          </h2>
          <ul class="social">
            <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
            <li><font-awesome-icon :icon="['fab', 'stack-overflow']" /></li>
            <li><font-awesome-icon :icon="['fab', 'linkedin-in']" /></li>
            <li><font-awesome-icon :icon="['fab', 'github']" /></li>
          </ul>
        </div>
      </aside>
      <About />
    </main>
  </div>
</template>

<script>
import About from "./views/About.vue";

export default {
  name: "App",
  components: {
    About,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400;700&display=swap");

* {
  margin: 0;
  padding: 0;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #d6dfe0;
  font-family: "Roboto Mono", monospace;
  border: none;
}

:root {
  --main-color: #8155ba;
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
  padding: 12px 0;
}

.navbar span::after {
  content: "/";
  margin: 0 8px;
}

.navbar span:last-child::after {
  content: "";
}

.container {
  margin-top: 24px;
  padding: 0 32px;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
}

.profile {
  display: flex;
}

.profile .photo {
  width: 120px;
  height: 120px;
}

.profile-info {
  margin-left: 24px;
  display: inline-block;
}

.profile-info h1.name {
  font-size: 28px;
}

.profile-info h2.subname {
  margin-top: -4px;
  font-size: 22px;
  font-weight: 300;
}

.profile-info .social {
  margin-top: 8px;
  list-style: none;
  display: inline-flex;
}

.social li {
  width: 30px;
  height: 30px;
  background: var(--main-color);
  margin-right: 4px;
  display: flex;
  border-radius: 4px;
}

.social li:last-child {
  margin-right: 0;
}

.social li svg {
  margin: auto;
  font-size: 18px;
}

/* Media Queries */

@media (max-width: 380px) {
  .profile {
    flex-direction: column;
  }

  .profile-info {
    margin-left: 0;
  }
}

@media (min-width: 720px) {
  .container {
    margin: 40px auto 0;
    padding: 0 32px;
    max-width: 1080px;
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  .profile {
    width: 320px;
    padding-right: 24px;
    flex-direction: column;
    min-width: 230px;
    align-items: center;
  }

  .profile .photo {
    width: 180px;
    height: 180px;
  }

  .profile-info {
    margin-left: 0;
  }

  .profile-info h1.name {
    margin-top: 8px;
    font-size: 28px;
  }

  .profile-info h2.subname {
    margin-top: -2px;
    font-size: 22px;
    font-weight: 300;
  }

  .profile-info .social {
    margin-top: 18px;
    list-style: none;
    display: inline-flex;
  }

  .social li {
    width: 44px;
    height: 44px;
    background: var(--main-color);
    margin-right: 4px;
    display: flex;
    border-radius: 4px;
  }

  .social li svg {
    margin: auto;
    font-size: 22px;
  }
}

@media (min-width: 920px) {
  .profile {
    padding: 0 32px;
  }
}

/* AUX */

.rounded {
  border-radius: 50%;
}

.bold {
  font-weight: 700;
}
</style>
