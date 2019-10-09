<template>
  <form @submit.prevent=submit>
    <h3 class="mb-4">Connexion</h3>
    <div class="
      form-group">
      <label for="exampleInputEmail1">Addresse</label>
      <input
        class="form-control"
        type="text"
        v-model=user.email
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Mot de passe</label>
      <input
        class="form-control"
        type="password"
        @keyup="error=null"
        v-model=user.password
      >
    </div>
    <input
      class="btn btn-primary"
      type="submit"
      value="Connexion"
    >
    <div
      v-if="error"
      class="alert alert-danger mt-3"
    >
      {{error}}
    </div>
  </form>
</template>

<style scoped lang="scss">
</style>

<script>

export default {
  data: function () {
    return {
      user: {
        email: 'demo@calculette-carbone.fr',
        password: '123456'
      },
      error: null
    }
  },
  methods: {
    submit () {
      var self = this;
      this.$store.dispatch("user/login", {
        payload: this.user,
        success: function () {
          self.$router.push('settings');
        }
      });
    }
  }
};
</script>


