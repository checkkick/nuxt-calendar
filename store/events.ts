import { defineStore } from 'pinia';

interface IEvent {
  id: number
  title: string
  description: string
}

interface IState {
  id: number
  events: Map<Date, IEvent[]>
}

export const events = defineStore('events', {
  state: (): IState => ({
    id: 0,
    events: new Map()
  }),

  actions: {
    ADD_EVENT(date: Date, title: string, description: string) {
      if (!this.events.has(date)) {
        this.events.set(date, [{ id: this.id++, title, description }])
      } else {
        const eventsOnDate = this.events.get(date)
        eventsOnDate?.push({ id: this.id++, title, description })

        if (eventsOnDate) {
          this.events.set(date, eventsOnDate)
        }
      }
    },

    REMOVE_EVENT(date: Date, id: number) {
      let eventsOnDate = this.events.get(date)
      eventsOnDate = eventsOnDate?.filter(event => event.id !== id)

      if (eventsOnDate) {
        this.events.set(date, eventsOnDate)
      }
    }
  },

  getters: {
    EVENTS: (state,) => state.events,
  },
});
