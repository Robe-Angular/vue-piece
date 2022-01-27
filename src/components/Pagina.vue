<template>
  <div class="general">
    <slider 
      :texto="'Página de prueba'"
      :small="true"

    />

    <div class="center">
      <section id="content">
        <h2 class="subheader">Página</h2>
        <h3>{{ id_desde_url }}</h3>
        <button @click="actualizarNombre()">Actualizar Nombre</button>
        <button @click="redirigirAlBlog()">Redirigir al blog</button>
        <h4>{{ this.nombre }}</h4>
      </section>

      <sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";

export default {

  name: "Pagina",
  components: {
    Slider,
    Sidebar,
  },
  destroyed() {
    console.log("destruído");
  },
  created() {
    console.log("creado");
  },
  updated() {
    console.log("actualizado");
    console.log(this.nombre);
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("montado");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Bichota",
    };
  },
  setup() {},
  methods: {
    actualizarNombre() {
      this.nombre = "La Bicha";
      console.log(this.nombre);
    },
    redirigirAlBlog() {
      if (this.nombre == "La Bicha") {
        this.$router.push("/blog");
      }
    },
  },
};
</script>