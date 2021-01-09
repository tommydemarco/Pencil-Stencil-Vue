<template>
  <TheHeader />
  <div class="content">
    <TheSidebar></TheSidebar>
    <router-view> </router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
export default {
  components: { TheHeader, TheSidebar }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.content {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  flex: 1;
}
</style>
