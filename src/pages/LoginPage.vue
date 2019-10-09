<template>
  <div class="loginpage">
    <div class="container py-5m my-5">
      <div v-if="!user.logedIn">
        <h3 class="pb-5">{{dictionnary.start_login}}</h3>
        <div class="row row-eq-height">
          <div class="col">
            <user-login></user-login>
          </div>
          <div class="col">
            <user-register @registered=registered></user-register>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>

export default {
  computed: {
    dictionnary () {
      return this.$store.getters['calculator/about'].dictionnary;
    },
    user: function () {
      return this.$store.getters["user/data"];
    },
  },
  methods: {
    registered: function (user) {
      var self = this;
      this.$store.dispatch("user/login", {
        payload: user,
        success: function () {
          self.$router.push('settings');
        }
      });
    }
  }
}

</script>

<style scoped lang="scss">
</style>


