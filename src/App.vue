<template>
  <img alt="logo" src="./assets/REC.png">
  <HelloWorld 
  msg="Real Estate Care"
  />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
