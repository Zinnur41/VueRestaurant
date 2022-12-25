<template>
    <div class="cart">
        <router-link :to="{name: 'catalog'}">
            <div class="catalog__link_to_cart">Назад</div>
        </router-link>
        <h1>Корзина</h1>
        <p v-if="!cart.length">Корзина пуста</p>
        <cart-item
            v-for="(item, index) in cart"
            :key="item.id"
            :cart_item="item"
            @deleteFromCart="deleteFromCart(index)"
            @addCol="addCol(index)"
            @deleteCol="deleteCol(index)"
        />
      <div class="cart-total">
          <p class="total-name">Сумма: </p>
          <p>{{ cartTotalCost }} руб.</p>
          <button @click="submit" class="submit">Сделать заказ</button>
      </div>
    </div>
</template>

<script>
import cartItem from "@/components/cart/Cart-item";
import {mapActions} from "vuex";

export default {
    name: "Cart-product",
    components: {
        cartItem
    },
    props: {
        cart: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'ADD_COL_ITEM',
            'DELETE_COL_ITEM',
            'DELETE_CART'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        deleteCol(index) {
            this.DELETE_COL_ITEM(index);
        },
        addCol(index) {
            this.ADD_COL_ITEM(index);
        },
        submit() {
            if (this.cart.length) {
                alert('Заказ сделан! С вас' + ' ' +this.cartTotalCost);
                for (let i = 0; i < this.cart.length; i++) {
                    this.DELETE_CART(i)
                }
            } else {
                alert('Корзина пуста')
            }
        }
    },
    computed: {
        cartTotalCost() {
            let result = [];
            if (this.cart.length) {
                for (let item of this.cart) {
                    result.push(item.price * item.quantity);
                }
                result = result.reduce(function (sum, el) {
                    return sum + el;
                })
                return result;
            } else {
                return 0;
            }
        }
    }
}
</script>

<style scoped>
    .cart {
        margin-bottom: 100px;
    }
    .cart-total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 16px 24px;
      display: flex;
      justify-content: center;
      background: teal;
      color: white;
    }
    .total-name {
        margin-right: 16px;
    }
    .submit {
        position: relative;
        left: 30%;
    }
</style>