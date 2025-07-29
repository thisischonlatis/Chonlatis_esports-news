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
  font-family: 'Kanit', sans-serif;
}

.content-area {
  flex-grow: 1;
  padding: 40px 20px;
  margin-top: 100px; /* ปรับตามความสูงจริงของ Header */
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

/* ปรับตามขนาดหน้าจอ */
@media (max-width: 900px) {
  .content-area {
    padding: 30px 15px;
    margin-top: 90px;
  }
}

@media (max-width: 600px) {
  .content-area {
    padding: 20px 10px;
    margin-top: 80px;
  }
}
</style>