const state = {
  data: {}
};

const getters = {
  all: (state, getters, rootState, rootGetters) => {
    state.data.forEach(domain => {
      domain.result = 0;
      domain.questions.forEach(question => {
        domain.result += question.result;
      });
      domain.result = Math.round(domain.result, 2);
    });
    return state.data;
  }
};

const actions = {
  set: function({ state, commit, dispatch }, data) {
    data.domains.forEach(domain => {
      domain.result = 0;
      domain.questions = data.questions.filter(q => {
        return q.domain.code == domain.code;
      });
    });

    commit("set", data.domains);
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
