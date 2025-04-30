<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-10">

    <!-- Título de la página -->
    <h1 class="text-4xl font-bold text-center mb-10 text-yellow-400 text-shadow">
      Personajes de Star Wars
    </h1>

    <!-- Indicador de carga -->
    <div v-if="loading" class="text-center text-2xl text-yellow-400 font-bold animate-pulse">
      Loading...
    </div>

    <!-- Mensaje de error -->
    <div v-else-if="error" class="text-center text-red-500 font-semibold">
      {{ error }}
    </div>

    <!-- Lista de tarjetas de personajes -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <PersonCard
        v-for="(person, index) in people"
        :key="person.uid"
        :name="person.name"
        :height="person.height"
        :gender="person.gender"
        :birthYear="person.birth_year"
        :imageUrl="characterImages[person.name] || 'https://via.placeholder.com/300x400?text=Star+Wars'"
        :delay="index"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PersonCard from '@/components/PersonCard.vue'

// Estado para manejar datos, carga y errores
const people = ref([])
const loading = ref(true)
const error = ref(null)

// Diccionario de nombres de personaje a imagen URL
const characterImages = {
  "Luke Skywalker": "https://i.pinimg.com/736x/a7/85/a7/a785a7934a48e95926a2f1987cd161fb.jpg",
  "C-3PO": "https://i.pinimg.com/736x/86/d5/f0/86d5f0b0a1ca84a26d3723edeefa8285.jpg",
  "R2-D2": "https://i.pinimg.com/736x/e8/98/42/e89842d463053b2ff34da9a2826b9d7f.jpg",
  "Darth Vader": "https://i.pinimg.com/736x/20/68/21/20682173d637b916321a87cf14b6dd21.jpg",
  "Leia Organa": "https://i.pinimg.com/736x/b4/be/6c/b4be6c446fa7956a28981fad4e0ea45a.jpg",
  "Owen Lars": "https://i.pinimg.com/736x/6f/21/79/6f217913454f4cb8c366ed73db7d45c1.jpg",
  "Beru Whitesun lars": "https://i.pinimg.com/736x/2b/bb/71/2bbb712405c574c6ce78730e00464a8e.jpg",
  "R5-D4": "https://i.pinimg.com/736x/00/cf/50/00cf50f13d5c40435390290fc6f7c450.jpg",
  "Biggs Darklighter": "https://i.pinimg.com/736x/f1/cf/31/f1cf31ca7d4739c15d957aa7f75b80df.jpg",
  "Obi-Wan Kenobi": "https://i.pinimg.com/736x/b5/59/b6/b559b65e122c4c6a137d3be6e704dc96.jpg",
  "Anakin Skywalker": "https://i.pinimg.com/736x/c7/4a/94/c74a94eead71ccfdb74c30e1c0fe300c.jpg",
  "Wilhuff Tarkin": "https://i.pinimg.com/736x/1c/79/c6/1c79c6c5d48a6f8e267199e6616c14a5.jpg",
  "Chewbacca": "https://i.pinimg.com/736x/c5/07/3f/c5073f13392a4a9aa78150de25896016.jpg",
  "Han Solo": "https://i.pinimg.com/736x/f9/12/fa/f912faa709884c72e380eef58c0c138f.jpg",
  "Greedo": "https://i.pinimg.com/736x/d8/de/07/d8de0767a1cf7f21debfbf80f5a45123.jpg",
  "Jabba Desilijic Tiure": "https://i.pinimg.com/736x/d4/54/56/d45456d1f459521981495449dac9676f.jpg",
  "Wedge Antilles": "https://i.pinimg.com/736x/dc/be/fc/dcbefc6b9384c0439c1241ba80147058.jpg",
  "Jek Tono Porkins": "https://i.pinimg.com/736x/79/91/3b/79913bc8285fe62d719196f705951b86.jpg",
  "Yoda": "https://i.pinimg.com/736x/01/6d/a3/016da38c26970252f02b3d78f5125f60.jpg",
  "Palpatine": "https://i.pinimg.com/736x/ad/32/6f/ad326f7d43964b951d4b267139ca1c9c.jpg",
  "Boba Fett": "https://i.pinimg.com/736x/7b/79/00/7b7900dd889de9d50afe320afd04b848.jpg",
  "IG-88": "https://i.pinimg.com/736x/9e/de/03/9ede0389a149bc8fcb98165f3147cc37.jpg",
  "Bossk": "https://i.pinimg.com/736x/9b/6a/e5/9b6ae59322774420efc46f23439130eb.jpg",
  "Lando Calrissian": "https://i.pinimg.com/736x/0a/e8/63/0ae8638e69eb48036be88aee7c6b34ef.jpg",
  "Lobot": "https://static.wikia.nocookie.net/esstarwars/images/9/96/SWE_Lobot.jpg/revision/latest?cb=20180112032657",
  "Ackbar": "https://i.pinimg.com/736x/4a/b3/08/4ab3083ddea8763f958ff73c1236197c.jpg",
  "Mon Mothma": "https://i.pinimg.com/736x/95/35/eb/9535eb7e1d395f6affbc2453fb737d46.jpg",
  "Arvel Crynyd": "https://i.pinimg.com/736x/80/ce/05/80ce055ac0cbbf109e6eff288e5c62d0.jpg",
  "Wicket Systri Warrick": "https://i.pinimg.com/736x/84/6d/d1/846dd1d34605cc1f6c78270b809ecbc6.jpg",
  "Nien Nunb": "https://i.pinimg.com/736x/b0/45/08/b045082de896701268d897f946d9bfad.jpg",
  "Qui-Gon Jinn": "https://i.pinimg.com/736x/56/5d/ee/565deee25b24b2eadcd0ab574745d015.jpg",
  "Nute Gunray": "https://i.pinimg.com/736x/7a/a0/1c/7aa01c62ebf2c3e1d6fb4e9a04021494.jpg",
  "Finis Valorum": "https://i.pinimg.com/736x/31/76/f7/3176f7f841eaecc7495bc08d383f9f2c.jpg",
  "Padmé Amidala": "https://i.pinimg.com/736x/dc/a1/7e/dca17e14ea32d55e17bff7aea2c355c1.jpg",
  "Jar Jar Binks": "https://i.pinimg.com/736x/04/2a/6b/042a6b6a66eac8f3ff2e3d3e2aed8f8f.jpg",
  "Roos Tarpals": "https://i.pinimg.com/736x/a1/6e/4d/a16e4d3b6afb36942d384c75a343c8e8.jpg",
  "Rugor Nass": "https://i.pinimg.com/736x/4e/90/bc/4e90bc681dda21cfc27b57fe870616f8.jpg",
  "Ric Olié": "https://i.pinimg.com/736x/d8/eb/9b/d8eb9b598ac0c7677c8be775888a9686.jpg",
  "Watto": "https://i.pinimg.com/736x/fa/36/49/fa3649d06ff546f7ed542f0a04219fb2.jpg",
  "Sebulba": "https://i.pinimg.com/736x/31/8a/dc/318adce8e4fbf39c7c55cb953b0c3fd6.jpg",
  "Quarsh Panaka": "https://static.wikia.nocookie.net/esstarwars/images/7/72/PanakaHS-TPM.png/revision/latest?cb=20170912151401",
  "Shmi Skywalker": "https://i.pinimg.com/736x/8d/bd/14/8dbd1469b363d9b8798b397e9272a21b.jpg",
  "Darth Maul": "https://i.pinimg.com/736x/0a/07/c4/0a07c4bf6af825fd3ab885a7404fc6e0.jpg",
  "Bib Fortuna": "https://i.pinimg.com/736x/7c/60/73/7c6073167895b42adf8da694a614aec6.jpg",
  "Ayla Secura": "https://i.pinimg.com/736x/26/ba/18/26ba1846c4b226b50eaaf6e9ccf26009.jpg",
  "Ratts Tyerell": "https://i.pinimg.com/736x/07/4d/f4/074df415bd60f6d4edccbdf82654e884.jpg",
  "Dud Bolt": "https://i.pinimg.com/736x/71/4f/31/714f3193b2f8f9fab81d1f28db2a2242.jpg",
  "Gasgano": "https://static.wikia.nocookie.net/esstarwars/images/7/78/Gasgano2.jpg/revision/latest?cb=20110124210255",
  "Ben Quadinaros": "https://i.pinimg.com/736x/ff/8b/c4/ff8bc4ae7e2f2861d623e626207a91bd.jpg",
  "Mace Windu": "https://i.pinimg.com/736x/12/aa/78/12aa7806658d75691464ba23209c38b8.jpg",
  "Ki-Adi-Mundi": "https://i.pinimg.com/736x/03/e0/ff/03e0fffb78aab933b82f85fef93dc40e.jpg",
  "Kit Fisto": "https://i.pinimg.com/736x/0f/26/21/0f2621a8e0f133e906a6a066e839adb2.jpg",
  "Eeth Koth": "https://i.pinimg.com/736x/e1/fc/e8/e1fce83a1ec0fa2947d8a6b2bf31023d.jpg",
  "Adi Gallia": "https://i.pinimg.com/736x/67/54/a8/6754a8c09f07a6ffbbb25fbcbad7df21.jpg",
  "Saesee Tiin": "https://i.pinimg.com/736x/e6/b3/02/e6b3022b89ea661a13a6c0918969a8eb.jpg",
  "Yarael Poof": "https://i.pinimg.com/736x/2a/b5/62/2ab562ced5dc87d01c19bbe9dc81e121.jpg",
  "Plo Koon": "https://i.pinimg.com/736x/c2/0d/45/c20d45ce729cad1e52f3ac874df4bc35.jpg",
  "Mas Amedda": "https://i.pinimg.com/736x/66/1f/e2/661fe2a6c1a01621825155a050238534.jpg",
  "Gregar Typho": "https://i.pinimg.com/736x/11/f5/0a/11f50a843ea4aad3c02186d483d8e002.jpg",
  "Cordé": "https://i.pinimg.com/736x/16/8d/02/168d02b0f08befbf385cea17a71274d3.jpg",
  "Cliegg Lars": "https://i.pinimg.com/736x/b2/c2/56/b2c25625394a7692d0152d68401ba197.jpg",
  "Poggle the Lesser": "https://i.pinimg.com/736x/7d/f4/97/7df497053c0ec8a002ca37f56b63b237.jpg",
  "Luminara Unduli": "https://i.pinimg.com/736x/4c/91/b5/4c91b5d7f8226fb983b67e59fa4819ab.jpg",
  "Barriss Offee": "https://i.pinimg.com/736x/31/bf/ae/31bfae834f103419cbd261ebe0939900.jpg",
  "Dormé": "https://i.pinimg.com/736x/cb/b8/84/cbb884947c578952844763b891d42e92.jpg",
  "Dooku": "https://i.pinimg.com/736x/08/c5/a7/08c5a79e72e51c8f526cd3e15daac0e0.jpg",
  "Bail Prestor Organa": "https://i.pinimg.com/736x/de/27/d4/de27d4db58c03cd0cc1160403969f44f.jpg",
  "Jango Fett": "https://i.pinimg.com/736x/75/47/46/75474610231501d8041c4147a410fddb.jpg",
  "Zam Wesell": "",
  "Dexter Jettster": "",
  "Lama Su": "",
  "Taun We": "",
  "Jocasta Nu": "",
  "R4-P17": "",
  "Wat Tambor": "",
  "San Hill": "",
  "Shaak Ti": "",
  "Grievous": "",
  "Tarfful": "",
  "Raymus Antilles": "",
  "Sly Moore": "",
  "Tion Medon": "",
}

// Funcionalidad para obtener los datos de personajes desde SWAPI
const fetchPeople = async () => {
  try {
    const response = await fetch('https://www.swapi.tech/api/people/')
    const data = await response.json()
    people.value = data.result.map(person => person.properties)
  } catch (err) {
    error.value = 'Failed to load characters. Please try again later.'
  } finally {
    loading.value = false
  }
}

// Ejecutar fetchPeople al montar el componente
onMounted(() => {
  fetchPeople()
})
</script>

<style scoped>
/* ----------------- Estilos específicos ----------------- */

/* Texto amarillo para título */
.text-shadow {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}
</style>
