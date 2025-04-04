<script setup>
defineProps({
  title: String,
  author: String,
  image: String,
  discount: String,
  rating: Number
});
</script>

<template>
  <div class="relative bg-black shadow-lg rounded-lg overflow-hidden w-64">

    <!-- <img :src="image" :alt="title" class="w-full h-80 object-cover" /> -->
    <img src="C:\Users\COMPUMARTS\ITI-grad\assets\css\Green Scenery Illustrative Novel Book Cover.png" alt="title" class="w-full h-80 object-cover" />
    

    <div class="absolute bottom-3 left-3 bg-brown-700 text-white px-2 py-1 text-sm font-bold rounded">
        50% Off
      <!-- {{ discount }}% Off -->
    </div>


    <div class="p-4">
      <h3 class="text-lg font-semibold text-brown-900">{{ title }}</h3>
      <p class="text-brown-700 text-sm">{{ author }}</p>

      <div class="flex items-center mt-2">
        <span class="text-yellow-500 mr-1">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </span>
        <span class="text-yellow-600 text-sm">({{ rating }})</span>
      </div>
    </div>
  </div>
</template>

