<template src="./Create.html"></template>
<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Article from "../models/Article";
import Global from "../Global";
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "Edit",
  data() {
    return {
      article: new Article("", "", null, ""),
      url: Global.url,
      submitted: false,
      file: "",
      isEdit: true,
      texto: "Editar artículo",
      sidebarText: "",
    };
  },
  components: {
    Sidebar,
    Slider,
  },
  methods: {
    getArticleById(articleId) {
      axios
        .get(this.url + "article/" + articleId)
        .then((res) => {
          if (res.data.status == "success") {
            this.article = res.data.article;
            this.sidebarText = this.article.title;
            this.texto = this.sidebarText;
          }
        })
        .catch((err) => {
          if (err) {
            this.article = null;
            this.sidebarText = "Artículo no encontrado";
          }
        });
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
      this.submitted = true;
      var articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }

      axios
        .put(this.url + "article/" + articleId, this.article)
        .then((res) => {
          if (res.data.status == "success") {
            if (
              this.file != null &&
              this.file != undefined &&
              this.file != ""
            ) {
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);
              var articleId = res.data.articleUpdated._id;
              axios
                .post(this.url + "upload-image/" + articleId, formData)
                .then((res) => {
                  if (res.data.article) {
                    this.article = res.data.article;
                    swal(
                      "Artículo creado" + this.article.title,
                      "El artículo se ha actualizado",
                      "success"
                    );
                    this.$router.push("/blog");
                  } else {
                    swal(
                      "Imagen no subida",
                      "La imagen no se ha subido correctamente",
                      "Error"
                    );
                  }
                })
                .catch((err) => {
                  if (err) {
                    swal(
                      "Artículo no creado",
                      "El artículo no se ha creado coorectamente",
                      "Error"
                    );
                  }
                });
            } else {
              this.article = res.data.articleUpdated;
              swal(
                "Artículo actualizado" + this.article.title,
                "El artículo se ha actualizado correctamente",
                "success"
              );
              this.$router.push("/blog");
            }
          }
        })
        .catch((err) => {
          if (err) {
            swal(
              "Artículo no creado",
              "El artículo no se ha actualizado coorectamente",
              "Error"
            );
          }
        });
    },
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticleById(articleId);
  },
  validations: {
    article: {
      title: {
        required,
      },
      content: {
        required,
      },
    },
  },
  setup() {},
};
</script>