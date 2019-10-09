import progression from "@/store/modules/user/progression";
import history from "@/store/modules/user/history";

const state = {
    data: {
        name: null,
        email: null,
        logedIn: false
    },
    progressions: ["lala", "lolo"],
    ready: false
};

const getters = {
    data: (state, getters, rootState, rootGetters) => {
        return state.data;
    },

    progressions: (state, getters, rootState, rootGetters) => {
        return state.progressions;
    },

    ready: (state, getters, rootState, rootGetters) => {
        return state.ready;
    }
};

const actions = {
    init: function({ dispatch, state }) {
        if (localStorage.userToken) {
            dispatch("api/setToken", localStorage.userToken, {
                root: true
            });
            dispatch("api/read", {}, { root: true });
        } else {
            state.ready = true;
        }
    },

    register: function({ dispatch }, data) {
        dispatch("api/register", data, { root: true });
    },

    login: function({ dispatch }, data) {
        dispatch("api/login", data, { root: true });
    },

    logout: function({ dispatch }) {
        dispatch("api/logout", {}, { root: true });
    }
};

const mutations = {
    login: function(state, data) {
        state.data.email = data.email;
        state.data.name = data.name;
        state.data.logedIn = true;
        state.ready = true;
    },
    logout: function(state) {
        state.data.email = null;
        state.data.name = null;
        state.data.logedIn = false;
        state.ready = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {
        progression,
        history
    }
};
