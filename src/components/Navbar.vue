<template>
  <nav class="bg-black p-6 flex justify-between items-center shadow-md navbar-glow">
    <!-- Título con efecto brilloso -->
    <h1 class="text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors glow">
      Star Wars Tecno Web
    </h1>

    <!-- Navegación principal: Home y Personajes -->
    <div class="flex space-x-8">
      <RouterLink
        to="/"
        class="text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110 text-xl font-semibold glow-link"
      >
        Home
      </RouterLink>

      <RouterLink
        to="/people"
        class="text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110 text-xl font-semibold glow-link"
      >
        Personajes
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
// Importamos RouterLink para la navegación con Vue Router
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* ----------------- Efectos de estilo ----------------- */

/* Efecto de brillo para el título del portal */
.glow {
  text-shadow: 0 0 10px #facc15, 0 0 20px #facc15, 0 0 30px #facc15;
}

/* Brillo amarillo debajo del navbar */
.navbar-glow {
  box-shadow: 0 4px 20px #facc15;
}

/* Efecto de brillo en los links al hacer hover */
.glow-link:hover {
  text-shadow: 0 0 5px #facc15, 0 0 10px #facc15;
}
</style>
