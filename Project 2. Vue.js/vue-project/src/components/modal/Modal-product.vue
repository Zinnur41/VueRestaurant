<template>
  <div class="modal_wrapper" ref="modal_wrapper">
    <div class='modal'>
      <div class="modal__header">
        <span>{{modalTitle}}</span>
        <span>
        <i
            class="material-icons"
            @click="closeModal"
        >
          close
        </i>
      </span>
      </div>
      <div class="modal__content">
          <slot></slot>
      </div>
      <div class="modal__footer">
          <button class="close_modal" @click="closeModal">Close</button>
          <button
              class="submit_btn"
              @click="rightBtnAction"
          >
             {{rightBtnTitle}}
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "modal-product",
    props: {
        modalTitle: {
            type: String,
            default: 'Modal name'
        },
        rightBtnTitle: {
            type: String,
            default: 'Ok'
        }
    },

    methods: {
        rightBtnAction() {
            this.$emit('rightBtnAction')
        },
        closeModal() {
            this.$emit('closeModal')
        }
    },
    mounted() {
        let vm = this;
        document.addEventListener('click', (item) => {
            if (item.target === vm.$refs['modal_wrapper']) {
                vm.closeModal()
            }
        })
    },
}
</script>

<style>
.modal_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.modal {
  padding: 16px;
  position: fixed;
  top: 50px;
  width: 450px;
  height: 450px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
}
  .modal__header, .modal__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .submit_btn {
    padding: 8px;
    color: #ffffff;
    background: #26ae68;
  }
  .close_modal {
    padding: 8px;
    color: #ffffff;
    background: red;
  }

</style>