import Vue from 'vue'
import Vuex from 'vuex'
import actions from "@/vuex/actions/actions";
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products:[],
        cart:[],
        user:{},
    },
    mutations,
    plugins: [createPersistedState()],
    actions,
    getters,
});
export default store;