<!-- src/components/ExampleComponent.vue -->
<template>
    <div>
        <h2>Gegevens weergeven</h2>
        <div v-if="data">
            <ul>
                <li v-for="(value, key) in data" :key="key">
                    <strong>{{ key }}:</strong> {{ value }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Gegevens worden geladen...</p>
        </div>
    </div>
</template>

<script>
import { fetchData } from '@/services/apiService';

export default {
    data() {
        return {
            data: null,
        };
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData() {
            try {
                this.data = await fetchData();
                console.log('Gegevens opgehaald:', this.data);
            } catch (error) {
                console.error('Fout bij het laden van gegevens in component:', error);
            }
        },
    },
};
</script>

<style scoped>
/* Voeg hier eventuele component-specifieke stijlen toe */
</style>
