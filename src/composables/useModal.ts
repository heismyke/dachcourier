import { ref } from 'vue'
export const useModal = () => {
  const open = ref(false)
  return { open, show: () => (open.value = true), hide: () => (open.value = false) }
}
