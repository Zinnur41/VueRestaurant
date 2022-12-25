<template>
  <div class="user-info">
    <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_cart">Назад</div>
    </router-link>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label class="input-label">Имя</label>
      <div>
        <input class="input-field"
            id="name"
            type="text"
            v-model="name"
            placeholder="Введите имя"
            required autofocus
        >
      </div>
      <label class="input-label">E-Mail</label>
      <div>
        <input class="input-field"
            id="email"
            type="email"
            v-model="email"
            placeholder="Введите e-mail"
            required

        >
      </div>
      <label class="input-label">Пароль</label>
      <div>
        <input class="input-field"
            id="password"
            type="password"
            v-model="password"
            placeholder="Введите пароль"
            required
        >
      </div>
      <div>
        <button class="button-sbm" @click="submitBtn" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: "User-info",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            isRegistered: false,
        }
    },
    methods: {
        submitBtn() {
            if (this.name === '') {
                alert("Вы ввели пустое имя!");
            } else if (this.email === '' || this.email.indexOf("@") === -1) {
                alert("Вы ввели неправильную почту")
            } else if (this.password === '') {
                alert("Вы ввели пустой пароль")
            } else {
                alert("Вы успешно зарегестрировались!");
                this.isRegistered = true;
            }
        }
    }
}
</script>

<style scoped>
input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}
.input-label {
  display: block;
  margin-bottom: 0.25rem;
}
.input-field {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.button-sbm {
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
}
.button-sbm:hover { background: rgb(53, 167, 110); }
.button-sbm:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;
}

</style>