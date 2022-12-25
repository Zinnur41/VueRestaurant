<template>
    <div class="cart-item">
        <img class="cart-item_image" :src="require('../../assets/images/' + cart_item.image)" alt="error">
        <div class="cart-item_info">
          <p><strong>{{ cart_item.name }}</strong></p>
            <p>{{ cart_item.description }}</p>
            <p>Пищевая ценность: {{ cart_item.mass }} г.</p>
            <p>Цена: {{ cart_item.price }} руб.</p>
        </div>
        <div class="cart-item_quantity">
            <p>Кол-во</p>
            <div>
                <button class="btn_delete-col" @click="deleteColItem">-</button>
                <br>
                {{ cart_item.quantity }}
                <button class="btn_add-col" @click="addColItem">+</button>
            </div>
        </div>
        <button class="btn-delete" @click="deleteFromCart">Удалить</button>
    </div>
</template>

<script>

export default {
    name: "Cart-item",
    props: {
        cart_item: {
            type: Object,
            default: () => {}
        }
    },
    mounted() {
        this.$set(this.cart_item, 'quantity', 1);
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart');
        },
        deleteColItem() {
            this.$emit('deleteCol');
        },
        addColItem() {
            this.$emit('addCol');
        }
    },
}
</script>

<style scoped>
    .btn_delete-col {
        color: red;
    }
    .btn_add-col {
        color: green
    }
    .cart-item_quantity {
      position: relative;
      top: 1px;
    }
    .cart-item {
        display:flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
    }
    .cart-item_image {
      max-width: 200px;
    }
    .cart-item_info {
      border-left: 1.5px solid wheat;
      border-right: 1.5px solid wheat;
    }
    .btn-delete {
      position: relative;
      display: inline-block;
      width: 10em;
      height: 2.5em;
      line-height: 2.5em;
      vertical-align: middle;
      text-align: center;
      text-decoration: none;
      text-shadow: 0 -1px 1px #777;
      color: #fff;
      outline: none;
      border: 2px solid #F64C2B;
      border-radius: 5px;
      box-shadow: 0 0 0 60px rgba(0,0,0,0) inset, .1em .1em .2em #800;
      background: linear-gradient(#FB9575, #F45A38 48%, #EA1502 52%, #F02F17);
    }
    .btn-delete:active {
      top: .1em;
      left: .1em;
      box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
    }

</style>