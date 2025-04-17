<template >
<div class="">
      <h2 class="text-3xl font-bold text-yellow-950  mb-4 pl-8">Trending shelf</h2>
      
    
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-8 ">
    <bookcard
      v-for="book in books"
      :key="book._id"
      :title="book.title"
      :author="book.author.name"
      :image="book.image"
      :discount="book.discount"
      :rating="book.rating"
    />
  </div>
</div>
<div>
            <img src="/images/wooden Shelf.png" alt="shelf" />
          </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import bookcard from '@/components/bookcard.vue'
import axios from 'axios'

const books = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/books')
  
    books.value = response.data.data.slice(0, 4)
  } catch (error) {
    console.error('حدث خطأ أثناء جلب الكتب:', error)
  }
})

</script>

 