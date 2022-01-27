<template>
  <article
    class="article-item"
    id="article-template"
  >
    <div class="image-wrap">
      <img :src="pelicula.image" :alt="pelicula.title" />
    </div>
    <h2>{{ pelicula.title }}</h2>
    <span
      class="date"
      v-bind:class="{
        yeargreen: pelicula.year >= 2015,
        yearred: pelicula.year < 2015,
      }"
    >
      {{ pelicula.year }}
    </span>
    <br />
    <a href="#">Leer Más</a>
    <input type="button" value="Marcar como favorita" 
      @click="pasarFavoritaAlPadre(pelicula)"
    />

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: ['pelicula'],
  setup() {},
  methods: {
    pasarFavoritaAlPadre(pelicula){
      this.$emit('favorita', pelicula);
    }
  }
};
</script>