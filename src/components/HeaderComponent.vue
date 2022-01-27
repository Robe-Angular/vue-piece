<template>
  <header id="header">
    <div class="center">
      <div id="logo">
        <!--Logo-->

        <img src="../assets/images/logo.png" class="app-logo" alt="logotipo" />
        <span id="brand"> <strong>Curso</strong>Vue </span>
      </div>

      <!--Menú-->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home" active-class="active">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog" active-class="active">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario" active-class="active">Formulario</router-link>
          </li>
          <li>
            <router-link :to="{name: 'pagina', params: {id: 'soy el parámetro spaß'}}" active-class="active">Página 1</router-link>
          </li>
          <li>
            <router-link to="/peliculas" active-class="active">Página 2</router-link>
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </div>
  </header>
</template>
<script>

export default ({
  name: "HeaderComponent",
  setup() {},
});
</script>
