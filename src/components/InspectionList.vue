<!-- InspectionList.vue -->
<template>
  <div>
    <!-- Lijst van uitgevoerde inspecties -->
    <h2>Geopende Rapportages</h2>
    <v-list>
      <v-list-item-group v-if="sortedInspections.length > 0">
        <!-- Lijst van inspecties, gesorteerd op datum -->
        <v-list-item v-for="inspection in sortedInspections" :key="inspection.inspection_id" @click="showDetails(inspection)">
          <v-list-item-content>
            <v-list-item-title>{{ inspection.date }} - {{ inspection.location }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-alert v-else :value="true" dense type="info">
        Er zijn geen uitgevoerde inspecties beschikbaar.
      </v-alert>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    inspections: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sortedInspections() {
      // Maak een kopie van de array voordat je sorteert om mutatie te voorkomen
      const inspectionsCopy = [...this.inspections];

      // Sorteer de kopie van de array op basis van de inspectiedatum
      return inspectionsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
  },
  methods: {
    showDetails(inspection) {
      // Zend een aangepaste gebeurtenis om de details van de geselecteerde inspectie weer te geven
      this.$emit('inspection-selected', inspection);
    },
  },
};
</script>

<style scoped>

</style>
