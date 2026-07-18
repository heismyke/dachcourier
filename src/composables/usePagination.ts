import { computed, ref } from 'vue'
export const usePagination = <T>(items: () => T[], perPage = 10) => {
  const page = ref(1)
  const paged = computed(() => items().slice((page.value - 1) * perPage, page.value * perPage))
  return { page, paged }
}
