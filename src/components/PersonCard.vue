<template>
  <!-- Tarjeta de personaje con imagen y efecto hover -->
  <div
    class="relative rounded-lg shadow-lg overflow-hidden group bg-gray-800 hover:shadow-2xl transition-all duration-500 opacity-0 animate-fade-in"
    :style="{ animationDelay: `${delay * 0.1}s` }"
  >
    <!-- Imagen principal del personaje desde carpeta local con fallback -->
    <img
      :src="getLocalImageUrl(uid)"
      alt="Character"
      referrerpolicy="no-referrer"
      class="w-full h-64 object-cover transition duration-500 group-hover:blur-sm"
      @error="onImageError"
    />

    <!-- Información del personaje, visible al hacer hover -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white p-4"
    >
      <h2 class="text-lg font-bold mb-2">{{ name }}</h2>
      <p class="text-sm">Height: {{ height }} cm</p>
      <p class="text-sm">Gender: {{ gender }}</p>
      <p class="text-sm">Birth Year: {{ birthYear }}</p>
    </div>
  </div>
</template>

<script setup>
// Props recibidos para la tarjeta de personaje
defineProps({
  uid: String,
  name: String,
  height: String,
  gender: String,
  birthYear: String,
  delay: {
    type: Number,
    default: 0
  }
})

// Fallback local por si no encuentra la imagen
function onImageError(event) {
  event.target.src = new URL(`../assets/characters/placeholder.jpg`, import.meta.url).href
}

// Generador de URL local segura con import.meta.url
function getLocalImageUrl(id) {
  return new URL(`../assets/characters/${id}.jpg`, import.meta.url).href
}
</script>

<style scoped>
/* ----------------- Animaciones de entrada ----------------- */
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
