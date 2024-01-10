<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p><TweedeTekst /></p>
  </div>
</template>

<script>
import TweedeTekst from './tweede-tekst.vue';

export default {
  name: 'HelloWorld',
  components: {
    TweedeTekst,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Voeg het "scoped" attribuut toe om CSS tot deze component te beperken -->
<style scoped>
h1 {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  color:rgba(41,52,57,1);
}
p {
    font-family:'Courier New', Courier, monospace;
    margin: 0;
    padding: 0;
    font-size: x-small;
    color:rgba(41,52,57,1);
}
.hello {
border: 4px solid black;
background-color: rgba(0,170,162,1);
}
</style>
