<template>

  <div class="recap-page container-fluid p-5">
    <h1>{{histories.length}} bilan carbone réalisés</h1>

    <div
      v-for="history in histories"
      :key="'history' + history.id"
    >
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col">
              {{history.created_at}}
              <div
                v-for="setting in history.data.settings"
                :key="'setting' + setting.code"
              >
                {{setting.code}} : {{setting.value}}
              </div>
            </div>
            <div class="col text-right">
              <h4>
                <base-carbone-display
                  :amount="history.data.total"
                  :br="false"
                ></base-carbone-display>
              </h4>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {

    }
  },
  computed: {
    calculator: function () {
      return this.$store.getters['calculator/about'];
    },
    histories: function () {
      return this.$store.getters['histories/all'];
    }
  },
  methods: {

  },
  mounted: function () {


    var param = {
      calculator_key: this.calculator.key,
    };

    this.$store.dispatch('histories/init', param);


  }
};
</script>

<style scoped lang="scss">
.history-page {
}
</style>
