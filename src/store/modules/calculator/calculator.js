import questions from "@/store/modules/calculator/questions";
import domains from "@/store/modules/calculator/domains";
import settings from "@/store/modules/calculator/settings";

const state = {
    data: {},

    isReady: false
};

const getters = {
    about: (state, getters, rootState, rootGetters) => {
        return state.data;
    },

    ready: (state, getters, rootState, rootGetters) => {
        return state.isReady;
    },

    completed: (state, getters, rootState, rootGetters) => {
        var completed = true;
        getters["questions/all"].forEach(question => {
            if (!question.submitted) completed = false;
        });
        return completed;
    },

    result: (state, getters, rootState, rootGetters) => {
        var result = 0;
        getters["questions/all"].forEach(question => {
            result += question.result;
        });
        return result;
    },

    progress: (state, getters, rootState, rootGetters) => {
        return Math.round(
            (getters["questions/submitted"].length /
                getters["questions/visible"].length) *
                100
        );
    }
};

const actions = {
    init: function({ state, commit, dispatch }, params) {
        dispatch("api/calculator", params.calculator_key, { root: true });
    }
};

const mutations = {
    set: function(state, data) {
        state.data = data;
        state.isReady = true;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
    modules: {
        questions,
        domains,
        settings
    }
};
