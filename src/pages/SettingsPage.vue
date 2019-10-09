<template>
  <div
    class="container-fluid  settings-page"
    v-bind:style="{ 'background-image': 'url(' + calculator.cover + ')' }"
  >
    <div class="row">
      <div class="col">

      </div>
      <div class="col">
        <form v-on:submit.prevent=submit>
          <h4 class="">Votre email </h4>
          <p>{{dictionnary.settings_footer}}</p>
          <input
            class="form-control mb-4 p-4"
            v-model=user.email
          >
          <hr>
          <div
            v-for="setting in settings"
            :key=setting.key
          >
            <h4 class="mt-4">{{setting.label}} </h4>
            <div class="form-group col-6 ">

              <select
                v-model=setting.value
                v-if=setting.answers
                class="form-control"
              >
                <option
                  v-for="option in setting.answers"
                  :key=option
                >
                  {{option}}
                </option>
              </select>
              <input
                v-else
                class="form-control"
                v-model=setting.value
              >

            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
          >Enregistrer</button>
          <hr class="my-5">

        </form>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  computed: {
    user () {
      return this.$store.getters['calculator/settings/user'];
    },
    settings () {
      return this.$store.getters['calculator/settings/all'];
    },
    calculator: function () {
      return this.$store.getters["calculator/about"];
    },
    dictionnary () {
      return this.$store.getters['calculator/about'].dictionnary;
    }
  },
  methods: {
    submit: function () {
      var self = this;

      self.settings.forEach(setting => {
        setting.submited = true;
      });

      this.$store.dispatch('user/progression/save');
      this.$router.push('calc')
    }
  },
  mounted: function () {
    this.$store.dispatch('user/progression/load');
  }
}
</script>

<style scoped lang="scss">
.settings-page {
  background-size: cover;
  background-repeat: no-repeat;
}

form {
  background: rgba(255, 255, 255, 0.8);
  padding: 30px;
}
</style>