<template>
  <div>
    <section id="content">
      <h1>Este es mi componente</h1>
      <h2>{{ subtitulo }}</h2>
      <h2>Reactividad</h2>
      <input type="text" v-model="nombre" />
      Mi nombre es <strong>{{ nombre }}</strong>
      <h2>Directivas condicionales</h2>
      <input type="number" v-model="edad" />
      Mi edad es <strong>{{ edad }}</strong>
      <p>
          <strong class="alert-purple-provisional" v-if="!edad || edad > 65">Eres de avanzada edad</strong>
        <strong class="alert-success-provisional" v-else-if="edad && edad >= 18">Eres Mayor de edad</strong>        
        <strong class="alert-danger-provisional" v-else>Eres Menor de edad</strong>
      </p>
      <h2>Directiva iterativa</h2>
      <ol>
          <li v-for="pelicula in peliculas" :key="pelicula">
              {{pelicula}}
          </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtítulo de MiComponente",
      nombre: "",
      edad: 18,
      peliculas: ['Batman vs Superman', 'El señor de los anillos', 'Spiderman', 'Anabel']
    };
  },
};
</script>
