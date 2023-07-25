<template>
    <div id="app">
        <h1>Juego de</h1>
      <BibleGameMenu @start="startGame" v-if="!gameStarted" />
      <BibleGamePlay :story="currentStory" @restart="restartGame" v-else-if="gameStarted && !gameCompleted" />
      <BibleGameResult :correctAnswers="correctAnswers" :totalQuestions="totalQuestions" @restart="restartGame" v-else />
    </div>
</template>
<style>
#app{
    margin-top: 100px;
}
</style>
  
  <script>
  import BibleGameMenu from "../components/game/BibleGameMenu.vue";
  import BibleGamePlay from "../components/game/BibleGamePlay.vue";
  import BibleGameResult from "../components/game/BibleGameResult.vue";
  
  export default {
    components: {
      BibleGameMenu,
      BibleGamePlay,
      BibleGameResult
    },
    data() {
      return {
        gameStarted: false,
        gameCompleted: false,
        currentStory: null,
        correctAnswers: 0,
        totalQuestions: 0
      };
    },
    methods: {
      startGame(story) {
        this.gameStarted = true;
        this.currentStory = story;
      },
      restartGame() {
        this.gameStarted = false;
        this.gameCompleted = false;
        this.currentStory = null;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
      },
      endGame(correctAnswers, totalQuestions) {
        this.gameCompleted = true;
        this.correctAnswers = correctAnswers;
        this.totalQuestions = totalQuestions;
      }
    },
    watch: {
      gameCompleted(value) {
        if (value) {
          this.$nextTick(() => {
            this.$emit("end", this.correctAnswers, this.totalQuestions);
          });
        }
      }
    }
  };
  </script>
