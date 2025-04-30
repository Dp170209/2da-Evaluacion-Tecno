# Star Wars Character Portal

Un portal web interactivo desarrollado con **Vue.js 3**, donde los usuarios pueden explorar personajes del universo de **Star Wars** mediante datos obtenidos dinámicamente desde la **API pública SWAPI.tech**. Incluye efectos visuales galácticos, animaciones suaves, diseño responsive y una experiencia temática cinematográfica.

## 🚀 Características principales

- Consumo de la API https://www.swapi.tech/api/people/
- Tarjetas animadas con datos clave de cada personaje: nombre, altura, género, año de nacimiento.
- Imágenes ilustrativas por personaje.
- Animaciones de entrada en cascada (fade-in delay).
- Página de inicio animada estilo "Star Wars Intro".
- Diseño adaptativo y estilizado con Tailwind CSS.

---

## ⚙️ Tecnologías usadas

- [Vue.js 3 + Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [SWAPI.tech](https://www.swapi.tech)
- Fetch API (nativa)

---

## 🛠️ Instrucciones de instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tuusuario/star-wars-portal.git
   cd 2da-Evaluacion-TecnoWeb
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre en tu navegador:
   ```
   http://localhost:5173
   ```

---

## 📂 Estructura del proyecto

```
src/
├── assets/           # Estilos globales
├── components/       # Navbar, Footer, PersonCard
├── views/            # Home.vue y People.vue
├── router/           # Configuración de rutas
├── App.vue           # Componente raíz
├── main.js           # Punto de entrada
```

