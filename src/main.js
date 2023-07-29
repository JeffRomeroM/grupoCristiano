import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Mensajes from "./pages/Mensajes.vue";
import Enseñanzas from "./pages/Enseñanzas.vue";
import Reflecciones from "./pages/Reflecciones.vue";
import Imagenes from "./pages/Imagenes.vue";
import Game2Page from "./pages/Game2Page.vue";



const routes = [
  { path: "/", component: Home },
  { path: "/mensajes", component: Mensajes },
  { path: "/enseñanzas", component: Enseñanzas },
  { path: "/reflecciones", component: Reflecciones },
  { path: "/imagenes", component: Imagenes },
  { path: "/juegos", component: Game2Page },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");

// main.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration.scope);
      })
      .catch(error => {
        console.log('Fallo al registrar el Service Worker:', error);
      });
  });
}


