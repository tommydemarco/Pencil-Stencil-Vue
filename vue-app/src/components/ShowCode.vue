<template>
  <a href="#" class="git-button"
    ><i class="fa fa-github" aria-hidden="true"></i>View component code</a
  >
</template>

<script>
export default {
  props: {}
};
</script>

<style scoped lang="scss">
.git-button {
  position: absolute;
  top: 3.5rem;
  right: 3.5rem;
  padding: 2rem;
  font-size: 2rem !important;
  color: white;
  background-color: rgb(216, 71, 55);
  transition: all 0.3s;

  & i {
    margin-right: 0.8rem;
  }

  &:hover {
    background-color: lighten(rgb(216, 71, 55), 15%);
  }
}
</style>
