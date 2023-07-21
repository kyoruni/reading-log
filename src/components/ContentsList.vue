<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import books from '@/assets/json/books.json';

interface BookData {
  id: number;
  title: string;
  // publisher: string;
  // publish_date: string;
  // author: string;
  // page: number;
  // completion_date: string;
  // category: string;
  // impression: string;
};

interface Table {
  title: string;
  // align: string;
  // sortable: boolean;
  key: string;
  // width: string;
}

const contents = ref<BookData[]>([]);
const headers = ref<Table[]>([]);

onBeforeMount(() => {
  fetchItemList();
});

const fetchItemList = () => {
  contents.value = books.slice();
  headers.value = [
    { title: "タイトル", key: "title" }
    // { title: "読了日", align: 'start', sortable: true, key: "completion_date", width: "1px" },
    // { title: "出版社", align: 'start', sortable: true, key: "publisher", width: "1px"},
    // { title: "出版日", align: 'start', sortable: true, key: "publish_date", width: "1px" },
    // { title: "著者", align: 'start', sortable: true, key: "author", width: "1px" },
    // { title: "カテゴリー", align: 'start', sortable: true, key: "category", width: "100px" },
    // { title: "ひとこと", align: 'start', sortable: true, key: "impression", width: "200px" }
  ];
  console.log(headers.value);
  console.log(contents.value);
};
</script>

<template>
  <v-data-table
    class="pa-5"
    :headers="headers"
    :items="contents"
    item-value="name"
    density="compact"
    :fixed-header="true"
    :multi-sort="true"
    scrollX
  ></v-data-table>
</template>

<style>
.book-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>