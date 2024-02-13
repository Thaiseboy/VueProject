<template>
  <div>
    <div class="hello">
      <v-app>
        <v-container>
          <h1>{{ msg }}</h1>
          <v-row>
            <v-col>
              <TweedeTekst />
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </div>
    <DashBoard />
  </div>
</template>

<script>
import TweedeTekst from './tweede-tekst.vue';
import DashBoard from './dash-board.vue';

export default {
  name: 'HelloWorld',
  components: {
    TweedeTekst,
    DashBoard,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.hello {
  border: 4px solid black;
  background-color: rgba(0, 170, 162, 1);
}

/* Voeg een stijl toe om de h2 buiten .hello te positioneren */
h2 {
  margin-top: 20px;
  /* Pas de marge aan op basis van jouw behoeften */
}
</style>
