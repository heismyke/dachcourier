<template>
  <section class="section">
    <div class="container cta">
      <div>
        <h2>{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
      </div>
      <div class="actions">
        <AppButton :to="primaryTo">{{ primaryLabel }}</AppButton>
        <AppButton v-if="secondaryLabel" :to="secondaryTo" variant="ghost">{{
          secondaryLabel
        }}</AppButton>
        <AppButton v-if="tertiaryLabel" :to="tertiaryTo" variant="ghost">{{
          tertiaryLabel
        }}</AppButton>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'

withDefaults(
  defineProps<{
    title?: string
    text?: string
    primaryLabel?: string
    primaryTo?: string
    secondaryLabel?: string
    secondaryTo?: string
    tertiaryLabel?: string
    tertiaryTo?: string
  }>(),
  {
    title: 'Ready to move a shipment?',
    text: '',
    primaryLabel: 'Start booking',
    primaryTo: '/book',
    secondaryLabel: '',
    secondaryTo: '/quote',
    tertiaryLabel: '',
    tertiaryTo: '/support',
  },
)
</script>
<style scoped>
.cta {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border-top: 1px solid var(--color-line);
  padding-top: 32px;
}
.cta > div:first-child {
  display: grid;
  gap: 8px;
}
.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
@media (max-width: 700px) {
  .cta {
    display: grid;
  }
  .actions {
    justify-content: flex-start;
  }
}
</style>
