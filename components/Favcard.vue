<template>
    <div class="card text-black m-5">
      <img class="w-50 h-70" src="https://images.pexels.com/photos/8820928/pexels-photo-8820928.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      
      <div class="flex justify-between items-center px-2">
        <h4 class="font-bold">{{ book.title }}</h4>
        <FontAwesomeIcon
          :icon="liked ? ['fas', 'heart'] : ['far', 'heart']"
          class="heart-icon"
          @click="toggleLike"
        />
      </div>

  
      <p class="font-light text-[#4E3629]">Novel</p>
      <div class="flex gap-5">
        <p class="mx-1">${{ book.price }}</p>
        <p class="font-light">Addie Renee</p>
      </div>
      <p class="text-yellow-400 mx-9 text-center">
        &star; &star; &star; &star; &star;
      </p>
      <button class="bg-[#4E3629] flex justify-center mx-9 w-40 rounded-full text-white" >View Book</button>
    </div>
  </template>
  

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = defineProps(['book'])
const emit = defineEmits(['unlike'])

const liked = ref(true)

const toggleLike = () => {
  liked.value = !liked.value
  if (!liked.value) {
    emit('unlike', props.book.id)
  }
}
</script>


<style scoped>
.card{
    width: 15%;
}
.heart-icon {
  font-size: 20px;
  cursor: pointer;
  color: #4E3629;
  transition: all 0.2s ease;
}

.heart-icon.liked {
  color: #4E3629;
}
button{
    cursor: pointer;
    padding: 8px  0 ;
    border-radius: 40px;
    width: 120px;
    color: #FED8B1;
}
button:hover{
    background-color: #FED8B1;
    color: #4E3629;
}
</style>