<template>
    <section class="hero">
      <div class="overlay">
        <h1>Books are a uniquely portable magic</h1>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    background: url('/library-banner.jpg') center/cover no-repeat;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  </style>
  