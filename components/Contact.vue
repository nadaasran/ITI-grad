<template>
    <!-- Contact Us Section -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF7EF] ">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <!-- Image (Left) -->
        <div class="w-full md:w-1/2">
          <img 
            src="/images/cont.png" 
            alt="Contact Us" 
            class="w-full h-auto rounded-lg shadow-lg border-2 border-[#F0E6D6]"
          >
        </div>
  
        <!-- Form (Right) -->
        <div class="w-full md:w-1/2e p-8 ">
          <h2 class="text-3xl font-bold text-yellow-950 mb-6 text-center">Contact Us</h2>
          
          <form action="#" method="POST" class="space-y-6">
            <div>
              <label for="name" class="block text-lg font-medium text-[#6F4E37]">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                class="mt-2 p-3 w-full border border-[#D4B29D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAA520] bg-[#FFF7EF]"
              >
            </div>
  
            <div>
              <label for="email" class="block text-lg font-medium text-[#6F4E37]">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                class="mt-2 p-3 w-full border border-[#D4B29D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAA520] bg-[#FFF7EF]"
              >
            </div>
  
            <div>
              <label for="message" class="block text-lg font-medium text-[#6F4E37]">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                class="mt-2 p-3 w-full border border-[#D4B29D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAA520] bg-[#FFF7EF]"
              ></textarea>
            </div>
  
            <button 
              type="submit" 
              class="w-full py-3 bg-[#4E3629] text-white text-lg font-semibold rounded-lg hover:bg-[#6F4E37] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No script needed for this component
  </script>