<template>
  <div class="general">
    <slider
      texto="Bienvenidos al curso de Vue con Víctor Robles de victorroblesweb.es"
    />

    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado artículos-->
        <div id="articles">
          <articles :articles="articles" />
        </div>
      </section>
      <sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import Articles from "./Articles.vue";

export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  setup() {},
  data() {
    return {
      articles: null,
      url: "",
    };
  },
  mounted() {
    this.url = Global.url;
    this.getLastArticles();
  },
  methods: {
    getLastArticles() {
      axios.get(this.url + "articles/true").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
};
</script>