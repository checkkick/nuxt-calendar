<template>
  <div class="list vc-container vc-monthly vc-blue vc-light vc-bordered">
    <h2 class="list__title">События на {{ date.toLocaleDateString() }}</h2>
    <ul
      class="events"
      v-for="item in dateEvents.get(date.toLocaleDateString())"
      :key="item.id"
    >
      <li class="events__item">
        <div class="events__block">
          <h3 class="events__title">{{ item.title }}</h3>
          <p class="events__description">{{ item.description }}</p>
        </div>
        <button
          class="events__btn"
          @click="removeEvent(item.id)"
        >Удалить</button>
      </li>
    </ul>

    <h3
      class="notEvents"
      v-if="!dateEvents.get(date.toLocaleDateString()) || dateEvents.get(date.toLocaleDateString()).length === 0"
    >Нет запланированных событий</h3>
  </div>
</template>

<script setup>
import { events } from '@/store/events';

const props = defineProps({
  date: {
    type: Date,
  }
})

const useEventsStore = events()
const dateEvents = computed(() => useEventsStore.EVENTS)

function removeEvent(id) {
  useEventsStore.REMOVE_EVENT(props.date.toLocaleDateString(), id)
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 100%;
}

.list__title {
  margin: 0;
  text-align: center;
}

.events {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.events__item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
}

.events__block {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.events__title {
  margin: 0;
}

.events__description {
  margin: 0;
  font-size: 14px;
  color: #909090;
}

.events__btn {
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: #ff4040;
  color: #fff;
  font-size: 14px;
  padding: 0.5rem 0.8rem;
  transition: 0.2s background-color ease-in-out;
}

.events__btn:hover,
.events__btn:focus-visible,
.events__btn:active {
  background-color: #be3131;
}

.notEvents {
  text-align: center;
  font-size: 18px;
  color: #b2b2b2;
  font-weight: normal;
  margin: 0 0 1rem 0;
}
</style>
