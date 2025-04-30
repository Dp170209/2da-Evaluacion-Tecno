<template>
  <div class="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black bg-cover bg-fixed" 
       style="background-image: url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg');">

    <Navbar />

    <main class="flex-grow relative z-10 p-4">
      <RouterView />
    </main>

    <Footer />
    
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
</style>
