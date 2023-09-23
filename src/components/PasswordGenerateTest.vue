<template>
  <v-container fluid>
    <v-card>
      <template #text>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="passwordStore.testCode"
              label="Seed"
              @update:model-value="passwordHashing"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="passwordHash" readonly />
          </v-col>
        </v-row>
      </template>

      <template #actions>
        <v-btn icon="mdi-content-save" @click="registerPasscode"></v-btn>
      </template>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useBase91Hash } from "@/hooks/useBase91Hash";
import { usePasscodeStore } from "@/stores/passcode";

const passwordStore = usePasscodeStore();
const passwordHash = ref("");
const { hashFn } = useBase91Hash();
const passwordHashing = async () => {
  passwordHash.value = await hashFn(passwordStore.testCode);
};

const registerPasscode = () => {
  passwordStore.registerPasscode({
    domain: "www.test.com",
    emoji: "👼",
  });
};
</script>
