<template>
  <div class="enseñanzas">
    
    <h1>Mensajes Cristianos</h1>
   
      <div class="enseñanzas--detalle" v-for="producto in productos" :key="producto.id">
        <img :src="producto.img" v-bind:alt="producto.name">
        <h2>{{ producto.name }}</h2>
        
        <button @click="abrirModal(producto)">Ver detalles</button>
      </div>


    <div v-if="modalVisible" class="modal">
      <div class="modal--intro">
        <div>
          <h3>{{ productoSeleccionado.name }}</h3>
        
          <p>{{ productoSeleccionado.citaPrincipal }}</p>
        </div>
        <img :src="productoSeleccionado.img" v-bind:alt="productoSeleccionado.name">
      </div>
      <p>{{ productoSeleccionado.introduccion }}</p>
      <p>{{ productoSeleccionado.texto }}</p>
      <button @click="cerrarModal">Cerrar</button>
    </div>
  </div>
</template>

<script>
import productosData from '../assets/json/mensajes.json';

export default {
  data() {
    return {
      productos: [],
      modalVisible: false,
      productoSeleccionado: null
    };
  },
  mounted() {
    this.productos = productosData;
  },
  methods: {
    abrirModal(producto) {
      this.modalVisible = true;
      this.productoSeleccionado = producto;
    },
    cerrarModal() {
      this.modalVisible = false;
      this.productoSeleccionado = null;
    },
    
  }
};
</script>
<style>
.enseñanzas{
  width:98%;
  margin:6% auto;
  text-align:center;
  padding:2rem;
  border-radius:.4em;
  box-shadow: rgba(17, 17, 26,.2);
  display: flex;
  flex-wrap: wrap;
  padding: 10px auto;
  box-sizing: border-box;

}
.enseñanzas h1{
  width: 100%;
  text-align: center;
}

.enseñanzas--detalle{
  -webkit-box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
  box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
  border-radius: 10px;
  width: 24%;
  margin:10px auto;

}
.enseñanzas--detalle img{
  width: 100%;
  height: 240px;
  border-radius: 10px 10px 0px 0px;
}
.enseñanzas--detalle p{
  font-size: 30x;
}
.enseñanzas--detalle button {
 padding: 10px 25px;
 border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px #95b8f6;
 box-shadow: 4px 8px 19px -3px#fff  ;
 transition: all 250ms;
 overflow: hidden;
 margin: 10px auto;
}

.enseñanzas--detalle button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color:#95b8f6;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px #95b8f6;
 box-shadow: 4px 8px 19px -3px #95b8f6;
 transition: all 250ms
}

.enseñanzas--detalle button:hover {
 color: #e8e8e8;
}

.enseñanzas--detalle button:hover::before {
 width: 100%;
}
.modal{
  width: 93.5%;
  -webkit-box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
  box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
  border-radius: 10px;
  margin: auto;
  position: absolute;
  background-color: white;
  padding: 15px;
  z-index: 1;
  box-sizing: border-box;

}
.modal--intro{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.modal--intro div{
  margin-top: 10%;
  font-size: 30px;
  width: 20%;
}
.modal--intro div p{
  margin-top: 40px;
}
.modal--intro img{
  border-radius: 8px;
  width: 60%;
}
.modal p{
  font-size: 25px;
}
.modal button {
  background-color: white;
  color: black;
  border-radius: 15px;
  font-size: 17px;
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid red;
  box-shadow: 0 0 0 0 #95b8f6;
  margin: 10px auto;
}

.modal button:hover {
  transform: translateY(-4px) translateX(-2px);
  box-shadow: 2px 5px 0 0 red;
};

.modal button:active {
  transform: translateY(2px) translateX(1px);
  box-shadow: 0 0 0 0 red;
};

/* modo responsive para mitad de pantalla de pc*/
@media only screen and (max-width: 800px){
  .enseñanzas--detalle{
    -webkit-box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
    box-shadow: 1px 2px 17px -1px rgba(0,0,0,0.75);
    border-radius: 10px;
    width: 30%;
    margin:10px auto;
    border: 3px solid red;

  }
}
/* modo responsive para movil*/
@media only screen and (max-width: 520px){
  .enseñanzas--detalle{
  
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    margin:10px auto;

  }
  .modal{
    margin-top: 6%;
    width: 80%;
  }
  .modal--intro{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
  .modal--intro div{
    margin-top: 10%;
    font-size: 30px;
    width: 100%;
  }
  .modal--intro div p{
    margin-top: 40px;
  }
  .modal--intro img{
    border-radius: 8px;
    width: 90%;
  }
}
</style>