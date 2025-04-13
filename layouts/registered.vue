<template>
    <div class="layout">
        <Nav-after-registeration/>
        <div class="content">
            <slot /> <!-- This is where the page content will be injected -->
        </div>
        <Footer/>

    </div>
</template>

<style>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content {
    flex: 1;
  }
</style>