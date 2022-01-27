<template>
  <div id="slider-content">
    <div id="slider" class="slider-big" v-if="!small">
      <h1>{{ texto }}</h1>
      <router-link to="/blog" class="btn-white">Ir al Blog</router-link>
    </div>
    <div id="slider" class="slider-small" v-else>
      <h1>{{ texto }}</h1>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  setup() {},
  props: ["texto", "small"],
};
</script>