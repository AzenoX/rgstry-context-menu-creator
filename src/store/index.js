import { createStore } from "vuex";

export default createStore({
    state: {
        code: ''
    },
    mutations: {
        setCode(state, code) {
            state.code = code;
        },
        getCode(state) {
            return state.code;
        }
    }
});