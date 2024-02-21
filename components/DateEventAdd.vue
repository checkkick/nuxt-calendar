<template>
  <div class="event vc-container vc-monthly vc-blue vc-light vc-bordered">
    <h2 class="event__title">Добавить событие</h2>
    <p class="event__date">Дата: {{ date?.toLocaleDateString() }}</p>

    <input
      class="event__input"
      type="text"
      id="title"
      placeholder="Заголовок"
      v-model="title"
    >
    <textarea
      class="event__input"
      type="text"
      id="description"
      v-model="description"
      placeholder="Описание"
      rows="5"
    />

    <button
      class="event__btn"
      @click="addEvent"
    >Сохранить</button>
  </div>
</template>

<script setup lang="ts">
import { events } from '@/store/events';

const props = defineProps({
  date: {
    type: Date,
    default: () => new Date()
  }
})

const useEventsStore = events()

const title = ref('')
const description = ref('')

function addEvent() {
  if (props.date) {
    useEventsStore.ADD_EVENT(props.date.toLocaleDateString(), title.value, description.value)
    title.value = ''
    description.value = ''
  }
}
</script>

<style scoped>
.event {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
}

.event__title {
  margin: 0;
  text-align: center;
}

.event__date {
  font-size: 14px;
  margin: 0;
  padding-left: 5px;
}

.event__input {
  border: none;
  outline: none;
  color: #0f172a;
  background-color: #f0f0f0;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  resize: none;
}

.event__btn {
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #fff;
  font-size: 16px;
  padding: 0.8rem;
  transition: 0.2s background-color ease-in-out;
}

.event__btn:hover,
.event__btn:focus-visible,
.event__btn:active {
  background-color: #2a62bd;
}
</style>
