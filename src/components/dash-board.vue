<!-- dash-board.vue -->

<template>
    <v-container>
        <v-app>
            <v-row>
                <v-col>
                    <ToolBar @icon-click="changeTab" />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-bottom-navigation v-model="activeTab">
                        <v-btn icon @click="changeTab(0)">
                            <v-icon>{{ mdiAccount }}</v-icon>
                        </v-btn>
                        <v-btn icon @click="changeTab(1)">
                            <v-icon>{{ mdiFileEye }}</v-icon>
                        </v-btn>
                        <v-btn icon @click="changeTab(2)">
                            <v-icon>{{ mdiDatabaseEye }}</v-icon>
                        </v-btn>
                        <v-btn icon @click="changeTab(3)">
                            <v-icon>{{ mdiTools }}</v-icon>
                        </v-btn>
                    </v-bottom-navigation>
                </v-col>
            </v-row>

            <!-- Inhoud van de tabbladen -->
            <v-row v-if="activeTab === 0">
                <v-col>
                    <h2>Toegewezen Rapportages</h2>
                    <DashBoardInspecties />
                    <!--  Inhoud eerste tabblad -->
                </v-col>
            </v-row>
            <v-row v-if="activeTab === 1">
                <v-col>
                    <h2>Uitgevoerde Rapportages openen</h2>
                    <DashBoardInspecties />
                    <!-- Inhoud tweede tabblad -->
                </v-col>
            </v-row>
            <v-row v-if="activeTab === 2">
                <v-col>
                    <h2>Kennisbank/documentatie</h2>
                    <DashBoardInspecties />
                    <!-- Inhoud derde tabblad -->
                </v-col>
            </v-row>
            <v-row v-if="activeTab === 3">
                <v-col>
                    <h2>Instellingen(of beheer)</h2>
                    <DashBoardInspecties />
                    <!-- Inhoud vierde tabblad -->
                </v-col>
            </v-row>
        </v-app>
    </v-container>
</template>

<script>
import ToolBar from './tool-bar.vue';
import DashBoardInspecties from './dash-board-inspecties.vue';  // Aangenomen componentnaam

export default {
    name: 'DashBoard',
    components: {
        ToolBar,
        DashBoardInspecties,
    },
    data() {
        return {
            activeTab: 0,
        };
    },
    methods: {
        changeTab(tabIndex) {
            this.activeTab = tabIndex;
        },
    },
};
</script>

<style scoped></style>
