<template>
  <div class="general">
    <slider texto="Blog" small="true" />

    <div class="center">
      <section id="content">
        <p>Contenido de Blog</p>

        
        <articles
          :articles="articles"
        />
          <!--Añadir artículos Vía JS-->
        
      </section>
      <sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "../Global";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue";

export default {
  name: "Blog",
  data() {
    return {
      articles: null,
      url: "",
    };
  },
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.url = Global.url;
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios.get(this.url + "articles").then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      });
    },
  },
  setup() {},
};
</script>