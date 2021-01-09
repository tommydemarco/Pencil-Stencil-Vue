<template>
  <header class="header">
    <div class="header__container">
      <router-link class="header__logo" to="/"
        >Pencil<span class="header__logo--span"
          >a website with Stencil</span
        ></router-link
      >
      <nav class="header__navigation">
        <ul class="header__navigation-list">
          <li class="header__navigation-item">
            <a target="_blank" href="https://www.skyscanner.de/"
              >Change country</a
            >
          </li>
          <li class="header__navigation-item">Change Language</li>
          <li class="header__navigation-item">Login</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  justify-content: center;

  padding: 1.8rem 5rem;
  color: white;

  background: rgb(192, 57, 43);
  background: linear-gradient(
    149deg,
    rgba(192, 57, 43, 1) 26%,
    rgba(231, 76, 60, 1) 100%
  );

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 6rem;
    letter-spacing: 2px;
    font-family: 'Luckiest Guy', cursive;

    &--span {
      font-size: 2.5rem;
      font-family: 'Satisfy', cursive;
      display: block;
      transform: rotateZ(355deg);
      transform-origin: left;
      letter-spacing: 0;
    }
  }

  &__navigation-list {
    display: flex;
    justify-content: space-between;
    height: 5rem;
    align-items: stretch;
  }

  &__navigation-item {
    align-self: stretch;
    padding: 0 2rem;
    position: relative;
    display: flex;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      height: 2px;
      width: 0px;
      background-color: #ffffff;
      transition: all 0.3s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>
