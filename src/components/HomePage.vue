<!-- HomePage.vue -->
<template>
  <div>
    <v-app>
      <v-container>
        <v-row>
          <v-col>
            <KopTekst />
          </v-col>
        </v-row>
        <DashBoard />
      </v-container>
    </v-app>
  </div>
</template>

<script>
import KopTekst from '@/components/KopTekst.vue';
import DashBoard from '@/components/DashBoard.vue';

export default {
  name: 'HomePage',
  components: {
    KopTekst,
    DashBoard,
  },
};
</script>

<style scoped>
</style>
