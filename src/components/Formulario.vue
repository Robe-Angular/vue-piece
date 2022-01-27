<template>
  <div class="general">
    <slider texto="Formulario" small="true" />

    <div class="center">
      <section id="content">
        <h2 class="subheader">Contenido de Formulario</h2>
        <form class="mid-form" @submit.prevent="mostrarUsuario()">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" name="nombre" v-model="user.nombre" />

            <div v-if="submitted && !$v.user.nombre.required">Este campo es requerido</div> 
            <div v-if="submitted && !$v.user.nombre.minLength">Este campo debe tener más caracteres</div>
          </div>
          <div class="form-group">
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" v-model="user.apellidos" />
            <div v-if="!$v.user.apellidos.required">
              Este campo es requerido
            </div>
            <div v-if="!$v.user.apellidos.minLength">Este campo debe tener más caracteres</div>
          </div>
          <div class="form-group">
            <label for="bio">Biografía</label>
            <textarea type="text" name="bio" v-model="user.bio"></textarea>
            <div v-if="!$v.user.bio.required">Este campo es requerido</div>
            <div v-if="!$v.user.bio.minLength">Este campo debe tener más caracteres</div>
          </div>
          <div class="form-group radiobuttons">
            <label for="genero">Género</label>

            <input
              type="radio"
              name="genero"
              value="hombre"
              checked
              v-model="user.genero"
            />
            Hombre
            <input
              type="radio"
              name="genero"
              value="mujer"
              v-model="user.genero"
            />
            Mujer
            <input
              type="radio"
              name="genero"
              value="otro"
              v-model="user.genero"
            />
            otro
          </div>
          <div class="clearfix"></div>
          <input type="submit" value="enviar" class="btn btn-success" />
        </form>
        <div class="datos" v-if="user">
          {{ user.nombre + " " + user.apellidos }}
        </div>
      </section>
      <sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Formulario",
  components: {
    Slider,
    Sidebar,
  },
  data() {
    return {
      submitted: false,
      user: {
        nombre: "",
        apellidos: "",
        bio: "",
        genero: "",
      },
    };
  },
  methods: {
    mostrarUsuario() {
      console.log(this.user);
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      alert("validación pasada");
    },
  },

  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2),
      },
      apellidos: {
        required,
        minLength: minLength(2),
      },
      bio: {
        required,
        minLength: minLength(10),
      },
    },
  },
  setup() {},
};
</script>