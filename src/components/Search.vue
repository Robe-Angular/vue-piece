<template>
  <div class="general">
    <slider :texto="'Búsqueda: ' + searchString" small="true" />

    <div class="center">
      <section id="content">
        <h2 class="subheader">Resultados</h2>

        
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
  name: "Search",
  data() {
    return {
      articles: null,
      url: "",
      searchString: null
    };
  },
  components: {
    Slider,
    Sidebar,
    Articles
  },
  mounted() {
    this.url = Global.url;
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.url + "search/" + searchString).then((res) => {
        if (res.data.status == "success") {
          this.articles = res.data.articles;
        }
      })
      .catch(err => {
          if(err){
            this.articles = [];          
          }        
      });
    },
  },
  setup() {},
};
</script>