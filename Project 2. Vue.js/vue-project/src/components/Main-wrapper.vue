<template>
    <div class="main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

export default {
    name: "Main-wrapper",
}
</script>

<style scoped>
    .main-wrapper {
      background: whitesmoke;
      max-width: 900px;
      margin: 0 auto;
    }
</style>