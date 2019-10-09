<template>

  <div class="history-page container-fluid  h-100">
    Overview
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      currentQuestion: null
    }
  },
  computed: {
    completed: function () {
      return this.$store.getters['calculator/completed'];
    }
  },
  methods: {
    selectQuestion: function (question) {
      this.currentQuestion = question;
    },
    reset: function () {
      this.$store.dispatch('calculator/questions/reset');
      this.pickNewQuestion();
    },
    pickNewQuestion: function () {
      this.$store.dispatch('user/progression/save');
      this.currentQuestion = this.$store.getters['calculator/questions/notSubmitted'][0];
    },
    saveHistory: function () {
      this.$store.dispatch('user/history/save');
      this.$router.push('history')
    }
  },
  mounted: function () {
    this.$store.dispatch('user/progression/load');
    this.currentQuestion = this.$store.getters['calculator/questions/notSubmitted'][0];
  }
};
</script>

<style scoped lang="scss">
.history-page {
}
</style>
