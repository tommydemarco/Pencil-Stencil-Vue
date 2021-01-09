<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <router-link to="/">
          Home
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <router-link to="/stock-prices">
          Home
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <router-link to="/exchange-rates">
          Home
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-self: stretch;
  padding-top: 5rem;
  background: rgb(75, 98, 122);
  background: linear-gradient(
    149deg,
    rgba(75, 98, 122, 1) 32%,
    rgba(44, 62, 80, 1) 100%
  );
  flex: 0 0 30rem;
}
</style>
