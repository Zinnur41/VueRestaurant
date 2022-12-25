<template>
    <div class="catalog-item">
        <modal-product
            v-if="isInfoModalVisible"
            rightBtnTitle="Добавить в корзину"
            :modalTitle="products.name"
            @closeModal="closeInfoModal"
            @rightBtnAction="addToCard"
        >
          <div>
              <img :src="require('../../assets/images/' + products.image)" alt="error">
              <p>Категория: {{ products.category }}</p>
              <p>Описание: {{ products.description }}</p>
              <p>Пищевая ценность: {{ products.mass }} г.</p>
              <p>Цена: {{ products.price }} руб.</p>
          </div>
        </modal-product>

        <img :src="require('../../assets/images/' + products.image)" alt="error">
        <p>{{ products.name }}</p>
        <button class="catalog-item__show-info"
                @click="showModalInfo"
        >
          Инфо
        </button>
        <button class="btn-add" @click="addToCard">{{ products.price }} руб.</button>
    </div>
</template>

<script>
import modalProduct from "@/components/modal/Modal-product";

export default {
    name: "Catalog-item",
    components: {
        modalProduct
    },
    data() {
        return {
            isInfoModalVisible: false
        }
    },
    props: {
        products: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        addToCard() {
            this.$emit('addToCart',this.products);
        },
        showModalInfo() {
            this.isInfoModalVisible = true;
        },
        closeInfoModal() {
            this.isInfoModalVisible = false;
        }
    },

}
</script>

<style scoped>
    .catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
    }

    .btn-add {
      position: relative;
      right: 20%;
      z-index: 1;
      color: black;
      font-size: 135%;
      font-weight: 100;
      text-decoration: none;
      padding: .15em .5em;
    }
    .btn-add:after {
      content: "В корзину";
      position: absolute;
      z-index: -1;
      top: -2px;
      bottom: -2px;
      left: -2px;
      width: calc(100% + 7*(1em*90/135) - 2px*2*2);
      text-align: right;
      color: #fff;
      font-size: 90%;
      padding: .25em .5em;
      border-radius: 5px;
      transform: skewX(-10deg);
      background: linear-gradient(greenyellow, green) no-repeat 100% 0;
      background-size: calc(7*(1em*90/135) + .5em) 100%;
      box-shadow: inset calc(-7*(1em*90/135) - .5em) 0 rgba(255,255,255,0);
      transition: .3s;
    }
    .btn-add:hover:after {
      box-shadow: inset calc(-9*(1em*90/135) - .5em) 0 rgba(255,255,255,.2);
    }
    .btn-add:active:after {
      background-image: linear-gradient(#c61e40, #d4536d);
    }
    .catalog-item__show-info {
      position: relative;
      right: 22%;
      font-weight: 700;
      height: 40px;
      color: white;
      text-decoration: none;
      padding: .8em 1em calc(.8em + 3px);
      border-radius: 3px;
      background: rgb(64,199,129);
      box-shadow: 0 -3px rgb(53,167,110) inset;
      transition: 0.2s;
    }
    .catalog-item__show-info:hover { background: rgb(53, 167, 110); }
    .catalog-item__show-info:active {
      background: rgb(33,147,90);
      box-shadow: 0 3px rgb(33,147,90) inset;
    }
</style>