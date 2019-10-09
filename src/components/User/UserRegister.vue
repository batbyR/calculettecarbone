<template>
  <form @submit.prevent=submit>
    <h3 class="mb-4">Inscription</h3>
    <div class="form-group">
      <label for="exampleInputEmail1">Address email</label>
      <input
        class="form-control"
        type="text"
        v-model=user.email
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Nom</label>
      <input
        class="form-control"
        type="text"
        v-model=user.name
      >
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Mot de passe</label>
      <input
        class="form-control"
        type="password"
        v-model=user.password
      >
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Confirmation du mot de passe</label>
      <input
        class="form-control"
        type="password"
        v-model=user.password_confirmation
      >
    </div>
    <div class="form-group">
      <input
        class="btn btn-primary"
        type="submit"
        value="Inscription"
      >
      <div
        v-if="errors.length > 0"
        class="alert alert-danger mt-3"
      >

        <div
          v-for="error in errors"
          :key=error
        >
          {{error}}
        </div>
      </div>
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
        // email: 'test@test2.com',
        // name: 'manu',
        // password: '123456',
        // password_confirmation: '123456'
      },
      errors: []
    }
  },
  methods: {
    submit () {
      var self = this;
      var data = {
        payload: this.user,
        success: function (data) {
          self.$router.push('settings');
        },
        fail: function (errors) {
          self.errors = [];
          errors.forEach(error => {
            self.errors.push(error);
          });
        }
      };
      this.$store.dispatch("user/register", data);
    }
  }
};
</script>
