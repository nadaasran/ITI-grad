<template>
  <!-- Top Authors Section -->
  <section class="py-12 px-4 sm:px-6 lg:px-8 bg-[#FFF7EF]">
    <div>
      <!-- Center the heading -->
      <div class="flex justify-between items-center mb-8 pl-8">
        <h2 class="text-3xl font-bold text-yellow-950">Top Authors</h2>
        <a href="#" class="inline-block px-6 py-2 text-yellow-950 underline">View more</a>
      </div>

      <!-- Scrollable flex container -->
      <div class="flex overflow-x-auto pb-6 gap-4 scrollbar-hide justify-center">
        <!-- Author Cards -->
        <div 
          v-for="(author, index) in authors" 
          :key="index" 
          class="flex-shrink-0 w-44 p-2 transition-transform transform hover:scale-105"
        >
          <div class="flex flex-col items-center">
            <img 
              :src="author.image" 
              :alt="author.name"
              class="w-30 h-30 rounded-full object-cover border-4 border-yellow-950"
            />
            <h3 class="text-lg font-medium text-yellow-950 mt-2">{{ author.name }}</h3>
            <p class="text-sm text-yellow-950 text-center mt-1">{{ author.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// استيراد axios لجلب البيانات من الباك
import axios from 'axios';
import { ref, onMounted } from 'vue';

const authors = ref([]);

// جلب البيانات من الـ API عند تحميل الصفحة
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/authors'); 
    authors.value = response.data;
  } catch (error) {
    console.error("Error fetching authors:", error);
  }
});
</script>

<style>
/* Optional: Hide scrollbar while keeping scroll functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
