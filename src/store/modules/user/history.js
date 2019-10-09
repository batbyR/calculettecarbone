const state = {
    root: "calc_",
    data: {
        settings: [],
        questions: [],
        calculator: {},
        domains: []
    }
};

const getters = {
    about: (state, getters, rootState, rootGetters) => {
        return state.data;
    },
    settings: (state, getters, rootState, rootGetters) => {
        return state.data.settings;
    },

    questions: (state, getters, rootState, rootGetters) => {
        return state.data.questions;
    },

    calculator: (state, getters, rootState, rootGetters) => {
        return state.data.calculator;
    },

    domains: (state, getters, rootState, rootGetters) => {
        return state.data.domains;
    }
};

const actions = {
    save: function({ state, commit, dispatch, rootGetters }, callback) {
        var toSave = {
            total: 0,
            email: rootGetters["calculator/settings/user"].email,
            questions: [],
            domains: [],
            calculator: {},
            settings: rootGetters["calculator/settings/all"]
        };

        var calculator = rootGetters["calculator/about"];
        toSave.calculator = {
            cover: calculator.cover,
            key: calculator.key,
            id: calculator.id,
            name: calculator.name,
            description: calculator.description
        };

        rootGetters["calculator/questions/all"].forEach(q => {
            var domain = {
                code: q.domain.code,
                color: q.domain.color,
                description: q.domain.description,
                icon: q.domain.icon,
                label: q.domain.label,
                moy: q.domain.moy,
                result: q.domain.result
            };

            toSave.questions.push({
                code: q.code,
                coefficient: q.coefficient,
                description: q.description,
                domain: domain,
                formula: q.formula,
                indicative: q.indicative,
                label_short: q.label_short,
                order: q.order,
                question: q.question,
                result: q.result,
                submitted: q.submitted,
                unit: q.unit,
                value: q.value
            });

            toSave.total += q.result;
        });

        rootGetters["calculator/domains/all"].forEach(d => {
            toSave.domains.push({
                code: d.code,
                color: d.color,
                description: d.description,
                icon: d.icon,
                label: d.label,
                moy: d.moy,
                result: d.result
            });
        });

        // if (rootGetters["user/data"].logedIn) {
        var data = {
            payload: {
                id: rootGetters["calculator/about"].id,
                history: toSave
            },
            callback: callback
        };
        dispatch("api/savehistory", data, {
            root: true
        });
        // }
    },

    load: function({ state, commit, dispatch, rootGetters }, data) {
        var data2 = {
            payload: data.payload,
            callback: function(response) {
                response.data = JSON.parse(response.data);
                commit("load", response.data);
                data.callback(response.data);
            }
        };
        dispatch("api/loadhistory", data2, {
            root: true
        });
    }
};

const mutations = {
    load: function(state, data) {
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
