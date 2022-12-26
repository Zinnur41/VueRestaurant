import Vue from 'vue'
import Vuex from 'vuex'
import actions from "@/vuex/actions/actions";
import mutations from "@/vuex/mutations/mutations";
import getters from "@/vuex/getters/getters";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        products:[
            {
                "image": "1.png",
                "name": "Салат Греческий с курицей",
                "price": 279,
                "id": 1,
                "available": true,
                "category": "Салат",
                "description": "Сочетание классического рецепта салата Греческий с нежным куриным филе, приготовленном на гриле",
                "mass": 180
            },
            {
                "image": "2.png",
                "name": "Салат Охота Оливье",
                "price": 209,
                "id": 2,
                "available": true,
                "category": "Салат",
                "description": "Сочетание любимого Оливье с охотничьими колбасками",
                "mass": 250
            },
            {
                "image": "3.png",
                "name": "Салат Гавайский",
                "price": 229,
                "id": 3,
                "available": false,
                "category": "Салат",
                "description": "Листья салата, консервированные ананасы, свежие огурцы, копченая куриная грудка, майонез, кунжутный соус, кунжут.",
                "mass": 160
            },
            {
                "image": "4.png",
                "name": "Борщ по-сибирски",
                "price": 189,
                "id": 4,
                "available": true,
                "category": "Суп",
                "description": "Оцените оригинальную подачу с шашлычком из курицы, хлебом, грудинкой, сметаной и горчицей",
                "mass": 340
            },
            {
                "image": "5.png",
                "name": "Солянка",
                "price": 239,
                "id": 5,
                "available": false,
                "category": "Суп",
                "description": "Густая и сытная, по традиционному рецепту русcкой кухни, сдобренная сметаной – прекрасное начало обеда для тех, кто хорошо потрудился с утра",
                "mass": 260
            },
            {
                "image": "6.png",
                "name": "Суп Гаспачо",
                "price": 199,
                "id": 6,
                "available": true,
                "category": "Суп",
                "description": "Освежающий и легкий холодный суп-пюре из томатов с чесночными гренками и кунжутом",
                "mass": 250
            },
            {
                "image": "7.png",
                "name": "Ассорти-гриль Small",
                "price": 399,
                "id": 7,
                "available": true,
                "category": "Горячее",
                "description": "Для маленькой компании: нежное филе цыпленка, мини-кебабы, свинина, филе куриное, приготовленные на гриле. Предлагаем ассорти с гарниром на выбор, овощным салатом и соусом ШашлыкоFF",
                "mass": 450
            },
            {
                "image": "8.png",
                "name": "Стейк из семги",
                "price": 719,
                "id": 8,
                "available": true,
                "category": "Горячее",
                "description": "Стейк из семги, лимон.специи. Подается с гарниром на выбор , овощным салатом и соус Тар-тар.",
                "mass": 460
            },
            {
                "image": "9.png",
                "name": "Цыпленок гриль",
                "price": 349,
                "id": 9,
                "available": true,
                "category": "Горячее",
                "description": "Нежное филе цыпленка, приготовленное на гриле. Подаётся с гарниром на выбор, овощным салатом и соусом тартар",
                "mass": 430
            }
        ],
        cart:[],
        user:{},
    },
    mutations,
    plugins: [createPersistedState()],
    actions,
    getters,
});
export default store;