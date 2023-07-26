<template>
  
  <section class="home">
    <div class="home--intro" >
      <img src="https://images.pexels.com/photos/10024790/pexels-photo-10024790.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      <h1 class="titulo">Aprende de la biblia con ensezanzas, mensajes y refleciones cristianas.</h1>
    </div>
    
    <div class="home--info zoom-on-scroll">
      <div class="zoom" :style="{ transform: 'scale(' + zoomLevel + ')' }">
        <div class="home--info-detalle">
        <p class="intro">Te presentamos un conjunto de breves enseñanzas para que aprendas sobre Dios.</p>
        <p>Tambien puedes encontrar mensajes y reflecciones</p>
      </div>
      <img src="../assets/GCLogo.png" alt="">
      </div>

    </div>
  

    <div class="home--product">
      <p>Encontaras imagenes con contenido cristiano</p>
      <img src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="sdfghj">
      <img src="https://media.istockphoto.com/id/1208278451/es/foto/grupo-de-diferentes-mujeres-orando-juntas.jpg?b=1&s=612x612&w=0&k=20&c=Wu-z6agaIazwnkaY48Iem_Egd8LkagCZe8CWiyAzMyg=" alt="">
      <img src="https://media.istockphoto.com/id/1323531227/es/foto/grupo-de-oraci%C3%B3n-cristiana-con-biblia-tocando-la-guitarra-para-adorar-a-dios.jpg?b=1&s=612x612&w=0&k=20&c=RZo0wt66lQQNDD6sEugL1xPrIYQ-HUWRc5eA2Tz94MY=" alt="">
      <img src="https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
 

      <div class="button">
        <router-link to="/mensajes" class="dropdown-item">Ver mensajes cristianos</router-link>
      </div>

    </div>
    
  </section>
</template>

<style>
/* estilos para la seccion home */
.home{
  width: 100%;
  margin: 6% auto;
  display: flex;
  flex-wrap: wrap;

}
.zoom-on-scroll {
    height: 400px; /* Ajusta la altura según tus necesidades */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
  }
  
/* estilos para home-intro  y el cambio de imagenes en el fondo*/
.home--intro{
  width: 95%;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
}
.home--intro img{
  width: 95%;
}
@keyframes fondo {
  20%{
  background-image: url(../assets/unsplash-photo-1.jpg);

  }
  100%{
    
  background-image: url(../assets/unsplash-photo-3.jpg);
  }
}
.titulo{
  width: 100%;
  text-align: center;
  margin-top: 10px;
  animation: color 4s alternate infinite;

}

.p{
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
  animation: espacio 4s alternate infinite;
    letter-spacing: 2px;
}

/* estilos para la informacion el cuadro celeste*/

.home--info{
  width: 95%;
  margin: auto;
  justify-content: space-around;
  display: flex;
  padding: 30px 10px;
  flex-wrap: wrap;
  background-color: #95b8f6;
  border-radius: 60px 4px 60px 4px;
}
.zoom{
  display: flex;
}
.home--info-detalle{
  width: 40%;
  padding: 20px;
  
}
.home--info-detalle zoom{
  width: 40%;
  padding: 20px;
  display: flex;

}
.home--info-detalle .intro{
  text-align: center;
  color: #000;
  margin-top: 10px;
  font-size: 30px;
}
.home--info-detalle p{
  text-align: center;
  margin-top: 10px;
  font-size: 25px;
}
.home--info img{
  width: 50%;
  height: 200px;
  padding: 20px;
  border-radius: 40px;
}
/* estilos para el slider de imagenes*/
.home--slider{
  width: 90%;
  overflow: hidden;
  border-radius: 5px;
  margin: 10px auto;
}
.home--slider-img{
  width: 100%;
  display: flex;
  animation:  slide 10s infinite linear;
}
.home--slider-img img{
  width: 100%;
  height: 200px;

}
@keyframes slide {
  0%{
    transform: translate(0);
  }
  25%{
    transform: translate(0);
  }
  30%{
    transform: translate(-100%);
  }
  50%{
    transform: translate(-100%0);
  }
  55%{
    transform: translate(-200%);
  }
  75%{
    transform: translate(-200%);
  }
  80%{
    transform: translate(-300%);
  }
  100%{
    transform: translate(-300%);
  }
}


.home--intro img{
  width: 60%;
  margin: 10px auto;
  height: 200px;
  border-radius: 10px;
  box-shadow:  0 0 15px white;
}

/* estilos para contenedor de productos y los link a otras vistas*/
.home--product{
  width: 95%;
  margin:10px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.home--product p{
  width: 100%;
  text-align: center;
  font-size: 25px;
  color: green;
  margin-top: 10px;
}
.home--product img{
  width: 20%;
  border-radius: 10px;
}
.home--product .button{
  width: 100%;
  display: flex;
}
.home--product .button a{
  width: 40%;
  margin: 20px 30%;
  text-align: center;
  background-color: #f86f61;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-size: 20px;

}
.home--product .button a:hover{
  width: 40%;
  margin: 20px 30%;
  text-align: center;
  background-color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  color: #f86f61;
  font-size: 20px;

}
.home--product .mapa{
  width: 80%;
  border-radius: 10px;
  margin: 20px ;
}

/* modo responsive para mitad de pantalla de pc*/
@media (max-width: 768px){
  .home--info-detalle{
    width: 100%;
  }
  .home--info img{
    width: 100%;
  }
  .home--product img{
  width: 40%;
  margin: 10px auto;
  border-radius: 10px;
 }
 
}
/* modo responsive para movil*/
@media (max-width: 538px){
  .home--info-detalle{
    width: 100%;
  }
  .home--info img{
    width: 100%;
  }
  .home--product img{
  width: 90%;
  margin: 10px auto;
  border-radius: 10px;
 }

}
</style>
<script>
  export default {
    data() {
      return {
        zoomLevel: 1, // Valor inicial del zoom
        
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Ajusta estos valores para cambiar la intensidad del zoom
        const maxZoomLevel = 1.5; // Zoom máximo que se alcanzará
        const scrollThreshold = 2000; // Umbral de scroll para llegar al zoom máximo
  
        // Calcula el nuevo nivel de zoom en función del scroll
        const scrollY = window.scrollY;
        const newZoomLevel = Math.min(maxZoomLevel, 1 + scrollY / scrollThreshold);
  
        this.zoomLevel = newZoomLevel;
      },
    },
  };
  </script>