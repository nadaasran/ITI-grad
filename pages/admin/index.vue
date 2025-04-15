<template>
  <div class="dashboard">
    <h1 class="text-3xl font-bold my-4">Dashboard</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-2xl font-bold my-2">Total Books</h2>
        <p class="text-xl">{{ totalBooks }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-2xl font-bold my-2">Total Users</h2>
        <p class="text-xl">{{ totalUsers }}</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        <h2 class="text-2xl font-bold my-2">Total Orders</h2>
        <p class="text-xl">{{ totalOrders }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const totalBooks = ref(0)
const totalUsers = ref(0)
const totalOrders = ref(0)

onMounted(async () => {
  const res = await fetch('/api/dashboard')
  const data = await res.json()

  totalBooks.value = data.totalBooks
  totalUsers.value = data.totalUsers
  totalOrders.value = data.totalOrders
})
</script>
