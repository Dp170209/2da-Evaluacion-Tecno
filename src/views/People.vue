<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-10">

    <!-- Título de la página Characters -->
    <h1 class="text-4xl font-bold text-center mb-10 text-yellow-400 text-shadow">
      Star Wars Characters
    </h1>

    <!-- Indicador de carga mientras se obtienen los datos -->
    <div v-if="loading" class="text-center text-2xl text-yellow-400 font-bold animate-pulse">
      Loading...
    </div>

    <!-- Mensaje de error si falla la solicitud -->
    <div v-else-if="error" class="text-center text-red-500 font-semibold">
      {{ error }}
    </div>

    <!-- Lista de tarjetas de personajes -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <PersonCard
        v-for="(person, index) in people"
        :key="person.uid"
        :uid="person.uid"
        :name="person.name"
        :height="person.height"
        :gender="person.gender"
        :birthYear="person.birth_year"
        :delay="index"
      />
    </div>

  </div>
  <div class="flex justify-center mt-12 gap-6">
  <button
    @click="fetchPeople(currentPage - 1)"
    :disabled="currentPage === 1"
    class="px-6 py-3 rounded-lg text-lg font-semibold text-yellow-300 border border-yellow-500 hover:bg-yellow-500 hover:text-black transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md shadow-yellow-700"
  >
    Previous
  </button>

  <button
    @click="fetchPeople(currentPage + 1)"
    class="px-6 py-3 rounded-lg text-lg font-semibold text-yellow-300 border border-yellow-500 hover:bg-yellow-500 hover:text-black transition shadow-md shadow-yellow-700"
  >
    Next
  </button>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import PersonCard from '../components/PersonCard.vue'

// Estado para manejar datos, carga y errores
const people = ref([])
const loading = ref(true)
const error = ref(null)
const currentPage = ref(1); // Página actual

// Funcionalidad para obtener los datos de personajes desde SWAPI
const fetchPeople = async (page = 1) => {
  try {
    loading.value = true;
    const response = await fetch(`https://www.swapi.tech/api/people?page=${page}&limit=10`);
    const data = await response.json();

    const detailedPeople = await Promise.all(
      data.results.map(async (p) => {
        const res = await fetch(`https://www.swapi.tech/api/people/${p.uid}`);
        const details = await res.json();
        return {
          uid: p.uid,
          ...details.result.properties,
        };
      })
    );

    people.value = detailedPeople;
    currentPage.value = page;
  } catch (err) {
    error.value = "Failed to load characters. Please try again later.";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchPeople(currentPage.value));
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}
</style>
