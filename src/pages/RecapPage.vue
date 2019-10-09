<template>

  <div
    class="history-page h-100"
    v-if="total"
  >

    <div class=" container-fluid  ">
      <the-result
        :result=total
        class="mt-5"
      />
      <the-graph
        :domains=domains
        :height=400
      />
    </div>

    <div class="bg-light p-5">
      <h2 class="text-center mb-5">Vos 3 activités les plus polluantes</h2>
      <div class="container">
        <div class="row">
          <div
            class="col text-center "
            v-for="question in top3"
            :key=question.code
          >
            <div class="card p-4">

              <h2 class="mb-4">{{question.label_short}}</h2>
              <h2>
                <base-carbone-display
                  :amount="question.result"
                  :br="true"
                >
                </base-carbone-display>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class=" p-5">
      <h2 class="text-center mb-5">Par rapport à la moyenne Française</h2>
      <the-graph-compares
        :domains=domains
        :compares=compares
      />
    </div> -->
    <div class="worldmap py-5">
      <div class="container p-4">
        <h2 class="text-center mb-5">Dans le monde</h2>
        <the-graph-countries
          :height=600
          :result="total"
        />
      </div>
    </div>
    <hr class="my-5" />
    <h2 class="text-center mb-5">Objéctifs 2030</h2>
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="lead">
            Dans son dernier rapport, le GIEC annonce qu'il est encore possible de changer notre trajectoire pour limiter le réchauffement de la planète à 1,5 degré d'ici 2100.
          </p>
          <p class="lead">
            Pour les français, cela représente une réduction rapide des emissions de gaz à effet de serre. En 2030, il nous faut avoir atteint une moyenne de 3,7 tC02 / habitant.
          </p>
          <!-- <div class="btn btn-primary">
            Voir l'infohraphie de B&L Evolution
          </div> -->
        </div>
        <div class="col">
          <h4>Quelle est l'ampleur des mesures à mettre en oeuvre ?</h4>
          <ul class=" list-group">
            <li class="list-group-item">
              Votre bilan carbone actuel:
              <base-carbone-display
                :amount="total"
                :br="false"
              ></base-carbone-display>
            </li>
            <li class="list-group-item">
              Votre bjectif pour 2030 :
              <base-carbone-display
                :amount="3700"
                :br="false"
              ></base-carbone-display>
            </li>
            <li class="list-group-item ">
              <h4><b>Diviser</b> vos émissions par : <b>{{Math.round(total/3700*10)/10}}</b></h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr>
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
      return this.$store.getters['user/history/about'];
    },
    total: function () {
      return this.$store.getters['user/history/about'].total;
    },
    domains: function () {
      return this.$store.getters['user/history/domains'];
    },
    top3: function () {
      var questions = this.$store.getters['user/history/questions'];
      questions.sort(function (a, b) {
        return b.result - a.result;
      });

      return questions.slice(0, 3);
    },
    compares: function () {
      var compares = [];
      this.$store.getters['user/history/domains'].forEach(domain => {
        compares.push({
          result: domain.moy
        })
      });
      return compares;
    },
    countries: function () {
      var bag = [];

    }
  },
  methods: {


  },
  mounted: function () {

    var data = {
      payload: {
        id: this.$route.params.id
      },
      callback: function (data) {

      }
    };

    this.$store.dispatch('user/history/load', data);

  }
};
</script>

<style scoped lang="scss">
.history-page {
}
</style>
