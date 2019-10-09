<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link
      to="/"
      class="navbar-brand"
    >{{calculator.name}}</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">

      </ul>

      <the-header-user />
    </div>
  </nav>
</template>


<script>

export default {
  computed: {
    calculator: function () {
      return this.$store.getters['calculator/about']
    }
  }
}
</script>
<style scoped lang="scss">
nav {
  border-bottom: 1px solid black;
}
</style>
