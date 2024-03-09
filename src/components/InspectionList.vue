<!-- InspectionList.vue -->
<template>
  <div>
    <div class="inspection-grid">
      <div v-for="inspection in inspections" :key="inspection.inspection_id" class="inspection-card">
        <h3>{{ inspection.location }}</h3>
        <p><strong>Inspector:</strong> {{ inspection.inspector }}</p>
        <p><strong>Date:</strong> {{ inspection.date }}</p>
        <p><strong>Result:</strong> {{ inspection.result }}</p>
        <p><strong>Comments:</strong> {{ inspection.comments }}</p>
        <div class="main-components">
          <p v-if="inspection.options.damage"><strong>Schade</strong></p>
          <p v-if="inspection.options.maintenance"><strong>Onderhoud</strong></p>
          <p v-if="inspection.options.installations"><strong>Installaties</strong></p>
          <p v-if="inspection.options.modifications"><strong>Modificaties</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    inspections: Array,
  },
};
</script>

<style scoped>
.inspection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.inspection-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.main-components {
  display: flex;
  justify-content: space-between;
}
</style>
