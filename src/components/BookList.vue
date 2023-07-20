<script setup lang="ts">
import books from '@/assets/json/books.json';
</script>

<template>
  <ul>
    <li v-for="book in books" :key="book.id">{{ book.name }}</li>
  </ul>
</template>