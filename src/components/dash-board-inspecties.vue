<template>
    <div>
        <p>Wordt geladen</p>
        <ul>
            <li v-for="inspection in sortedInspections" :key="inspection.inspection_id" @click="showDetails(inspection)">
                {{ inspection.date }} - {{ inspection.location }} - {{ inspection.result }}
            </li>
        </ul>

        <!-- Voeg InspectionDetailsComponent toe voor het weergeven van details -->
        <InspectionDetailsComponent v-if="selectedInspection" :inspection="selectedInspection" />
    </div>
</template>

<script>
import InspectionDetailsComponent from '@/components/InspectionDetailsComponent.vue';

export default {
    components: {
        InspectionDetailsComponent,
    },
    methods: {
        showDetails(inspection) {
            // Zet geselecteerde inspectie voor weergave in InspectionDetailsComponent
            this.selectedInspection = inspection;
        }
    },
};
</script>

<style scoped>
/* Voeg hier eventuele component-specifieke stijlen toe */
</style>
