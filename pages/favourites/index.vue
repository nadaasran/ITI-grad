<template>
        <div class="shelf ">
          <div class="text mx-15 ">
            <h1 class="text-4xl font-bold text-[#4E3629] mx-5">Favorites shelf</h1>
            <p class="text-[#4E3629] mt-3 mb-10 mx-5">Find your saved items and get ready to order them</p>
          </div>
      
          <div class="favorites flex flex-wrap gap-5">
            <Favcard
              v-for="item in favourites"
              :key="item.id"
              :book="item"
              @unlike="removeFromFavourites"
            />
          </div>
      
          <div>
            <img src="/images/wooden Shelf.png" alt="shelf" />
          </div>
    </div>
  </template>
  

<style scoped>
.shelf{
    padding: 40px 0px;
    width: 100%;
    background-color: #fdf6ee;
}
.favorites{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 70px;
    gap: 5px;
}
</style>


<script setup>
import { ref } from 'vue'
import Favcard from '~/components/Favcard.vue'

const favourites = ref([
  { id: 1, title: 'Feel The Nature', price: 3.88 },
  { id: 2, title: 'Feel The Nature', price: 3.88 },
  { id: 3, title: 'Feel The Nature', price: 3.88 },
  { id: 4, title: 'Feel The Nature', price: 3.88 },
  { id: 5, title: 'Feel The Nature', price: 3.88 },
  { id: 6, title: 'Feel The Nature', price: 3.88 },
  { id: 7, title: 'Feel The Nature', price: 3.88 },
  { id: 8, title: 'Feel The Nature', price: 3.88 },
  { id: 9, title: 'Feel The Nature', price: 3.88 },
 
])

const removeFromFavourites = (id) => {
  favourites.value = favourites.value.filter(item => item.id !== id)
}
</script>
