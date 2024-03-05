<!-- HelloWorld.vue -->
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
          <DashBoard />
        </v-container>
      </v-app>
    </div>
  </div>
</template>

<script>
import TweedeTekst from '@/components/tweede-tekst.vue'; 
import DashBoard from '@/components/dash-board.vue'; 
 

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
  border: 3px solid black;
  background-color: rgba(0, 170, 162, 1);
}
</style>
