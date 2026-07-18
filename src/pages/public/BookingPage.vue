<template>
  <section class="section">
    <div class="container">
      <BookingStepper :current="step" />
      <div class="split">
        <div class="card form stack">
          <RouteStep v-if="step === 0" :model="form" />
          <ShipmentStep v-else-if="step === 1" :model="form" />
          <ServiceStep v-else-if="step === 2" :options="quote.options" @select="selectService" />
          <ContactStep v-else-if="step === 3" :model="form" />
          <ReviewStep v-else-if="step === 4" :model="form" />
          <ConfirmationStep v-else :reference="booking.latest?.reference ?? ''" />
          <div v-if="step < 5" class="buttons">
            <AppButton variant="ghost" @click="step = Math.max(0, step - 1)">Back</AppButton
            ><AppButton @click="next">Continue</AppButton>
          </div>
        </div>
        <PriceSummary :price="selectedPrice" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useBookingStore } from '@/stores/booking.store'
import { useQuoteStore } from '@/stores/quote.store'
import { formatCurrency } from '@/utils/currency'
import AppButton from '@/components/common/AppButton.vue'
import BookingStepper from '@/components/booking/BookingStepper.vue'
import RouteStep from '@/components/booking/RouteStep.vue'
import ShipmentStep from '@/components/booking/ShipmentStep.vue'
import ServiceStep from '@/components/booking/ServiceStep.vue'
import ContactStep from '@/components/booking/ContactStep.vue'
import ReviewStep from '@/components/booking/ReviewStep.vue'
import ConfirmationStep from '@/components/booking/ConfirmationStep.vue'
import PriceSummary from '@/components/booking/PriceSummary.vue'
const step = ref(0)
const quote = useQuoteStore()
const booking = useBookingStore()
const form = reactive({
  fromPostcode: '',
  toPostcode: '',
  weight: 2,
  notes: '',
  service: '',
  name: '',
  email: '',
  phone: '',
})
const selectedPrice = computed(() =>
  formatCurrency(quote.options.find((item) => item.id === form.service)?.price ?? 0),
)
const selectService = (serviceId: string) => {
  form.service = serviceId
  step.value += 1
}
const next = async () => {
  if (step.value === 1)
    await quote.create({
      fromPostcode: form.fromPostcode,
      toPostcode: form.toPostcode,
      parcelWeightKg: Number(form.weight),
      serviceType: 'Same day',
    })
  if (step.value === 4) await booking.create(form)
  step.value += 1
}
</script>
<style scoped>
.form {
  padding: 24px;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
