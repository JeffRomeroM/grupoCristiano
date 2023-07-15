import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Mensajes from "./pages/Mensajes.vue";
import Enseñanzas from "./pages/Enseñanzas.vue";
import Reflecciones from "./pages/Reflecciones.vue";
import Imagenes from "./pages/Imagenes.vue";



const routes = [
  { path: "/", component: Home },
  { path: "/mensajes", component: Mensajes },
  { path: "/enseñanzas", component: Enseñanzas },
  { path: "/reflecciones", component: Reflecciones },
  { path: "/imagenes", component: Imagenes },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
