<template>

  <div class="calculator-page container-fluid  ">

    <div v-if="selectQuestionMode">
      <questions-list
        @selectQuestion="selectQuestion"
        @exit="selectQuestionMode=false"
        :question="currentQuestion"
      ></questions-list>
    </div>
    <div
      v-else
      class="calculator-zone"
    >

      <div class="row row-eq-height h-100  ">

        <!-- COLUMN 2 : Form -->
        <div class="col-12 col-sm-6 py-4 p-3 bg-light col-form">
          <calculator-form
            :question="currentQuestion"
            @submit="submitQuestion"
            @viewquestion="viewQuestion"
            @next="pickNewQuestion"
            v-if="currentQuestion"
          ></calculator-form>
          <div v-else>

            <div class="text-center">
              <h2 class="my-5 py-5">Votre bilan Carbone est terminé</h2>
              <div class="col text-center">
                <div
                  class="btn btn-link"
                  @click.prevent="viewQuestion"
                >
                  Voir les questions
                </div>
              </div>

              <div
                class="btn btn-primary btn-xl"
                @click="saveHistory()"
              >Valider et voir le détail</div>
            </div>
          </div>
        </div>

        <!-- COLUMN 3 : Result -->
        <div class="col-12 col-sm-6 result-col py-0 m-0">
          <router-link
            class="float-right"
            to="/settings"
          >
            <font-awesome-icon
              class="mt-2 h3 text-muted"
              icon="cog"
            />
          </router-link>

          <the-result
            :result=result
            class="mt-5"
          />

          <the-graph :domains=domains />

          <p class="text-center">l'empreinte carbone du service public comprend :<br>
            <b>Les hopitaux, les écoles, le réseau routier, les forces de l'ordre...</b><br>
            Divisé par le nombre d'havitants du pays
          </p>

          <span
            class="btn btn-link btn-xs float-right"
            @click=reset
          >Reset</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
//

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
      currentQuestion: null,
      selectQuestionMode: false
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
      this.selectQuestionMode = false;
    },
    viewQuestion: function () {
      this.selectQuestionMode = true;
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


