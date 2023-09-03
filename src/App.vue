<script setup lang="ts">
import NavigationDrawer from '@/components/drawers/NavigationDrawer.vue';
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar"></v-app-bar>

    <NavigationDrawer />

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
