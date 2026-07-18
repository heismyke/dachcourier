<template>
  <div class="stack">
    <h1>My bookings</h1>
    <AppTable
      ><thead>
        <tr>
          <th>Reference</th>
          <th>Service</th>
          <th>Status</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in store.bookings" :key="booking.id">
          <td>
            <RouterLink :to="`/account/bookings/${booking.id}`">{{ booking.reference }}</RouterLink>
          </td>
          <td>{{ booking.service }}</td>
          <td>{{ booking.status }}</td>
          <td>{{ formatCurrency(booking.price) }}</td>
        </tr>
      </tbody></AppTable
    >
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import AppTable from '@/components/common/AppTable.vue'
import { useBookingStore } from '@/stores/booking.store'
import { formatCurrency } from '@/utils/currency'
const store = useBookingStore()
onMounted(store.loadMine)
</script>
