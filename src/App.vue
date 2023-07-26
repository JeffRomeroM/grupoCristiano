<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Parallax from "./components/Parallax.vue"
import Game from "./pages/Game.vue"
import Game2Page from "./pages/Game2Page.vue"
</script>

<template>
  <Header />

  <router-view></router-view>
 
  
  
  <Footer/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}


</style>