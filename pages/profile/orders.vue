<template>
    <div class="orders-page">
      <Sidebar />
      <div class="content">
        <h1>Orders</h1>
        <div v-if="loading">Loading...</div>
  
        <div v-else-if="orders.length === 0" class="empty-orders">
          <p>No order has been made yet</p>
          <button class="browse-button" @click="browseBooks">Browse Books</button>
        </div>
  
        <div v-else class="order-list">
          <div v-for="order in orders" :key="order._id" class="order-item">
            <p>Order #{{ order._id.slice(-5).toUpperCase() }} - Total: ${{ order.total }}</p>
            <p>Status: {{ order.status }}</p>
            <ul>
              <li v-for="item in order.books" :key="item.bookId">
                {{ item.title }} - {{ item.quantity }}x
              </li>
            </ul>
            <p class="text-gray-400 text-sm">Created At: {{ formatDate(order.createdAt) }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { navigateTo } from '#app'
  import Sidebar from '~/components/Sidebar.vue'
  
  definePageMeta({
    layout: 'registered',
  })
  
  const orders = ref([])
  const loading = ref(true)
  
  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:5000/orders/my-orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
  
      const data = await res.json()
  
      if (res.ok) {
        orders.value = data
      } else {
        console.error('Error fetching orders:', data.message || 'Unknown error')
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      loading.value = false
    }
  }
  
  onMounted(() => {
    fetchOrders()
  })
  
  const browseBooks = () => {
    navigateTo('/books')
  }
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString()
  }
  
  </script>
  
  <style scoped>
  .orders-page {
    padding: 50px;
    background: #fdf6ee;
    height: 100%;
    display: flex;
  }
  
  h1 {
    margin: 10px 320px;
    color: #4e3629;
    font-size: 24px;
    font-weight: bold;
  }
  
  .empty-orders {
    background: #fdecd2;
    padding: 10px 25px;
    border-radius: 30px;
    font-size: 18px;
    color: #5a3d2b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
  }
  
  .browse-button {
    background: #6a4b3a;
    color: white;
    padding: 10px 70px;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .browse-button:hover {
    background: #5a3d2b;
  }
  
  .order-list {
    margin-top: 20px;
  }
  
  .order-item {
    background: #fff;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  </style>
  