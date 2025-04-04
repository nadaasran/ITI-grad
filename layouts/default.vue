<template>
    <div>
      <Navbar />
      <Nav-before-registeration/>
      <!-- <author /> -->
      <slot /> <!-- This is where the page content will be injected -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  </script>
  