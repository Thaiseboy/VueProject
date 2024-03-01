<!-- components/InspectionDetailsComponent.vue -->
<template>
    <div>
        <h2>Inspectiedetails</h2>
        <ul>
            <li><strong>Inspectie ID:</strong> {{ inspection.inspection_id }}</li>
            <li><strong>Datum:</strong> {{ inspection.date }}</li>
            <li><strong>Locatie:</strong> {{ inspection.location }}</li>
            <li><strong>Inspecteur:</strong> {{ inspection.inspector }}</li>
            <li><strong>Resultaat:</strong> {{ inspection.result }}</li>
            <li><strong>Opmerkingen:</strong> {{ inspection.comments }}</li>
        </ul>
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
/* Voeg hier eventuele component-specifieke stijlen toe */
</style>
