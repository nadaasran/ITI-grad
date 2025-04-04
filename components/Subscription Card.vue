<template>
    <div class="flex justify-center items-center min-h-screen bg-[#F5E2D7]">
      <div class="flex gap-4">
        <div class="ticket">
          <h2 class="text-xl font-bold text-center">Bookworm</h2>
          <p class="text-center text-lg font-bold">300 <span class="text-base font-normal">/ month</span></p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Unlimited book downloads</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Discounts on Purchases</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Free delivery</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Coupons and monthly gifts</li>
          </ul>
        </div>
        <div class="ticket">
          <h2 class="text-xl font-bold text-center">Bookworm</h2>
          <p class="text-center text-lg font-bold">300 <span class="text-base font-normal">/ month</span></p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Unlimited book downloads</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Discounts on Purchases</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Free delivery</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Coupons and monthly gifts</li>
          </ul>
        </div>
        <div class="ticket">
          <h2 class="text-xl font-bold text-center">Bookworm</h2>
          <p class="text-center text-lg font-bold">300 <span class="text-base font-normal">/ month</span></p>
          <ul class="mt-4 space-y-2 text-sm">
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Unlimited book downloads</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Discounts on Purchases</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Free delivery</li>
            <li class="flex items-center"><CheckCircleIcon class="w-4 h-4 mr-2" /> Coupons and monthly gifts</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { CheckCircleIcon } from 'lucide-vue-next';
  </script>
  
  <style scoped>
  .ticket {
    background: #F5E2D7;
    border-radius: 20px;
    padding: 20px;
    width: 250px;
    border: 2px solid #5C3A2E;
    text-align: center;
    position: relative;
  }
  
  .ticket::before,
  .ticket::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    background: #F5E2D7;
    border-radius: 50%;
    border: 2px solid #5C3A2E;
  }
  
  .ticket::before {
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .ticket::after {
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
  </style>
  