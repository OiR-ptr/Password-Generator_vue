<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item
        v-for="passcode in passcodeStore.passcodes"
        :key="passcode.domain"
        :title="passcode.domain"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { usePasscodeStore } from "@/stores/passcode";

const passcodeStore = usePasscodeStore();
</script>
