<template>
  <div class='select-product'>
    <p
        class="title"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
        class="options"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "select-product",
    props: {
        options: {
            type: Array,
            default:() => []
        },
        selected: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option)
            this.areOptionsVisible = false;
        },
        hideSelect() {
            this.areOptionsVisible = false;
        }
    },
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener('click', this.hideSelect)
    }
}
</script>

<style>
.select-product {
  position: relative;
  width: 200px;
  cursor: pointer;
  text-align: left;
}
.title {
  border: solid 1px #aeaeae;
  padding: 8px;
}
.select-product p {
  margin: 0;
}
.options {
  border: solid 1px #aeaeae;
  background: #ffffff;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: 8px;
}
.options p:hover {
  background: #e7e7e7;
}
</style>