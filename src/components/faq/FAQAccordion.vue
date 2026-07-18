<template>
  <div class="faq-groups">
    <section v-for="group in groups" :key="group.category" class="faq-group">
      <h2>{{ group.label }}</h2>
      <div class="faq-list">
        <FAQItem
          v-for="item in group.items"
          :key="item.id"
          :item="item"
          :open="openId === item.id"
          @toggle="toggle"
          @close="openId = null"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FAQItem from './FAQItem.vue'
import type { FAQ } from './faq.types'

defineProps<{
  groups: Array<{ category: FAQ['category']; label: string; items: FAQ[] }>
}>()

const openId = ref<string | null>('collection-speed')
const toggle = (id: string) => {
  openId.value = openId.value === id ? null : id
}
</script>

<style scoped>
.faq-groups {
  display: grid;
  gap: 30px;
}
.faq-group {
  display: grid;
  gap: 14px;
}
.faq-group h2 {
  font-size: 1.25rem;
}
.faq-list {
  display: grid;
  gap: 12px;
}
</style>
