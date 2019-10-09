import Vue from "vue";
import Router from "vue-router";

import StartPage from "./pages/StartPage.vue";
import CalculatorPage from "./pages/CalculatorPage.vue";
import RecapPage from "./pages/RecapPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import OverviewPage from "./pages/OverviewPage.vue";
import HistoryPage from "./pages/HistoryPage.vue";
import SettingsPage from "./pages/SettingsPage.vue";
import QuestionsPage from "./pages/QuestionsPage.vue";

window.Vue = require("vue");
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "start",
      component: StartPage
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsPage
    },
    {
      path: "/calc",
      name: "calc",
      component: CalculatorPage
    },
    {
      path: "/questions",
      name: "question",
      component: QuestionsPage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/recap/:id",
      name: "recap",
      component: RecapPage
    },
    {
      path: "/overview/",
      name: "overview",
      component: OverviewPage
    },
    {
      path: "/history",
      name: "history",
      component: HistoryPage
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
