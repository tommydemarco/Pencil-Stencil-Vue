<template>
  <nav class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__item">
        <router-link class="sidebar__link" to="/">
          <i class="fa fa-home"></i> Home Page
        </router-link>
      </li>
      <li class="sidebar__item">
        <router-link class="sidebar__link" to="/stock-prices">
          <i class="fa fa-line-chart" aria-hidden="true"></i> Stock Prices
        </router-link>
      </li>
      <li class="sidebar__item">
        <router-link class="sidebar__link" to="/exchange-rates">
          <i class="fa fa-area-chart" aria-hidden="true"></i> Currency Rates
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
  background: rgb(44, 62, 80);
  background: linear-gradient(
    149deg,
    rgba(44, 62, 80, 1) 23%,
    rgba(75, 98, 122, 1) 81%
  );
  flex: 0 0 30rem;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  &__item {
  }

  &__link {
    color: white;
    padding: 2rem;
    padding-left: 4rem;
    display: block;
    font-size: 2.2rem !important;
    position: relative;
    z-index: 20;
    transition: all 0.3s;

    & i {
      margin-right: 0.5rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      transform: scaleX(0%);
      transition: all 0.3s ease-in-out;
      z-index: -1;
      background: rgb(192, 57, 43);
      background: linear-gradient(
        149deg,
        rgba(192, 57, 43, 1) 26%,
        rgba(231, 76, 60, 1) 100%
      );
    }

    &:hover {
      padding-left: 4.5rem;

      &::after {
        width: 100%;
      }
    }
  }

  &__link.router-link-active {
    padding-left: 4.5rem;

    &::after {
      width: 100%;
    }
  }
}
</style>
