<template>

  <div class="my-2 my-lg-0">
    <ul class="navbar-nav ">
      <li
        v-if="user.logedIn"
        class="nav-item dropdown"
      >
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {{user.name}}
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
        >
          <a
            class="dropdown-item"
            href="#"
            @click.prevent=read
          >Profile</a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="#"
            @click.prevent=logout
          >Logout</a>
        </div>
      </li>
      <li v-else>
        <router-link to="/login">Connexion ou inscription</router-link>

      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
</style>

<script>

export default {
  computed: {
    user: function () {
      return this.$store.getters['user/data']
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('user/logout');
      this.$router.push('/');
    },
    read: function () {
      this.$store.dispatch('user/read');
    }
  }
}
</script>
