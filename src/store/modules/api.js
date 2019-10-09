import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
Vue.use(axios);

const state = {
  data: {},
  instance: axios.create({
    baseURL: process.env.VUE_APP_API_URL
  })
};

const getters = {
  all: state => {
    return state.data;
  }
};

const actions = {
  setToken: function({ state }, token) {
    state.instance.defaults.headers.common["Authorization"] = "Bearer " + token;
  },

  login: function({ state, commit, dispatch }, data) {
    state.instance.post("login", data.payload).then(response => {
      localStorage.userToken = response.data.token;
      commit("user/login", response.data, { root: true });
      dispatch("setToken", response.data.token);
      data.success();
    });
  },

  read: function({ state, commit, dispatch }) {
    state.instance
      .post("read", {})
      .then(response => {
        commit("user/login", response.data, { root: true });
      })
      .catch(function(failure) {
        localStorage.removeItem("userToken");
        commit("user/logout", {}, { root: true });
      });
  },

  logout: function({ state, commit }) {
    state.instance.post("logout", {}).then(response => {
      localStorage.removeItem("userToken");
      commit("user/logout", response.data, { root: true });
    });
  },

  register: function({ state, commit, dispatch }, data) {
    state.instance.post("register", data.payload).then(response => {
      localStorage.userToken = response.data.token;
      commit("user/login", response.data, { root: true });
      dispatch("setToken", response.data.token);
      data.success();
    });
  },

  saveprogression: function({ state, commit }, payload) {
    console.log(payload);
    state.instance.post("saveprogression", payload).then(response => {});
  },

  loadprogression: function({ state, commit, dispatch }, payload) {
    state.instance.post("loadprogression", payload).then(response => {
      dispatch("user/progression/applyProgression", response.data.data, {
        root: true
      });
    });
  },

  savehistory: function({ state, commit }, data) {
    state.instance.post("savehistory", data.payload).then(response => {
      data.callback(response.data);
    });
  },

  loadhistory: function({ state, commit }, data) {
    state.instance.post("loadhistory", data.payload).then(response => {
      data.callback(response.data);
    });
  },

  calculator: function({ state, commit, dispatch }, calculator_key) {
    state.instance.get("player/" + calculator_key).then(response => {
      dispatch("calculator/questions/set", response.data.form, {
        root: true
      });

      dispatch("calculator/domains/set", response.data.form, {
        root: true
      });

      dispatch("calculator/settings/set", response.data.form, {
        root: true
      });

      commit("calculator/set", response.data, { root: true });
    });
  },

  histories: function({ state, commit, dispatch }, calculator_key) {
    state.instance.get("histories/" + calculator_key).then(response => {
      dispatch("histories/set", response.data, {
        root: true
      });
    });
  }
};

const mutations = {
  set: function(state, data) {
    state.data = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
