<template>
  <div class="general">
    <slider :texto="'Películas ewe'" :small="true" />

    <div class="center">
      <div class="mis-datos">
        <p v-html="MisDatos">{{ MisDatos }}</p>
        <br />
        {{ web | mayusculas | concatenaYear('El mejor año')}}
      </div>
      <div class="favorita" v-if="favorita">
        <h2>{{ favorita.title }}</h2>
      </div>
      <section id="content">
        <!--Listado artículos-->
        <div id="articles">
          <div
            v-for="pelicula in peliculasMayuscula"
            v-bind:key="pelicula.title"
          >
            <pelicula
              :pelicula="pelicula"
              @favorita="haLlegadoLaPeliculaFavorita"
            />
          </div>

          <!--Añadir artículos Vía JS-->
        </div>
      </section>

      <sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Pelicula from "./Pelicula.vue";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Peliculas",
  setup() {},
  components: {
    Pelicula,
    Slider,
    Sidebar,
  },
  data() {
    return {
      nombre: "Victor",
      apellidos: "Robles",
      web: "victorroblesweb.es/academy",
      favorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image: "https://i.ytimg.com/vi/Vzi5Q5aIGJU/maxresdefault.jpg",
        },
        {
          title: "Gran Torino",
          year: 2015,
          image:
            "https://images-na.ssl-images-amazon.com/images/I/81TlD6oh2BL._SY445_.jpg",
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://www.planetadelibros.com/usuaris/libros/fotos/210/m_libros/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.jpg",
        },
        {
          title: "El señor de los anillos 3",
          year: 2003,
          image:
            "https://www.planetadelibros.com/usuaris/libros/fotos/210/m_libros/portada_el-senor-de-los-anillos_j-r-r-tolkien_201601252224.jpg",
        },
      ],
    };
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita) {
      this.favorita = favorita;
    },
  },
  computed: {
    peliculasMayuscula() {
      var peliculasModificada = this.peliculas;
      for (var i = 0; i < this.peliculas.length; i++) {
        peliculasModificada[i].title = peliculasModificada[
          i
        ].title.toUpperCase();
      }

      return peliculasModificada;
    },
    MisDatos() {
      return (
        this.nombre + " " + this.apellidos + "<br>" + "Sitio Web:" + this.web
      );
    },
  },
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenaYear(value, message) {
      var date = new Date();
      return value + ' ' + date.getFullYear() + ' ' + message;
    },
  },
};
</script>