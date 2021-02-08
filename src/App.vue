<template>
  <div id="application">
    <nav class="navbar">
      <ul class="mobile">
        <li class="bold">Lucas Emanuel</li>
        <li v-on:click="openMenu"><a href="#">Menu</a></li>
      </ul>
      <ul class="menu" v-bind:class="classMenu" v-on:click="closeMenu">
        <li class="bold" v-bind:class="{none: responsive}">Lucas Emanuel</li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/carrer">Carrer</router-link></li>
      </ul>
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
            <li>
              <a
                href="https://github.com/lucasemanuel/"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lucaseman/"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'linkedin-in']"
              /></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_lucaseman"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
            </li>
            <li>
              <a href="mailto:lucaxemanuel@gmail.com"
                ><font-awesome-icon :icon="['fas', 'envelope']"
              /></a>
            </li>
          </ul>
        </div>
      </aside>
      <vue-page-transition name="fade-in-right">
        <router-view />
      </vue-page-transition>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { responsive: false };
  },
  computed: {
    classMenu() {
      return {
        none: !this.responsive,
        flex: this.responsive,
      };
    },
  },
  methods: {
    openMenu() {
      this.responsive = true;
    },
    closeMenu() {
      this.responsive = false;
    },
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

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

p {
  margin-bottom: 6px;
}

li {
  list-style: none;
}

#application {
  height: 100vh;
}

.navbar {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #141414;
  padding: 12px 0;
}

.navbar ul.mobile {
  display: inline-flex;
}

.navbar .mobile li:not(:last-child)::after {
  content: "/";
  margin: 0 12px;
}

.navbar ul.menu li:not(.bold) a {
  transition: .4s ease-in-out;
}

.navbar ul.menu li:not(.bold) a:hover {
  background-color: var(--main-color);
  border-bottom: none;
}

.container {
  margin-top: 24px;
  padding: 0 32px;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
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

.social li a {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
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

@media (max-width: 719.9px) {
  .navbar ul.menu {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex: 1;
    font-size: 32px;
    background-color: #141414ee;
  }

  .navbar ul.menu li {
    padding: 2px 8px;
    margin: 4px 8px;
    border-bottom: solid 4px var(--main-color);
  }
}

@media (min-width: 720px) {
  .navbar ul.mobile {
    display: none;
  }

  .navbar ul.menu {
    display: inline-flex;
  }

  .navbar li:not(:last-child)::after {
    content: "/";
    margin: 0 12px;
  }

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
    display: inline-flex;
  }

  .social li {
    width: 44px;
    height: 44px;
    background: var(--main-color);
    margin-right: 4px;
    border-radius: 4px;
  }

  .social li svg {
    font-size: 22px;
  }
}

@media (min-width: 920px) {
  .profile {
    padding-right: 32px;
  }
}

/* AUX */

.rounded {
  border-radius: 50%;
}

.bold {
  font-weight: 700;
}

.flex {
  display: flex;
}

.none {
  display: none;
}
</style>

<style scoped>
div {
  width: 100%;
}
</style>
