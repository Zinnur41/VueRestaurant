<template>
  <div class="catalog">
    <router-link :to="{name: 'feedback'}">
      <div class="catalog__link_to_feedback">Оставьте отзыв</div>
    </router-link>
    <router-link :to="{name: 'registration'}">
      <div class="catalog__link_to_req">Регистрация</div>
    </router-link>
    <router-link :to="{name: 'cart', params: {cart: CART}}">
      <div class="catalog__link_to_cart">Корзина: {{ CART.length }}</div>
    </router-link>
    <h1 class="title-main">Ресторан "ШашлыкOff" <img class="img-logo" src="../../assets/images/img.png"></h1>
    <div class="filters">
      <select-product
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
      <div class="range-slider">
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="minPrice"
            @change="setRangeSlider"
        >
        <input
            type="range"
            min="0"
            max="1000"
            step="10"
            v-model.number="maxPrice"
            @change="setRangeSlider"
        >
      </div>
    </div>
    <div class="range-values">
      <p>Min: {{ minPrice }}</p>
      <p>Max: {{ maxPrice }}</p>
    </div>
    <h2 class="title-prev">Список блюд</h2>
    <div class="catalog-main">
      <div class="catalog-list">
        <catalog-item
            v-for="product in filteredProducts"
            :key="product.id"
            :products="product"
            @addToCart="addToCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/catalog/Catalog-item";
import {mapActions, mapGetters} from 'vuex'
import SelectProduct from "@/components/catalog/Select-product";

export default {
    name: "Catalog-product",
    components: {
        CatalogItem, SelectProduct
    },
    data() {
        return {
            categories: [
                {name: 'Все', value: 'All'},
                {name: 'Салат', value: 'салат'},
                {name: 'Суп', value: 'суп'},
                {name: 'Горячее', value: 'горячее'},
            ],
            selected: 'Все',
            sortedProducts: [],
            minPrice: 0,
            maxPrice: 1000,
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
        filteredProducts() {
            if (this.sortedProducts.length) {
                return this.sortedProducts
            } else {
                return this.PRODUCTS;
            }
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCard(data) {
            this.ADD_TO_CART(data);
        },
        sortByCategories(category) {
            let obj = this;
            this.sortedProducts = [...this.PRODUCTS]
            this.sortedProducts = this.sortedProducts.filter(function (item) {
                return item.price >= obj.minPrice && item.price <= obj.maxPrice
            })
            if (category) {
                this.sortedProducts = this.sortedProducts.filter(function (e) {
                    obj.selected === category.name;
                    return e.category === category.name
                })
            }
        },
        setRangeSlider() {
            if (this.minPrice > this.maxPrice) {
                let temp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = temp;
            }
            this.sortByCategories();
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    this.sortByCategories()
                }
            })
    }
}
</script>

<style>
.img-logo {
  position: absolute;
  width: 60px;
  height: 60px;
}

.catalog-list {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-main {
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: normal;
  font-family: 'Ultra', sans-serif;
  font-size: 36px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: 0 2px white, 0 3px #777;
}

.title-prev {
  margin: 1em 0 0.5em 0;
  color: #343434;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  font-family: 'Orienta', sans-serif;
}

.catalog__link_to_cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 12px;
  border: solid 1px teal;
}

.catalog__link_to_req {
  position: absolute;
  top: 10px;
  right: 140px;
  padding: 12px;
  border: solid 1px teal;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}

.range-slider svg, .range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
.catalog__link_to_feedback {
  position: absolute;
  top: 10px;
  right: 280px;
  padding: 12px;
  border: solid 1px teal;
}

.range-values {
  position: relative;
  left: 34%;
}
</style>