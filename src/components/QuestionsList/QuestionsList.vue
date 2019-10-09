<template>
  <div class="questions-list container">
    <div class="text-center p-4">
      <div
        class="btn btn-light"
        @click="$emit('exit')"
      >Retour au calcul</div>
    </div>
    <div class="row  m-2">
      <div
        class="col-6 col-sm-4 col-md-3"
        v-for="question in questions"
        :key="question.code+'question'"
      >
        <questions-list-card
          :question=question
          :selected="isSelected(question)"
          @selectQuestion="selectQuestion(question)"
        ></questions-list-card>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    question: {
      required: false,
      type: Object
    }
  },

  computed: {
    questions: function () {
      var questions = this.$store.getters['calculator/questions/visible'];
      return questions;
    }
  },
  methods: {
    selectQuestion: function (question) {
      this.$emit('selectQuestion', question)
      this.$forceUpdate();
    },
    isSelected: function (question) {
      if (this.question) {
        if (question.code == this.question.code) {
          return true;
        }
      }
      return false;
    }
  }
}
</script>

<style scoped lang="scss">
.questions-list {
  padding: 50px 0px;
}
</style>
