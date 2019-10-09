<template>
  <div class="calculator-form">

    <!-- Résultat -->
    <div
      v-if="question.submitted"
      class="card mb-3 text-center h-75"
    >
      <calculator-form-result :question="question" />
    </div>

    <!-- QUESTIONNAIRE -->
    <div
      v-else
      class="card mb-3 text-right h-75"
    >

      <!-- Domain  -->
      <calculator-form-domain
        :domain="question.domain"
        class="p-2 float-right pull-right"
      />

      <!-- Question  -->
      <calculator-form-question :field="question" />

      <!-- Form  -->
      <calculator-form-input
        :question="question"
        @submit="submit"
      />

    </div>
    <div class="row">
      <div class="col text-center">
        <div
          class="btn btn-link"
          @click.prevent="$emit('viewquestion')"
        >
          Voir les questions
        </div>
      </div>
      <div class="col">
        <div
          v-if="
        question.submitted"
          class="btn btn-primary  btn-block"
          @click="$emit('next')"
        >
          Question suivante
        </div>
      </div>
    </div>

    <!-- Help -->
    <calculator-form-help :question="question" />
  </div>
</template>
<script>
export default {
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  data: function () {
    return {
      resultVisible: false
    }
  },
  methods: {
    showResult: function () {
      this.resultVisible = true;
    },
    submit: function () {
      var self = this;
      self.showResult();
      self.question.submitted = true;
      self.$store.dispatch('calculator/questions/submit', self.question);

      self.$emit('submit');
      self.resultVisible = false;

    }
  }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid rgba(black, 0.06);
  border-radius: 0px;

  overflow: hidden;
}
</style>
