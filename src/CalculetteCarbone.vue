<template>
  <div>
    <div v-if=loading>
      <div class="loadingscreen d-flex  align-items-center text-center">
        <div
          class="text-center"
          style="width:100%"
        >
          <div class="loader">
            <fingerprint-spinner
              :animation-duration="1500"
              :size="124"
              color="black"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import { FingerprintSpinner } from "epic-spinners";

export default {
  props: {
    // player_key: String,
    // user: {}
  },
  data () {
    return {
      player_key: ''
    }
  },
  computed: {
    loading: function () {
      return !(this.$store.getters['user/ready'] && this.$store.getters['calculator/ready']);
    }
  },
  methods: {
    getParameterByName (name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
  },
  mounted: function () {
    var self = this;

    this.player_key = this.getParameterByName('code');

    var param = {
      calculator_key: self.player_key,
    };

    this.$store.dispatch("calculator/init", param);
    this.$store.dispatch("user/init");
  },
  components: {
    FingerprintSpinner
  }
};
</script>


<style  lang="scss">
@import "./style.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

.loadingscreen {
  position: fixed;
  text-align: center;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 99999;
}

.loader {
  display: inline-block;
  margin: auto;
}
</style>