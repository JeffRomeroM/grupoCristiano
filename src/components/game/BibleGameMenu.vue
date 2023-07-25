<template>
    <div class="Juego">
      <h1>Historias de la Biblia</h1>
      <ul>
        <li v-for="story in stories" :key="story.id">
          <button @click="startGame(story)">{{ story.title }}</button>
        </li>
      </ul>
    </div>
  </template>
  <style>
  .juego{
    background-color: red;
  }
</style>
  
  <script>
  export default {
    data() {
      return {
        stories: [
          {
            id: 1,
            title: "La creación del mundo",
            content: "En el principio, Dios creó los cielos y la tierra...",
            questions: [
              {
                question: "¿Qué creó Dios el primer día?",
                options: ["La luz", "Los animales", "Los árboles"],
                correctAnswer: "La luz"
              },
              {
                question: "¿Qué creó Dios el segundo día?",
                options: ["La luz", "Los animales", "Los árboles"],
                correctAnswer: "Los animales"
              },
              // Agrega más preguntas aquí...
            ]
          },
          {
            id: 2,
            title: "David",
            content: "David era un rey de Israel...",
            questions: [
              {
                question: "¿Como se llamaba el padre de David?",
                options: ["Pedro", "Isai", "Esau"],
                correctAnswer: "Isai"
              },
              {
                question: "¿A que se dedicaba David antes de ser rey?",
                options: ["A la agricultura", "A cuidar ovejas", "Era guerrero"],
                correctAnswer: "A cuidar ovejas"
              },
              // Agrega más preguntas aquí...
            ]
          }
        ]
      };
    },
    methods: {
      startGame(story) {
        this.$emit("start", story);
      }
    }
  };
  </script>
  