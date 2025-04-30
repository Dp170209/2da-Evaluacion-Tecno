<template>
  <!-- Tarjeta de personaje con imagen -->
  <div
    class="relative rounded-lg shadow-lg overflow-hidden group bg-gray-800 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-in"
    :style="{ animationDelay: `${delay * 0.1}s` }"
  >
    <!-- Imagen principal del personaje -->
    <img
      :src="imageUrl"
      alt="Character"
      class="w-full h-64 object-cover transition duration-500 group-hover:blur-sm"
    />

    <!-- Información del personaje -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white p-4"
    >
      <h2 class="text-lg font-bold mb-2">{{ name }}</h2>
      <p class="text-sm">Altura: {{ height }} cm</p>
      <p class="text-sm">Genero: {{ gender }}</p>
      <p class="text-sm">Cumpleaños: {{ birthYear }}</p>
    </div>
  </div>
</template>

<script setup>
// Props recibidos para la tarjeta de personaje
// Incluye nombre, altura, género, año de nacimiento e imagen personalizada

defineProps({
  name: String,
  height: String,
  gender: String,
  birthYear: String,
  imageUrl: {
    type: String,
    default: 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
  },
  delay: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
/* ----------------- Animaciones de entrada ----------------- */

/* Animación fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
