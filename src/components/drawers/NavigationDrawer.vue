<script setup lang="ts">
import { ref } from 'vue';


const navs = ref([
  { title: "app-nav-1" },
  { title: "app-nav-2" },
]);

</script>

<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item v-for="nav in navs" :title="nav.title" />
    </v-list>
  </v-navigation-drawer>
</template>