const state = {
    data: {},
    user: {
        email: null
    }
};

const getters = {
    all: (state, getters, rootState, rootGetters) => {
        return state.data;
    },
    user: (state, getters, rootState, rootGetters) => {
        return state.user;
    }
};

const actions = {
    set: function({ state, commit, dispatch }, data) {
        data.settings.forEach(setting => {
            setting.submitted = false;
            setting.value = 0;

            if (setting.answers) {
                var options = setting.answers.split(",");

                setting.answers = options;
            }
        });

        commit("set", data.settings);
    }
};

const mutations = {
    set: function(state, data) {
        state.data = data;
    },
    save: function(state, data) {}
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
