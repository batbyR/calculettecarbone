import Vue from "vue";
import Vuex from "vuex";
import calculator from "./modules/calculator/calculator";
import histories from "./modules/histories";
import user from "./modules/user/user";
import ux from "./modules/ux";
import api from "./modules/api";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        calculator,
        histories,
        ux,
        api,
        user
    }
});
