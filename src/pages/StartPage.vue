<template>
  <div class="startpage">

    <div
      class="banner container-fluid  m-0 py-5"
      v-bind:style="{ 'background-image': 'url(' + calculator.cover + ')' }"
    >
      >
      <div class="text-center p-5">
        <h1> {{ calculator.name}} </h1>
        <h2 v-html="previewText(calculator.description)"> </h2>

        <div v-if="user.logedIn">
          <router-link
            to="/settings"
            class="btn btn-secondary btn-lg mt-5"
          >
            {{dictionnary.button_start}}
          </router-link>
        </div>
        <div v-else>
          <router-link
            to="/settings"
            class="btn btn-secondary btn-lg mt-5"
          >{{dictionnary.button_start}}
            !</router-link>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <h2 class="mb-4">
        Pourquoi calculer votre empreinte carbone ?
      </h2>
      <h3>Le résultat d'un bilan carbone vous informe sur la répartition de vos emissions de gaz à effet de serre. Vous pourrez choisir avec lucidité les actions les plus impactantes pour la planète.</h3>
    </div>

    <hr class="my-5">

    <div class="container text-center">
      <h2 class="mb-5">
        Votre empreinte carbone se divise en "5 grandes familles"
      </h2>
      <div class="row">
        <div
          class="col-4 py-5 text-white"
          v-for="domain in domains"
          :style="{background : domain.color}"
          :key="domain.code"
        >
          <h2>{{domain.label}}</h2>
          <font-awesome-icon
            class="icon"
            :icon="domain.icon"
          />
        </div>
      </div>
    </div>

    <div class="container-fluid mt-5 p-5 text-left">
      <div class="container  ">
        <h2 class="mb-5">
          Définition, le kg eq. co2 :<br>
        </h2>
        <h3>
          L'être humain contribue au réchauffement climatique en émettant différents gaz dans l'atmosphère, entre autre, le co2, le méthane et le protoxyde d'azote. Ces 3 gaz n'ont pas le meme pouvoir réchauffant, notre utilisation du kilograme equivalent co2 les placent dans la même unité.<br>Nous pouvons ainsi les comparer.
        </h3>
      </div>
    </div>

    <div class="container-fluid bg-light text-center py-5 px-4">
      <h2 class="mb-5">
        {{dictionnary.start_recommand_title}}<br>
      </h2>
      <iframe
        width="560"
        height="315"
        :src="dictionnary.start_recommand_video_url"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

  </div>
</template>



<script>
import { marked } from "@/mixins/marked.js";

export default {
  computed: {
    domains: function () {
      return this.$store.getters["calculator/domains/all"];
    },
    dictionnary () {
      return this.$store.getters['calculator/about'].dictionnary;
    },
    calculator: function () {
      return this.$store.getters["calculator/about"];
    },
    user: function () {
      return this.$store.getters["user/data"];
    },
  },
  methods: {

  },
  mixins: [marked]
}
</script>

<style scoped lang="scss">
.banner {
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  color: white;
  text-shadow: 0px 0px 15px black;
  position: relative;

  > div {
    position: relative;
  }

  &:before {
    content: "";
    background: rgba(black, 0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
}

.btn-primary {
  border-radius: 0px;
}
h1 {
  padding: 50px 0px;
}

.icon {
  font-size: 40px;
  margin: 20px 0px;
}
</style>


