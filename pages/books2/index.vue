<template>
  <div class="px-20">
    <!-- Filter Section -->
    <div class="flex gap-3 items-center p-7 rounded-full bg-[#4E3629] mt-5 text-l font-semibold font-['Montserrat']">
      <div class="flex items-center gap-2 text-[#FAD4A2]">
        <i class="fa-solid fa-filter"></i>
        <p>Filter</p>
      </div>

      <!-- Price Range -->
      <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
        <label>Min</label>
        <input type="number" v-model="minPrice" class="w-16 bg-transparent outline-none" />
        <label>Max</label>
        <input type="number" v-model="maxPrice" class="w-16 bg-transparent outline-none" />
      </div>

      <!-- Category -->
      <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
        <label>Category</label>
        <select v-model="selectedCategory" class="bg-transparent outline-none">
          <option value="">All</option>
          <option v-for="(category, index) in categoriesList" :key="index" :value="category">{{ category }}</option>
        </select>
      </div>

      <!-- Author -->
      <!-- <div class="flex items-center gap-2 bg-[#FAD4A2] text-[#4E3629] rounded-full px-4 h-10">
        <label>Author</label>
        <select v-model="selectedAuthor" class="bg-transparent outline-none">
          <option value="">All</option>
          <option value="Stephen">Stephen</option>
          <option value="Hawking">Hawking</option>
          <option value="John">John</option>
        </select>
      </div> -->
    </div>

    <!-- Categories Section -->
    <div v-for="(category, index) in categories" :key="index" :data-category="category.category">
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
          :author="book.author"
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

const categories = ref([]);
const categoriesList = ref([]);
const books = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const totalPagesArray = ref([]);

const selectedCategory = ref('');
const selectedAuthor = ref('');
const minPrice = ref('');
const maxPrice = ref('');

const fetchCategories = async (page = 1) => {
  try {
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

const fetchFilteredBooks = async () => {
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

    if (data.success) {
      // Update the displayed categories with just the filtered result
      categories.value = [{
        category: 'Filtered Results',
        books: data.data,
        hasMore: false,
        page: 1
      }];
    } else {
      categories.value = [];
    }
  } catch (err) {
    console.error('Error fetching filtered books:', err);
  }
};

const fetchCategoriesAndBooks = async () => {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/books', {
      headers: { Authorization: token },
    });
    const data = await res.json();

    if (data.success && data.data.length > 0) {
      books.value = data.data;

      // Extract unique categories from the books data
      const uniqueCategories = Array.from(new Set(data.data.map((book) => book.category)));

      categoriesList.value = uniqueCategories;
    }
  } catch (err) {
    console.error('Error fetching books:', err);
  }
};



watch([selectedCategory, selectedAuthor, minPrice, maxPrice], fetchFilteredBooks);

onMounted(() => {
  fetchCategories(currentPage.value);
  fetchCategoriesAndBooks();
});
</script>
