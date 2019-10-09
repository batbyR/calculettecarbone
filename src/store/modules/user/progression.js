const state = {
    root: "calc_"
};

const getters = {};

const actions = {
    save: function({ state, commit, dispatch, rootGetters }) {
        var toSave = {
            q: [],
            s: [],
            m: rootGetters["calculator/settings/user"].email
        };

        rootGetters["calculator/questions/all"].forEach(question => {
            toSave.q.push({
                c: question.code,
                v: question.value,
                s: question.submitted
            });
        });

        rootGetters["calculator/settings/all"].forEach(setting => {
            toSave.s.push({
                c: setting.code,
                v: setting.value
            });
        });

        console.log(toSave);
        localStorage.setItem(
            state.root + rootGetters["calculator/about"].id,
            JSON.stringify(toSave)
        );

        if (rootGetters["user/data"].logedIn) {
            var payload = {
                id: rootGetters["calculator/about"].id,
                progression: toSave
            };
            dispatch("api/saveprogression", payload, {
                root: true
            });
        }
    },

    load: function({ state, commit, dispatch, rootGetters }) {
        if (rootGetters["user/data"].logedIn) {
            var payload = {
                id: rootGetters["calculator/about"].id
            };
            dispatch("api/loadprogression", payload, {
                root: true
            });
        } else {
            var json = localStorage.getItem(
                state.root + rootGetters["calculator/about"].id
            );

            if (json) {
                dispatch("applyProgression", json);
            }
        }
    },

    applyProgression: function({ state, commit, dispatch, rootGetters }, json) {
        var data = JSON.parse(json);

        rootGetters["calculator/settings/user"].email = data.m;

        rootGetters["calculator/questions/all"].forEach(question => {
            data.q.forEach(q => {
                if (question.code == q.c) {
                    if (q.s === true) {
                        question.value = q.v;
                        question.submitted = q.s;
                    }
                }
            });
        });

        rootGetters["calculator/settings/all"].forEach(setting => {
            data.s.forEach(s => {
                if (setting.code == s.c) {
                    setting.value = s.v;
                    setting.submitted = s.s;
                }
            });
        });

        dispatch("calculator/questions/calculate", null, {
            root: true
        });
    }
};

const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
