import React from 'react'
import fb from '../../Imagenes/footer/fc.png'
import ig from '../../Imagenes/footer/ig.png'
import wpp from '../../Imagenes/footer/wpp.png'
import logo from '../../Imagenes/footer/logo.png'
import '../../CSS/footer.css'

const Footer = () => {
  return (
    <div>
      <footer class="pie">
        <article class="cajaspie1">
        <h3> 2023 Agencia De Tranporte Zambrano </h3>
      <h3>Todos los derechos reservados</h3>
      <h3>Politicas de uso y seguridad</h3>
      <h3>Politica de privacidad y ley de datos personales</h3>
        </article>

        <article class="cajaspie">
      <img src={logo} width="60%"/>
    </article>

        <article class="cajaspie">
        <h1>Contactanos</h1>
        <div class="redes">
          <a href="https://www.facebook.com/profile.php?id=100090239617611" target="_blank"><img src={fb} alt="FB" width="60%" /></a>
        </div>
        <div class="redes">
          <a href="https://www.facebook.com/profile.php?id=100090239617611" target="_blank"><img src={ig} alt="ig" width="60%" /></a>
        </div>
        <div class="redes">
          <a href="https://www.facebook.com/profile.php?id=100090239617611" target="_blank"><img src={wpp} alt="wpp" width="60%" /></a>
        </div>
        </article>
      </footer>
    </div>
  )
}

export default Footer
