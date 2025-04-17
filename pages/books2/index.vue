<template>
  <div class="px-20">
    <!-- filter -->
    <FilterBar @filter="handleFilter"/>
  <div v-if="isLoading" class="flex justify-center items-center my-6">
  <i class="fa-solid fa-spinner fa-spin text-3xl text-[#4E3629]"></i>
</div>

    <!-- Skeleton Loader -->
<div v-if="isLoading">
  <div class="my-5 space-y-4" v-for="n in 3" :key="n">
    <div class="h-6 w-40 bg-gray-300 rounded animate-pulse"></div>
    <div class="flex flex-wrap gap-4 justify-between">
      <div v-for="i in 4" :key="i" class="w-48 h-64 bg-gray-200 rounded shadow animate-pulse"></div>
    </div>
  </div>
</div>

<!-- Categories Section -->
<div v-else v-for="(category, index) in categories" :key="index" :data-category="category.category">

    <div class="flex justify-between font-semibold text-2xl my-5">
        <p class="font-['Playfair_Display']">{{ category.category }}</p>
        <a
          v-if="category.hasMore"
          class="underline font-normal text-xl font-['Montserrat'] cursor-pointer"
          @click="loadMore(category.category)"
        >
          View more
        </a>
      </div>
      <div class="flex flex-wrap gap-4 justify-between">
        <Card
          v-for="book in category.books || []"
          :key="book._id"
          :title="book.title"
          :author="book.author.name"
          :category="book.category"
          :image="book.image"
          :price="book.price"
          :id="book._id"
        />
      </div>
      <div>
        <img src="/images/woodenShelf.png" alt="shelf" />
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-end justify-center space-x-1 mt-6">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border-1 border-[#A67B5B]">
        Prev
      </button>

      <button
        v-for="page in totalPagesArray"
        :key="page"
        @click="goToPage(page)"
        :class="['px-3 py-1 rounded-md', currentPage === page ? 'bg-[#4E3629] text-[#FED8B1]' : 'text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629]', 'border-1 border-[#A67B5B]']"
      >
        {{ page }}
      </button>

      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 rounded-md text-[#4E3629] hover:text-[#FED8B1] hover:bg-[#4E3629] disabled:opacity-50 border-1 border-[#A67B5B]">
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Card from '~/components/Card.vue';
import FilterBar from '~/components/FilterBar.vue';

const categories = ref([
  'Fiction', 'Science', 'Children', 'Finance & Business', 'Self Development', 'Productivity'
]);
const books = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const totalPagesArray = ref([]);


const isLoading = ref(false);
// const fetchCategories = async (page = 1) => {
//   try {
//     const token = localStorage.getItem('token');
//     const res = await fetch(`http://localhost:5000/books/paged-categories?page=${page}`, {
//       headers: { Authorization: token },
//     });
//     const data = await res.json();
//     categories.value = data.data.map(category => ({
//       ...category,
//       page: 1,
//       hasMore: true,
//     }));
//     totalPages.value = data.totalPages;
//     totalPagesArray.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
//   } catch (err) {
//     console.error('Error fetching categories:', err);
//   }
// };
const fetchCategories = async (page = 1) => {
  try {
    isLoading.value = true;
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:5000/books/paged-categories?page=${page}`, {
      headers: { Authorization: token },
    });
    const data = await res.json();
    categories.value = data.data.map(category => ({
      ...category,
      page: 1,
      hasMore: true,
    }));
    totalPages.value = data.totalPages;
    totalPagesArray.value = Array.from({ length: totalPages.value }, (_, i) => i + 1);
  } catch (err) {
    console.error('Error fetching categories:', err);
  } finally {
    isLoading.value = false;
  }
};

const loadMore = async (categoryName) => {
  const token = localStorage.getItem('token');
  const categoryIndex = categories.value.findIndex(c => c.category === categoryName);
  const category = categories.value[categoryIndex];
  const nextPage = category.page + 1;

  try {
    const res = await fetch(`http://localhost:5000/books/category/${categoryName}?page=${nextPage}`, {
      headers: { Authorization: token },
    });
    const data = await res.json();

    if (data.data.length > 0) {
      categories.value[categoryIndex].books.push(...data.data);
      categories.value[categoryIndex].page = nextPage;
    } else {
      categories.value[categoryIndex].hasMore = false;
    }

    // Scroll to the category section
    setTimeout(() => {
      const categoryElement = document.querySelector(`[data-category="${categoryName}"]`);
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    }, 100);
  } catch (err) {
    console.error(`Error loading more books for ${categoryName}:`, err);
  }
};

const goToPage = (pageNumber) => {
  currentPage.value = pageNumber;
  fetchCategories(currentPage.value);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchCategories(currentPage.value);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchCategories(currentPage.value);
  }
};

const authors = ref([]);
const loading = ref(false);

const selectedCategory = ref('');
const selectedAuthor = ref('');
const minPrice = ref('');
const maxPrice = ref('');

const fetchAuthors = async () => {
  try {
    const res = await fetch('http://localhost:5000/authors');
    const data = await res.json();
    authors.value = data.data;
  } catch (err) {
    console.error('Error fetching authors:', err);
  }
};

const fetchFilteredBooks = async () => {
  loading.value = true;
  const token = localStorage.getItem('token');
  const query = new URLSearchParams();

  if (selectedCategory.value) query.append('category', selectedCategory.value);
  if (selectedAuthor.value) query.append('author', selectedAuthor.value);
  if (minPrice.value) query.append('minPrice', minPrice.value);
  if (maxPrice.value) query.append('maxPrice', maxPrice.value);

  try {
    const res = await fetch(`http://localhost:5000/books/filter?${query.toString()}`, {
      headers: { Authorization: token },
    });
    const data = await res.json();
    books.value = data.success ? data.data : [];
  } catch (err) {
    console.error('Error fetching filtered books:', err);
  } finally {
    loading.value = false;
  }
};

const resetFilters = () => {
  selectedCategory.value = '';
  selectedAuthor.value = '';
  minPrice.value = '';
  maxPrice.value = '';
  fetchFilteredBooks();
};


watch([selectedCategory, selectedAuthor, minPrice, maxPrice], fetchFilteredBooks, { deep: true });

onMounted(() => {
  fetchCategories(currentPage.value);
  fetchFilteredBooks();
  fetchAuthors();
});
</script>
