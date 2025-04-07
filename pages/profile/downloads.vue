<template>
  <div class="downloads-page">
    <Sidebar />
    <div class="content">
      <h1>Downloads</h1>

      <div v-if="loading">Loading...</div>

      <div v-else-if="downloads.length === 0" class="empty-downloads">
        <p>No downloads available yet</p>
        <button class="browse-button" @click="browseBooks">Browse Books</button>
      </div>

      <div v-else class="download-list">
        <div v-for="order in downloads" :key="order._id" class="download-item">
          <ul>
            <li v-for="item in order.books" :key="item.bookId">
              {{ item.title }} - {{ item.quantity }}x
              <a :href="getDownloadLink(item.bookId)" class="download-link" download>Download</a>
            </li>
          </ul>
          <p class="text-gray-400 text-sm">Purchased At: {{ formatDate(order.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- <script setup>
import Sidebar from '~/components/Sidebar.vue';
definePageMeta({
  layout: 'registered',
});

import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const downloads = ref([]);
const loading = ref(true);
const userId = ref(null);

onMounted(async () => {
  try {
    // استرجاع بيانات المستخدم من API بدل `localStorage`
    const userResponse = await useFetch('/api/auth/me'); // تأكد من المسار الصحيح في API الخاص بك
    if (userResponse.data.value) {
      userId.value = userResponse.data.value.id;
      fetchDownloads();
    } else {
      loading.value = false;
    }
  } catch (error) {
    console.error("Error fetching user data", error);
    loading.value = false;
  }
});

const fetchDownloads = async () => {
  try {
    const response = await useFetch(`/api/downloads/${userId.value}`);
    if (response.data.value) {
      downloads.value = response.data.value.books;
    }
  } catch (error) {
    console.error('Error fetching downloads', error);
  } finally {
    loading.value = false;
  }
};

const browseBooks = () => {
  navigateTo('/books');
};

// تحميل الكتب
const downloadBook = (fileUrl) => {
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = fileUrl.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script> -->

<script setup>
import { ref, onMounted } from 'vue'
import Sidebar from '~/components/Sidebar.vue'

definePageMeta({
  layout: 'registered',
})

const downloads = ref([])
const loading = ref(true)

const fetchDownloads = async () => {
  try {
    const res = await fetch('http://localhost:5000/orders/downloads', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    const data = await res.json()
    if (res.ok) {
      downloads.value = data
    } else {
      console.error('Error fetching downloads:', data.message)
    }
  } catch (err) {
    console.error('Error:', err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchDownloads()
})

const formatDate = (date) => new Date(date).toLocaleDateString()

const getDownloadLink = (bookId) => {
  return `http://localhost:5000/api/books/download/${bookId}`
}
</script>


<style scoped>
.downloads-page {
  padding: 50px;
  background: #fdf6ee;
  height: 100%;
  display: flex;
}

h1 {
  margin: 10px 320px;
  color: #4E3629;
  font-size: 24px;
  font-weight: bold;
}

.empty-downloads {
  background: #fdecd2;
  padding: 10px 25px;
  border-radius: 30px;
  font-size: 18px;
  color: #5a3d2b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
}

.browse-button {
  background: #6a4b3a;
  color: white;
  padding: 10px 70px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.browse-button:hover {
  background: #5a3d2b;
}

.download-list {
  margin-top: 20px;
}

.download-item {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.download-button {
  background: #6a4b3a;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.download-button:hover {
  background: #5a3d2b;
}
</style>
