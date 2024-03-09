<!-- App.vue -->
<template>
  <img alt="logo" src="./assets/REC.png">
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
img {
  width: 10%;
  height: auto;
}
</style>
./components/HomePage.vue