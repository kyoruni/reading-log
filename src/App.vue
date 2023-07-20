<script setup lang="ts">
import Button from 'primevue/button';
import Header from './components/Header.vue';
import BookList from '@/components/BookList.vue'
</script>

<template>
  <Header/>
  <main>
    <BookList/>
    <Button label="Submit" />
    <i class="pi pi-check"></i>
    <i class="pi pi-times"></i>
    <span class="pi pi-search"></span>
    <span class="pi pi-user"></span>
  </main>
</template>
