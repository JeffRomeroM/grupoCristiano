
<template>
    <div class="preguntas">
      <h1>{{ pregunta.historia }}</h1>
      <h2>{{ pregunta.pregunta }}</h2>
      <ul>
        <li v-for="opcion in pregunta.opciones" :key="opcion" @click="verificarRespuesta(opcion)">
          <button>{{ opcion }}</button>
        </li>
      </ul>
    </div>
  </template>
  <style>
  .preguntas{
    width: 85%;
    margin: auto;
    background-color: rgb(77, 77, 77);
    border-radius: 20px;
    padding: 20px;
    color: white;
  }
  .preguntas ul {
    display: flex;
    flex-direction: column;
  }
  .preguntas ul li{
    list-style: none;
    margin: 10px auto;

  }
  .preguntas ul li button{
    padding: 10px 15px;
    border-radius: 10px;

  }
</style>
  
  <script>
  export default {
    props: ['pregunta'],
    methods: {
      verificarRespuesta(respuesta) {
        this.$emit('verificar-respuesta', respuesta);
      }
    }
  };
  </script>
  