<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-yellow-400 overflow-hidden">
    
    <!-- Animación inicial de STAR WARS -->
    <h1
      class="text-7xl md:text-9xl font-bold opacity-0 animate-star-wars mb-20 text-shadow"
    >
      STAR WARS
    </h1>

    <!-- Mensaje de bienvenida -->
    <div class="max-w-3xl px-4 text-center space-y-6 opacity-0 animate-fade-in-slow text-shadow">
      <p class="text-2xl md:text-3xl font-semibold">
        Bienvenido a un universo donde la fuerza guía a héroes, villanos y cazarrecompensas.
      </p>
      <p class="text-xl md:text-2xl">
        Explora la grandeza de los personajes legendarios que han marcado generaciones.
      </p>
      <p class="text-lg md:text-xl italic">
        "El Lado Luminoso y el Lado Oscuro... ¿Cuál dominará tu destino?"
      </p>
    </div>
    
  </div>
</template>

<script setup>
// No JS
</script>

<style scoped>
/* ----------------- Animaciones personalizadas ----------------- */

/* Entrada texto STAR WARS */
@keyframes starWarsIntro {
  0% {
    opacity: 0;
    transform: scale(0.5) translateY(50px);
  }
  50% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-star-wars {
  animation: starWarsIntro 2s ease-out forwards;
}

/* Fade-in lento para mensajes de bienvenida */
@keyframes fadeInSlow {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-slow {
  animation: fadeInSlow 2.5s ease-out forwards;
  animation-delay: 2s;
}

/* Sombra ligera de texto */
.text-shadow {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}
</style>
