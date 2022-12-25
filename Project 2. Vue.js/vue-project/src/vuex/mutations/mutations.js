export default {
    ADD_COL_ITEM: (state, index) => {
        state.cart[index].quantity++
    },
    DELETE_COL_ITEM: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--
        }
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProductExist = false;
            state.cart.map((item) => {
                if (item.id === product.id) {
                    isProductExist = true;
                    alert('Товар уже в корзине!')
                }
            })
            if (!isProductExist) {
                state.cart.push(product);
            }
        } else {
            state.cart.push(product);
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1);
    },
    DELETE_CART: (state, index) => {
        state.cart.splice(index);
    },
}