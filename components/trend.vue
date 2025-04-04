<template>
    <section class="trending">
      <h2>Trending Shelf</h2>
      <div class="book-list">
        <div v-for="book in books" :key="book.id" class="book-card">
          <img :src="book.image" :alt="book.title" />
          <h3>{{ book.title }}</h3>
          <p>{{ book.discount }}% Off</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const books = [
    { id: 1, title: "Kids Drawing Book", image: "/book1.jpg", discount: 15 },
    { id: 2, title: "Mariana", image: "/book2.jpg", discount: 15 },
    { id: 3, title: "Love Brings You Home", image: "/book3.jpg", discount: 15 },
    { id: 4, title: "Roman", image: "/book4.jpg", discount: 15 }
  ];
  </script>
  
  <style scoped>
  .trending {
    text-align: center;
    padding: 40px 20px;
  }
  .book-list {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  .book-card {
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 150px;
  }
  .book-card img {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  