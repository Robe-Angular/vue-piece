<template>
  <div class="general">
    <slider :texto="sidebarText" small="true" />

    <div class="center">
      <section id="content">
        <article class="article-item article-item-detail" v-if="article.date">
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
          <h3 class="subheader">{{ article.title }}</h3>
          <span class="date"> {{ article.date | moment("from", "now") }} </span>
          <p>
            {{ article.content }}
          </p>
          <div class="clearfix"></div>
        </article>
      </section>
      <sidebar />
      <div class="clearfix"></div>
      <router-link :to="'/blog/editar/' + article._id" class="btn btn-warning">
        Editar
      </router-link>
      <a @click="deleteArticle(article._id)" class="btn btn-danger">
        Eliminar
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Global from "../Global";
import swal from "sweetalert";
export default {
  name: "Article",
  components: {
    Slider,
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: { title: "null", content: "title", image: "null" },
      sidebarText: null,
      articleId: null,
    };
  },
  mounted() {
    this.articleId = this.$route.params.id;
    this.getArticleById(this.articleId);
  },
  methods: {
    getArticleById(articleId) {
      axios
        .get(this.url + "article/" + articleId)
        .then((res) => {
          if (res.data.status == "success") {
            this.article = res.data.article;
            this.sidebarText = this.article.title;
          }
        })
        .catch((err) => {
          if (err) {
            this.article = null;
            this.sidebarText = "Artículo no encontrado";
          }
        });
    },
    deleteArticle(articleId) {
      swal({
        title: "¿Estás seguro de querer borrar el artículo?",
        text:
          "Una vez borrado no podrás recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(this.url + "article/" + articleId)
            .then((res) => {
              if (res.data.status == "success") {
                swal("Artículo borrado", "Artículo borrado", "success");
                this.$router.push("/blog");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          swal("El artículo estpa a salvo!");
        }
      });
    },
  },
  setup() {},
};
</script>