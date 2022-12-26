
export default {
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product);
    },
    ADD_COL_ITEM({commit}, index) {
        commit('ADD_COL_ITEM', index)
    },
    DELETE_COL_ITEM({commit}, index) {
        commit('DELETE_COL_ITEM', index)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index);
    },
    DELETE_CART({commit}, index) {
        commit('DELETE_CART', index);
    },
}