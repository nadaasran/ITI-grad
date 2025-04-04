<script setup>
// تمرير البيانات عبر props لجعل المكون مرنًا
defineProps({
  name: String,
  image: String
});
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- صورة المؤلف -->
    <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-brown-700">
      <img src="C:\Users\COMPUMARTS\ITI-grad\assets\css\Green Scenery Illustrative Novel Book Cover.png" alt="name" class="w-full h-full object-cover" />
    </div>
    
    <!-- اسم المؤلف -->
    <p class="mt-2 text-lg font-semibold text-brown-900">{{ name }}</p>
  </div>
</template>

<style>
/* لا توجد حاجة لتعديلات إضافية عند استخدام Tailwind CSS */
</style>
