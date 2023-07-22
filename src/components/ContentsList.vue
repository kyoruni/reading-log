<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

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

// CSVファイルを読み込んで、行ごとの配列にする
const fetchCSVFile = async (): Promise<string[]> => {
  const response = await fetch('/books.csv');
  const text = await response.text(); // ファイルの内容が全部来る
  const lines = text.split('\n'); // 改行で分ける
  return lines;
}

// CSVの1行をオブジェクトにする
const parseCSVLineToObject = (line: string): BookData => {
  const columns = line.split(',');
  const obj: BookData = {
    id: parseInt(columns[0]),
    title: columns[1],
  };
  return obj;
}

onBeforeMount(() => {
  fetchItemList();
});

const fetchItemList = async () => {
  const csvLines = await fetchCSVFile();

  // 1行目はヘッダーなので、2行目以降のデータを使う
  for (let i = 1; i < csvLines.length; i++) {
    const line = csvLines[i];
    const itemObj = parseCSVLineToObject(line);
    contents.value.push(itemObj);
  }

  headers.value = [
    { title: "タイトル", key: "title" }
    // { title: "読了日", align: 'start', sortable: true, key: "completion_date", width: "1px" },
    // { title: "出版社", align: 'start', sortable: true, key: "publisher", width: "1px"},
    // { title: "出版日", align: 'start', sortable: true, key: "publish_date", width: "1px" },
    // { title: "著者", align: 'start', sortable: true, key: "author", width: "1px" },
    // { title: "カテゴリー", align: 'start', sortable: true, key: "category", width: "100px" },
    // { title: "ひとこと", align: 'start', sortable: true, key: "impression", width: "200px" }
  ];
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
