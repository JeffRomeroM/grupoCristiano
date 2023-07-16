<template>
  <footer class="footer">
    <hr>
    <div class="footer--copy">
      <p>&copy; 2023 Grupo Cristiano, Inc</p>
      <p>&copy; 2023 Jeffrin Romero</p>
    </div>
    <div class="footer--contact">
      <p>Contactenos</p>
      <a href="https://www.facebook.com/people/Jeffrin-RM/pfbid02U5ByZ9JBEJNo9PTV5Lwt4thrrRd3VTSbiVpk2rmBprsmaKwr4PPcVTLnK6Uz1W5Yl/" target="_blank" class="face">
        <i class="fa-brands fa-square-facebook"></i>
      </a>

      <p>Contactanos</p>
      <a href="https://api.whatsapp.com/send/?phone=%2B50577146128&text&type=phone_number&app_absent=0" target="_blank" class="whatsapp">
        <i class="fa-brands fa-square-whatsapp"></i>
      </a>
    </div>

  </footer>
</template>
<style>
.footer{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.footer hr{
  width: 95%;
  margin: auto;
}
.footer--copy, .footer--contact{
  width: 100%;
  text-align: center;
}
.footer--copy p, .footer--contact p{
  font-size: 20px;
  padding-top: 10px;
}
.footer--contact p{
  margin-top: 20px;
  margin-bottom: 10px;
}
.footer--contact {
  margin-bottom: 20px;
}
.footer--contact a{
  text-decoration: none;
  color: black;
  font-size: 48px;
}
.footer--contact a img{
  width: 50px;
}
.footer--contact .face:hover{
  text-decoration: none;
  color: blue;
}
.footer--contact .whatsapp:hover{
  text-decoration: none;
  color: green;
}
</style>