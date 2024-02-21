<template>
  <main class="main">
    <VDatePicker
      v-model="date"
      :attributes="attrs"
    />

    <DateEventAdd :date="date" />

    <DateEventsList :date="date" />
  </main>
</template>

<script setup lang="ts">
import DateEventsList from '@/components/DateEventsList.vue'
import DateEventAdd from '@/components/DateEventAdd.vue'
import { ref } from 'vue';

const date = ref(new Date())

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'green',
      fillMode: 'solid'
    },
    dates: new Date()
  }
])
</script>

<style scoped>
.main {
  padding-top: 1rem;
  display: flex;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
}
</style>
