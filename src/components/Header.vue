<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar';

const items = ref([]);
</script>

<template>
    <Menubar :model="items">
      <template #start>
        <h1 class="p-component">読んだ本リスト@kyoruni</h1>
      </template>
    </Menubar>
</template>