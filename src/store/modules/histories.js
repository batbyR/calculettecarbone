const state = {
    histories: []
};

const getters = {
    all: (state, getters, rootState, rootGetters) => {
        return state.histories;
    }
};

const actions = {
    init: function({ state, commit, dispatch }, params) {
        dispatch("api/histories", params.calculator_key, { root: true });
    },
    set: function({ state, commit, dispatch }, data) {
        commit("set", data);
    }
};

const mutations = {
    set: function(state, histories) {
        state.histories = histories;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
