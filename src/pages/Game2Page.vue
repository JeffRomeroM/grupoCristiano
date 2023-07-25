<template>
  <div>
    <template v-if="!mostrarResultado">
      <pregunta
        :pregunta="preguntaActual"
        @verificar-respuesta="verificarRespuesta"
      />
    </template>
    <template v-else>
      <resultado
        :respuestasCorrectas="respuestasCorrectas"
        :totalPreguntas="preguntas.length"
        @reiniciar-juego="reiniciarJuego"
      />
    </template>
  </div>
</template>

<script>
import Pregunta from '../components/game2/Preguntas.vue';
import Resultado from '../components/game2/Resultado.vue';

export default {
  components: {
    Pregunta,
    Resultado
  },
  data() {
    return {
      preguntas: [
        {
          id: 1,
          historia: "El Diluvio",
          pregunta: "¿Cuál fue el nombre del arca que Noé construyó?",
          opciones: ["Arca de Noé", "Arca de Dios", "Arca del Diluvio"],
          respuestaCorrecta: "Arca de Noé"
        },
        {
          id: 2,
          historia: "El Éxodo",
          pregunta: "¿Cuál fue la plaga que liberó el faraón después de que Moisés pidiera la libertad de los hebreos?",
          opciones: ["Plaga de langostas", "Plaga de sangre", "Plaga de ranas"],
          respuestaCorrecta: "Plaga de ranas"
        },
        {
          id: 3,
          historia: "El Nacimiento de Jesús",
          pregunta: "¿En qué ciudad nació Jesús?",
          opciones: ["Belén", "Jerusalén", "Nazaret"],
          respuestaCorrecta: "Belén"
        }
        // Agrega más preguntas aquí si lo deseas
      ],
      preguntaActual: {},
      indicePregunta: 0,
      respuestasCorrectas: 0,
      mostrarResultado: false
    };
  },
  methods: {
    cargarPregunta() {
      this.preguntaActual = this.preguntas[this.indicePregunta];
    },
    verificarRespuesta(respuesta) {
      if (respuesta === this.preguntaActual.respuestaCorrecta) {
        this.respuestasCorrectas++;
      }
      if (this.indicePregunta < this.preguntas.length - 1) {
        this.indicePregunta++;
        this.cargarPregunta();
      } else {
        this.mostrarResultado = true;
      }
    },
    reiniciarJuego() {
      this.indicePregunta = 0;
      this.respuestasCorrectas = 0;
      this.mostrarResultado = false;
      this.cargarPregunta();
    }
  },
  mounted() {
    this.cargarPregunta();
  }
};
</script>
