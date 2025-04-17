
<!-- <script setup>
import AuthorCard from '@/components/AuthorCard.vue'
const { data: authors } = await useFetch('http://localhost:5000/authors?page=1&limit=10')
</script> -->

<template>
    
    <div class="py-10 bg-[#fdf6ee]">
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
    <AuthorCard 
    v-for="author in authors"
    :key="author._id"
    :author="author"
    />

  </div>

  <!-- pagination -->
  <!-- <div v-if="authors?.totalPages > 1" class="flex justify-center mt-8 gap-2 flex-wrap">
  <button
    class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
    :disabled="page === 1"
    @click="goToPage(page - 1)"
  >
    Prev
  </button>

  <button
    v-for="i in authors.totalPages"
    :key="i"
    class="px-3 py-1 rounded border"
    :class="{
      'bg-blue-500 text-white border-blue-500': page === i,
      'bg-white text-gray-800 border-gray-300 hover:bg-gray-100': page !== i
    }"
    @click="goToPage(i)"
  >
    {{ i }}
  </button>

  <button
    class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
    :disabled="page === authors.totalPages"
    @click="goToPage(page + 1)"
  >
    Next
  </button>
</div> -->
<div class="flex items-end justify-center space-x-1 mt-6">
    <!-- Prev -->
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border border-[#A67B5B]"
    >
      Prev
    </button>

    <!-- Pages -->
    <template v-for="page in getPageNumbers()" :key="page">
      <span
        v-if="page === '...'"
        class="px-2 py-1 text-[#4E3629]"
      >
        ...
      </span>
      <button
        v-else
        @click="goToPage(page)"
        class="px-3 py-1 rounded-md border border-[#A67B5B]"
        :class="{
          'bg-[#4E3629] text-[#FED8B1] font-semibold': page === currentPage,
          'text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629]': page !== currentPage
        }"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next -->
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] border border-[#A67B5B]"
    >
      Next
    </button>
  </div>
</div>



</template>
<!-- <script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const page = ref(parseInt(route.query.page || '1'))
const authors = ref(null)

const fetchAuthors = async () => {
  const res = await fetch(`http://localhost:5000/authors?page=${page.value}&limit=10`)
  const data = await res.json()
  authors.value = data
}

watch(() => page.value, fetchAuthors, { immediate: true })

const goToPage = (newPage) => {
  if (newPage >= 1 && newPage <= authors.value.totalPages) {
    page.value = newPage
    router.push({ query: { ...route.query, page: newPage } })
  }
}
</script> -->
<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const currentPage = ref(parseInt(route.query.page || '1'))
const totalPages = ref(10) // You can update this after fetching authors
const authors = ref([])

const fetchAuthors = async () => {
  const res = await fetch(`http://localhost:5000/authors?page=${currentPage.value}&limit=10`)
  const data = await res.json()
  authors.value = data.authors
  totalPages.value = data.totalPages
}
watch(() => currentPage.value, fetchAuthors, { immediate: true })

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    router.push({ query: { ...route.query, page } })
  }
}
const prevPage = () => goToPage(currentPage.value - 1)
const nextPage = () => goToPage(currentPage.value + 1)

const getPageNumbers = () => {
  const pages = []
  const maxPagesToShow = 3

  if (totalPages.value <= 5) {
    for (let i = 1; i <= totalPages.value; i++) pages.push(i)
  } else {
    if (currentPage.value <= maxPagesToShow) {
      pages.push(...[1, 2, 3, '...', totalPages.value])
    } else if (currentPage.value >= totalPages.value - 2) {
      pages.push(...[1, '...', totalPages.value - 2, totalPages.value - 1, totalPages.value])
    } else {
      pages.push(...[1, '...', currentPage.value, '...', totalPages.value])
    }
  }

  return pages
}
</script>
