<template>
   <section class="loNuevo">

      <h3>Nuevo</h3>
      <div class="loNuevo--product">
        
         <img src="https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg?auto=compress&cs=tinysrgb&w=600" alt="tommy">
         <h3>Aprende</h3>
         <button @click="abrirProd">Detalles</button>

         <div :class="prod">
            <p>
              <strong>Cita:</strong> Juan 
            </p>
            <p>
              <strong>Descripcion:</strong>Mas 
            </p>

            <div class="comprar">
              <router-link to="/enseñanzas" >Ver mas
              </router-link>
            </div>
         </div>
         

      </div>
   </section>
</template>
<style>
.loNuevo{
   width: 90%;
   margin: 10px auto;
   display: flex;
   flex-wrap: wrap;

}
.loNuevo h3{
   width: 100%;
   margin: 10px auto;
   text-align: center;


}
.loNuevo--product{
   width: 40%;
   margin: 10% auto;
   background-color: aqua;
   border-radius: 10px;
}
.loNuevo--product img{
   width: 80%;
   margin-left: 10%;
   margin-top: 10px;
   border-radius: 10px;
   height: 20vh;
}
.loNuevo--product button{
   width: 30%;
   margin: 30px 35%;
   padding: 5px 15px;
   background-color: #f86f61;
   border: none;
   color: white;
   font-size: 15px;
   border-radius: 6px;
   margin-bottom: 10px;
   cursor: pointer;
}



.prod--close{
      display: none;
   }

.prod--open{
   display: flex;
   width: 100%;
   flex-wrap: wrap;
   text-align: center;
   transition: all .5s ease;
}
.prod--open p{
   text-align: left;
   padding: 10px;
   width: 100%;
}
.prod--open .comprar{
   width: 100%;
   margin: 20px;
}
.prod--open a:hover{
   text-align: center;
   padding: 10px;
   width: 40%;
   border-radius: 10px;
   text-decoration: none;
   color: white;
   background-color: #f86f61;
}
.prod--open a{
   text-align: center;
   padding: 10px;
   width: 40%;
   border-radius: 10px;
   text-decoration: none;
   color: #f86f61;
   background-color: #fff;
   outline: 4px solid #f86f61;
}
@media only screen and (max-width: 520px){
   .loNuevo--product{
      width: 90%;
      margin: 10% auto;
      background-color: aqua;
      border-radius: 10px;
   }
}


</style>
<script>
  import datos from "../assets/json/mensajes.json";

  export default {
  data() {
    return {
      prod:'prod--close'
    }

  },
  methods: {
    
    abrirProd() {
      // this.color = this.color === 'red' ? 'green' : 'red'
      this.prod = this.prod === 'prod--open' ? 'prod--close' : 'prod--open'
    }
  }
}
</script>