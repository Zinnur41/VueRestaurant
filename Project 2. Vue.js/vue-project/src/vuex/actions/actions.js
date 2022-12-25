import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    },
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