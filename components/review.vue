<template>
    <div class="text-[#16100B] flex border-[#A67B5B] border-2 mx-20 my-2 px-2 py-4 bg-[#FFEAD6] items-center">
      <img class="w-14 h-14 rounded-full" :src="image" alt="User Avatar">
      <div class="flex flex-col justify-center ml-2">
        <h4 class="font-medium text-2xl font-['Montserrat']">{{ username }}</h4>
        <p class="text-[#F2DE48]">{{ "⭐".repeat(rating) }}</p>
      </div>
      <p class="items-center flex ml-8 font-normal text-1xl font-['Montserrat']">{{ comment }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: {
      type: String,
      default: '/images/user.jpg'
    },
    username: {
      type: String,
      default: 'user name'
    },
    rating: {
      type: Number,
      default: 5
    },
    comment: {
      type: String,
      default: 'This book is amazing!'
    }
  })
  </script>
  