<script setup lang="ts">
import { ref } from "vue";
import { useBase91Hash } from "@/hooks/useBase91Hash";

const passwordSeed = ref("");
const passwordHash = ref("");
const { hashFn } = useBase91Hash();
const passwordHashing = async () => {
  passwordHash.value = await hashFn(passwordSeed.value);
};
</script>

<template>
  <v-container fluid>
    <v-card>
      <template #text>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="passwordSeed"
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
        <div>Actions</div>
      </template>
    </v-card>
  </v-container>
</template>
