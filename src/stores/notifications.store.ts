import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', {
  state: () => ({ items: [] as { id: string; message: string }[] }),
  actions: {
    success(message: string) {
      const id = crypto.randomUUID()
      this.items.push({ id, message })
      setTimeout(
        () =>
          this.items.splice(
            this.items.findIndex((item) => item.id === id),
            1,
          ),
        3000,
      )
    },
  },
})
