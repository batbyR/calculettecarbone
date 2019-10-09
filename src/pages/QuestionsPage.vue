<template>

  <div class="calculator-page ">
    <questions-list
      class="qlist"
      @selectQuestion="selectQuestion"
      :question="currentQuestion"
    ></questions-list>

  </div>
</template>

<style scoped lang="scss">
// $colwidth: 200px;

.qlist {
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 0px;
  // width: $colwidth;
  overflow-y: scroll;
}

.calculator-zone {
  // margin-left: $colwidth;
}

.calculator-page {
}
.result-col {
}
.col-form {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
}
</style>


<script>
// import { forcedLogin } from "@/mixins/forcedLogin.js";

export default {
  data: function () {
    return {
      currentQuestion: null
    }
  },
  computed: {
    completed: function () {
      return this.$store.getters['calculator/completed'];
    },
    result: function () {
      return this.$store.getters['calculator/result'];
    },
    domains () {
      return this.$store.getters['calculator/domains/all'];
    }
  },
  methods: {
    selectQuestion: function (question) {
      this.currentQuestion = question;
      this.$router.push({ name: 'calc' });
    },
    viewQuestion: function () {

    },
    reset: function () {
      this.$store.dispatch('calculator/questions/reset');
      this.pickNewQuestion();
    },
    submitQuestion: function () {
      this.$store.dispatch('user/progression/save');
    },
    pickNewQuestion: function () {
      this.currentQuestion = this.$store.getters['calculator/questions/notSubmitted'][0];
    },
    saveHistory: function () {
      var self = this;

      this.$store.dispatch('user/history/save', function (response) {
        self.reset();
        self.$router.push({ name: 'recap', params: { id: response.id } });
      });
    }
  },
  mounted: function () {
    this.$store.dispatch('user/progression/load');
    this.currentQuestion = this.$store.getters['calculator/questions/notSubmitted'][0];
  },
  // mixins: [forcedLogin]
};
</script>


