import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate';


import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import Peliculas from './components/Peliculas.vue';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Article from './components/Article.vue';
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';
import Error from './components/Error.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const moment = require('moment');
require('moment/locale/es');
Vue.use(require('vue-moment'), { moment });
const routes = [
  {path: '/home', component: LastArticles},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/buscador/:searchString', component: Search},
  {path: '/redirect/:searchString', component: Redirect},
  {path: '/mi-componente', component: MiComponente},
  {path: '/blog', component: Blog},
  {path: '/blog/detalle/:id', name: 'article', component: Article},
  {path: '/blog/editar/:id', component: Edit},
  {path: '/blog/crear', name: 'create', component: Create},
  {path: '/formulario', component: Formulario},
  {path: '/pagina/:id?', name: 'pagina' ,component: Pagina},
  {path: '/peliculas', name: 'peliculas' ,component: Peliculas},
  {path: '/hello-world', component: HelloWorld},
  {path: '/', component: LastArticles},
  {path: '*',component: Error}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
