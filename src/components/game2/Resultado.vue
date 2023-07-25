import Resultado from '.';
<template>
    <div class="res">
      <h1>Resultado</h1>
      <p>Has respondido {{ respuestasCorrectas }} de {{ totalPreguntas }} preguntas correctamente.</p>
      <button @click="reiniciarJuego">Volver a jugar</button>
    </div>
  </template>
  <style>
.res{
    width: 85%;
    margin: auto;
    background-color: rgb(77, 77, 77);
    border-radius: 20px;
    padding: 20px;
    color: white;
    text-align: center;
    
}
.res p{
    margin-top: 10px;
}
.res button{
    padding: 10px 15px;
    border-radius: 10px;
    margin-top: 5px;

  }
</style>
  
  <script>
  export default {
    props: ['respuestasCorrectas', 'totalPreguntas'],
    methods: {
    reiniciarJuego() {
      this.$emit('reiniciar-juego');
    }
  }
  };
  </script>
  