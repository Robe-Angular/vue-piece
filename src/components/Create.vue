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
  name: "Create",
  data() {
    return {
      article: new Article("", "", null, ""),
      url: Global.url,
      submitted: false,
      file: "",
      texto: 'Crear Artículo'
    };
  },
  components: {
    Sidebar,
    Slider,
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }

      axios
        .post(this.url + "save", this.article)
        .then((res) => {
          if (res.data.status == "success") {
            if (
              this.file != null &&
              this.file != undefined &&
              this.file != ""
            ) {
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);
              var articleId = res.data.article._id;
              axios
                .post(this.url + "upload-image/" + articleId, formData)
                .then((res) => {
                  if (res.data.article) {
                    this.article = res.data.article;
                    swal(
                      "Artículo creado" + this.article.title,
                      "El artículo se ha creado coorectamente",
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
              this.article = res.data.article;
              swal(
                "Artículo creado" + this.article.title,
                "El artículo se ha creado coorectamente",
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
              "El artículo no se ha creado coorectamente",
              "Error"
            );
          }
        });
    },
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