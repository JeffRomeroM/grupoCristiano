<script>

  
  export default {
  data() {
    return {
      showDropdown: false,
      menu:'menu--close',
      prod:'fa-sharp fa-solid fa-bars'
   }

  },
  methods: {
   toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    alternarMenu() {
      // this.color = this.color === 'red' ? 'green' : 'red'
      this.menu = this.menu === 'menu--open' ? 'menu--close' : 'menu--open'

      this.prod = this.prod === 'fa-solid fa-close' ? 'fa-sharp fa-solid fa-bars' : 'fa-solid fa-close'
    }
  }
}
</script>

<template>
   <header class="header">

      <div id="icono-menu"  @click="alternarMenu">
   
         <i  :class="prod"></i>
      </div>

      <p class="title">Grupo Cristiano</p>

      <div class="logo">
         <router-link to="/">
         <img src="../assets/GCLogo.png" alt="">
      </router-link>
      </div>

      <nav id="navegation" :class="menu">
         <ul>
            
            <li>
               
                  
               <router-link to="/mensajes"  @click="alternarMenu" >Mensajes</router-link>
            
            </li>
            <li>
            
               <router-link to="/enseñanzas" @click="alternarMenu">Enseñanzas</router-link>
            </li>
            <li>
               
               <router-link to="/reflecciones" @click="alternarMenu">Refleciones</router-link>
            </li>

            <li @mouseover="toggleDropdown" class="li">Multimedia <i class="arrow-down"></i></li>
            
            
            
         </ul>
         <div v-if="showDropdown" class="dropdown">
            <ul>
            <li>
               <router-link to="/imagenes" @click="alternarMenu">Imagenes</router-link>
            </li>
            <li>
               <router-link to="/imagenes" @click="alternarMenu">Imagenes</router-link>
            </li>
            <li>
               <router-link to="/imagenes" @click="alternarMenu">Imagenes</router-link>
            </li>
            </ul>
         </div>

         <img src="../assets/GCLogo.png" alt="Grupo cristiano" class="nav--angelita">
  
      </nav>

   </header>
</template>
<style>


.header{
  width: 100%;
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
}
.arrow-down {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border: solid transparent;
  border-width: 0 4px 4px 4px;
  border-bottom-color: #000;
}
.dropdown {
  position: absolute;
  top: 100%;
  width: 60%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 0px;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
}



#icono-menu{
   display: none;
}
.title{
   display: none;
}
/* desaparecer el nombre de la tienda para mostrarlo solo cuando aparezca el menu hamburqguesa*/
.nav--angelita{
   display: none;
}
.logo{
   width: 49ox;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-left: 1%;
   padding: 5px 0px;
}
.logo img{
   width: 45px;
   height: 45px;
   border-radius: 50%;
}
#navegation{
   display: flex;
   width: 75%;
   margin-top: 1%;
}
#navegation ul{
   display: flex;
   width: 100%;
   justify-content: space-around;

}

#navegation ul li{
   list-style: none;
}
#navegation ul li i{
   font-size: 25px;
   margin-right: 5px;
}
.li{
   font-size: 23px;
   margin-right: 5px;
}
.li i{
   font-size: 29px;
}
#navegation ul li a{
   text-decoration: none;
   color: black;
   font-size: 22px;
   padding-left: 4px;
   font-weight: 500;
}

#navegation ul li a:hover{
   text-decoration: none;
   color: #353535;
}
/* modo responsive para mitad de pantalla de pc y movil, ahi aparece el menu hamburguesa*/
@media only screen and (max-width: 900px){
  
   #icono-menu{
      display: flex;
      cursor: pointer;
      z-index: 10;
      width: 7%;
      margin-left: 1%;
      justify-content: center;
      align-items: center;
      transition: all .5s ease;
   }
   #icono-menu i{
      font-size: 35px;
   }
  .title{
   display: block;
   margin-top: 2%;
   font-weight: 600;
   font-size: 25px;
   width: 80%;
   text-align: center;
  }
  .logo{
   width: 7%;
   margin-right: 3%;
  }
   .menu--close{
      margin-left: -990px;
   }

   .menu--open{
      background-color:#fff;
      box-shadow: inset 25px 0px;
      display: flex;
      width: 100px;
      position: absolute;
      left: 0;
      top: 6vh;
      border-radius: 0px 0px 10px 0px;
      transition: all .5s ease;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 6px 0px 6px;
   
   }

   #navegation{
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      width: 35%;
      overflow-x:auto;
   }  

   .menu--open ul{
      display:flex;
      flex-wrap: wrap;
      width: 100%;
      margin-top: 6px;
   }
   .menu--open ul li{
      width: 100%;
      padding-top: 15%;
      padding-left: 5%;

   }
   .menu--open ul li a{
      width: 100%;
   }
   .menu--open ul li:hover{
      color: #353535;
   }
   .dropdown {
  position: relative;
  top: 100%;
  width: 60%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 0px;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
}
   
   .nav--angelita{
      display: block;
      width: 85%;
      margin:15% auto 5%;
      height: 20vh;
      border-radius: 10px;
   }

  

}
@media only screen and (max-width: 520px){
  

   #navegation{
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      width: 50%;
      overflow-x:auto;
   }  
}

</style>
  


