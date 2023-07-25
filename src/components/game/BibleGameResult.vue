<template>
    <div class="result">
      <h2>¡Juego completado!</h2>
      <p>Has respondido {{ correctAnswers }} de {{ totalQuestions }} preguntas correctamente.</p>
      <button @click="restartGame">Jugar de nuevo</button>
    </div>
  </template>
  <style>
  .result{
    width: 200px;
    background-color: aqua;
    border: 2px solid red;
  }
</style>
  <script>
  export default {
    props: {
      correctAnswers: Number,
      totalQuestions: Number
    },
    methods: {
      restartGame() {
        this.$emit("restart");
      }
    }
  };
  </script>
