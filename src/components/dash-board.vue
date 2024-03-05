<!-- dash-board.vue -->
<template>
  <v-container>
    <v-row>
      <v-col>
        <!-- Toolbar-component om de tabbladen te bedienen -->
        <ToolBar @icon-click="changeTab" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- Onderste navigatie om tussen tabbladen te schakelen -->
        <v-bottom-navigation v-model="activeTab">
        </v-bottom-navigation>
      </v-col>
    </v-row>

    <!-- Inhoud van de tabbladen -->
    <v-row v-if="activeTab === 0">
      <v-col>
        <h2>Toegewezen Rapportages</h2>
        <!-- Voeg een andere component toe voor toegewezen rapportages -->
      </v-col>
    </v-row>
    <v-row v-if="activeTab === 1">
      <v-col>
        <!-- Inspectielijst-component voor weergave van inspecties -->
        <InspectionList :inspections="inspections" @inspection-selected="showInspectionDetails" />
      </v-col>
    </v-row>
    <v-row v-if="activeTab === 2">
      <v-col>
        <h2>Kennisbank/documentatie</h2>
        <!-- Voeg een andere component toe voor kennisbank/documentatie -->
      </v-col>
    </v-row>
    <v-row v-if="activeTab === 3">
      <v-col>
        <h2>Instellingen(of beheer)</h2>
        <!-- Voeg een andere component toe voor instellingen/beheer -->
      </v-col>
    </v-row>

    <!-- Toon InspectionDetails-component als een inspectie is geselecteerd -->
    <v-row v-if="selectedInspection">
      <v-col>
        <InspectionDetails :inspection="selectedInspection" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ToolBar from './tool-bar.vue';
import InspectionList from './InspectionList.vue'; 
import InspectionDetails from './InspectionDetails.vue'; 

export default {
  name: 'DashBoard',
  components: {
    ToolBar,
    InspectionList,
    InspectionDetails,
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
  },
  mounted() {
    // Haal inspecties op van de service bij het laden van het component
    this.fetchInspections();
  },
};
</script>

<style scoped>

</style>
