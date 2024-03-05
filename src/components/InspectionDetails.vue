<!-- InspectionDetails.vue -->
<template>
  <div>
    <h2>Inspectie Details</h2>
    <v-card>
      <v-card-title>{{ inspection.location }} - {{ inspection.date }}</v-card-title>
      <v-card-subtitle>Inspecteur: {{ inspection.inspector }}</v-card-subtitle>
      <v-card-text>
        <p>Resultaat: {{ inspection.result }}</p>
        <p>Opmerkingen: {{ inspection.comments }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    inspection: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
