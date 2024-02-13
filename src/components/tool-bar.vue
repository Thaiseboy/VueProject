// tool-bar.vue
<template>
    <!-- Toolsbar -->
    <div class="tools">
        <!-- Toegewezen rapportages(pictogram met 'badge') -->
        <svg-icon type="mdi" :path="mdiAccount" :size="iconSize" @click="handleIconClick(0)" />
        <!-- Uitgevoerde rapportages openen (inzien, aanpassen) -->
        <svg-icon type="mdi" :path="mdiFileEye" :size="iconSize" @click="handleIconClick(1)" />
        <!-- Kennisbank/documentatie -->
        <svg-icon type="mdi" :path="mdiDatabaseEye" :size="iconSize" @click="handleIconClick(2)" />
        <!-- Instellingen (of beheer) -->
        <svg-icon type="mdi" :path="mdiTools" :size="iconSize" @click="handleIconClick(3)" />
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccount, mdiFileEye, mdiDatabaseEye, mdiTools } from '@mdi/js'; // Import mdiFileEye

export default {
    name: "ToolBar",
    components: {
        SvgIcon
    },
    data() {
        return {
            mdiAccount: mdiAccount,
            mdiFileEye: mdiFileEye,
            mdiDatabaseEye: mdiDatabaseEye,
            mdiTools: mdiTools,
            iconSize: 50,
        };
    },
    methods: {
        handleIconClick(tabIndex) {
            this.$emit("icon-click", tabIndex);
        },
    },
};
</script>

<style scoped></style>
