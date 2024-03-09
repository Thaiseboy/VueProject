<!-- component/DashBoard.vue -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- Toolbar-component om de tabbladen te bedienen -->
        <ToolBar @icon-click="changeTab" />
      </v-col>
    </v-row>

    <!-- Inhoud van de tabbladen -->
    <v-row v-if="activeTab === 0">
      <v-col>
        <h2>Toegewezen Rapportages</h2>
        <InspectionList :inspections="inspections" @select-inspection="showInspectionDetails" />
      </v-col>
    </v-row>
    <v-row v-if="activeTab === 1">
      <v-col>
        <h2>Uitgevoerde rapportages openen</h2>
      </v-col>
    </v-row>
    <v-row v-if="activeTab === 2">
      <v-col>
        <h2>Kennisbank/documentatie</h2>
      </v-col>
    </v-row>
    <v-row v-if="activeTab === 3">
      <v-col>
        <h2>Instellingen(of beheer)</h2>
      </v-col>
    </v-row>
        <v-row>
      <v-col>
        <InspectionList :inspections="inspections" @select-inspection="showInspectionDetails" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import InspectionList from '@/components/InspectionList.vue';
import { fetchInspections } from '@/services/apiService';

export default {
  name: 'DashBoard',
  components: {
    ToolBar,
    InspectionList,
  },
  data() {
    return {
      activeTab: 0,
      inspections: [],
      selectedInspection: null,
    };
  },
  methods: {
    changeTab(tabIndex) {
      this.activeTab = tabIndex;
    },
    showInspectionDetails(inspection) {
      this.selectedInspection = inspection;
    },
    fetchInspectionsData() {
      fetchInspections()
        .then(inspections => {
          this.inspections = inspections;
        })
        .catch(error => {
          console.error('Fout bij het ophalen van inspectiegegevens in de component:', error);
        });
    },
  },
  mounted() {
    this.fetchInspectionsData();
  },
};
</script>

<style scoped>
</style>
