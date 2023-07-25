<template>
    <div>
      <h2>{{ currentStory.title }}</h2>
      <p>{{ currentStory.content }}</p>
      <div v-if="showQuestion">
        <h3>{{ currentQuestion.question }}</h3>
        <ul>
          <li v-for="option in currentQuestion.options" :key="option">
            <button @click="checkAnswer(option)">{{ option }}</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <h3>¡Juego completado!</h3>
        <p>Has respondido {{ correctAnswers }} de {{ totalQuestions }} preguntas correctamente.</p>
        <button @click="restartGame">Jugar de nuevo</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      story: Object
    },
    data() {
      return {
        currentStory: {},
        currentQuestionIndex: 0,
        currentQuestion: {},
        correctAnswers: 0,
        showQuestion: true
      };
    },
    methods: {
      startGame() {
        this.currentStory = this.story;
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.showQuestion = true;
        this.loadQuestion();
      },
      loadQuestion() {
        this.currentQuestion = this.currentStory.questions[this.currentQuestionIndex];
      },
      checkAnswer(selectedOption) {
        if (selectedOption === this.currentQuestion.correctAnswer) {
          this.correctAnswers++;
        }
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.currentStory.questions.length) {
          this.loadQuestion();
        } else {
          this.showQuestion = false;
        }
      },
      restartGame() {
        this.$emit("restart");
      }
    },
    watch: {
      story: {
        immediate: true,
        handler() {
          this.startGame();
        }
      }
    }
  };
  </script>
  