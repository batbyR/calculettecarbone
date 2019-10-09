const state = {
  data: {}
};

const getters = {
  all: (state, getters, rootState, rootGetters) => {
    return state.data;
  },

  ordered: (state, getters, rootState, rootGetters) => {
    return getters["all"].sort(function(a, b) {
      return a.order - b.order;
    });
  },

  visible: (state, getters, rootState, rootGetters) => {
    return getters["ordered"].filter(q => q.order > 0);
  },

  submitted: (state, getters, rootState, rootGetters) => {
    return getters["visible"].filter(q => q.submitted);
  },

  notSubmitted: (state, getters, rootState, rootGetters) => {
    return getters["visible"].filter(q => !q.submitted);
  }
};

const actions = {
  set: function({ state, commit, dispatch }, data) {
    data.questions.forEach(question => {
      question.submitted = false;
      question.value = null;
      question.result = 0;
      question.domain = data.domains.find(d => {
        return d.code == question.domain;
      });
    });

    commit("set", data.questions);
    dispatch("calculate");
  },
  submit: function({ state, commit, dispatch }, question) {
    question.submitted = true;
    dispatch("calculate");
    commit("submit");
  },
  calculate: function({ state, commit, dispatch }) {
    state.data.forEach(question => {
      if (question.formula) {
        dispatch("parseFormula", question);
      } else {
        question.result = question.coefficient * question.value;
      }
    });
  },
  parseFormula: function({ state, rootGetters, commit, dispatch }, question) {
    var formula = question.formula.replace("COEF", question.coefficient);

    var settings = rootGetters["calculator/settings/all"];

    formula = formula.replace("VAL", question.value);

    state.data.forEach(question => {
      formula = formula.replace("QUESTION_" + question.code, question.value);
    });
    if (settings.length > 0) {
      settings.forEach(setting => {
        formula = formula.replace("SETTINGS_" + setting.code, setting.value);
      });
    }

    try {
      question.result = eval(formula) ? eval(formula) : 0;
    } catch (e) {
      if (e instanceof SyntaxError) {
      }
    }
    //   question.result = eval(formula);
  },
  reset: function({ state, dispatch }) {
    state.data.forEach(question => {
      question.value = null;
      question.submitted = false;
    });
    dispatch("calculate");
  }
};

const mutations = {
  set: function(state, data) {
    state.data = data;
  },
  submit: function(state, data) {}
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
