<template>
  <div>

    <div id="articles" v-if="articles && articles.length > 0">
        
      <article
        class="article-item"
        id="article-template"
        v-for="article of articles"
        v-bind:key="article._id"
      >
        <div class="image-wrap">
          <img
            :src="url + 'get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img
            src="../assets/images/default.jpg"
            :alt="article.title"
            v-if="!article.image"
          />
        </div>
        <h2>{{ article.title }}</h2>
        <span class="date">
          {{ article.date | moment("from", "now") }}
        </span>
        <router-link :to="{name: 'article', params: {id: article._id}}">Leer Más</router-link>
        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && articles.length == 0">
        No hay artículos para mostrar
    </div>
    <div v-else>
        Cargando
    </div>
    
  </div>
</template>
<script>
import Global from "../Global";
export default {
  name: "Articles",
  setup() {},
  props: ["articles"],
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>