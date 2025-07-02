<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="app-container">
    <Header />
    <main class="content-area">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Background color set in main.css */
  /* Font color set in main.css */
  font-family: Kanit;
}

.content-area {
  flex-grow: 1;
  padding: 40px 20px;
  margin-top: 80px; /* Adjust based on actual header height */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Content starts from top */
  text-align: center;
}

/* Responsive adjustments for content area padding */
@media (max-width: 900px) { /* Tablet size and below */
  .content-area {
    padding: 30px 15px;
    margin-top: 100px; /* Adjust for taller mobile header */
  }
}

@media (max-width: 600px) { /* Mobile size and below */
  .content-area {
    padding: 20px 10px;
    margin-top: 90px;
  }
}
</style>