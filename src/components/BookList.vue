<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import books from '@/assets/json/books.json';
</script>

<template>
  <DataTable :value="books" sortField="completion_date" :sortOrder="-1" removableSort showGridlines stripedRows tableStyle="min-width: 50rem">
    <Column field="title" header="タイトル" sortable></Column>
    <Column field="completion_date" header="読了日" sortable></Column>
    <Column field="publisher" header="出版社" sortable></Column>
    <Column field="publish_date" header="出版日" sortable></Column>
    <Column field="author" header="著者" sortable></Column>
    <Column field="page" header="ページ数" sortable></Column>
    <Column field="memo" header="ひとこと" sortable></Column>
  </DataTable>
</template>