<template>
  <div class="feedback">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_cart">Назад</div>
    </router-link>
    <h1>Оставьте свой отзыв</h1>
    <input v-model="name" class="input-feedback" placeholder="Ваше имя">
    <input v-model="city" class="input-feedback" placeholder="Из какого вы города">
    <input v-model="feed" class="input-feedback" placeholder="Ваш отзыв">
    <button @click="createFeedBack" class="btn-feedback">Отправить отзыв</button>
    <div class="container" v-for="feedbackItem in feedback" :key="feedbackItem.id">
      <div><strong>Ваше имя: </strong>{{ feedbackItem.name }}</div>
      <div><strong>Ваш город: </strong>{{ feedbackItem.city }}</div>
      <div><strong>Ваш отзыв: </strong>{{ feedbackItem.feed }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name: "feed-back",
    data() {
        return {
            feedback:[],
            name:'',
            city:'',
            feed:''
        }
    },
    methods: {
        createFeedBack() {
            const  newFeedBack = {
                id:Date.now(),
                name: this.name,
                city: this.city,
                feed: this.feed,
            }
            if (this.name === '' || this.city === '' || this.feed === '') {
                alert("Вы не заполнили некоторые данные")
            } else {
                this.feedback.push(newFeedBack);
                this.name = '';
                this.city = '';
                this.feed = '';
            }
        }
    }
}
</script>

<style scoped>
.container {
  width: 75%;
  border: 2px solid #ccc;
  background-color: #eee;
  border-radius: 5px;
  padding: 16px;
  margin: 16px auto;
}
.container span {
  font-size: 18px;
  margin-right: 15px;
}
@media (max-width: 450px) {
  .container {
    text-align: center;
  }
}
.input-feedback {
  width: 75%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn-feedback {
  position: relative;
  display: flex;
  left: 80%;
  margin-top: 10px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
}
.btn-feedback:hover { background: rgb(53, 167, 110); }
.btn-feedback:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}
</style>