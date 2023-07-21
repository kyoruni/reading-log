<script setup lang="ts">
import books from '@/assets/json/books.json';
</script>

<template>
  {{ books }}
</template>

<style>
.book-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>