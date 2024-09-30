import React from 'react'
import '../CSS/style.css'
import gasolina from '../Imagenes/main/gasolina.jpg'
import aseo from '../Imagenes/main/limpio.jpg'
import mecanica from '../Imagenes/main/mecanica.webp'
import cargos from '../Imagenes/main/cargos.jpg'
import precios from '../Imagenes/main/precios.avif'
import facil from '../Imagenes/main/facil.jpeg'
import banner from '../Imagenes/main/banner.jpg'

const Principal= () => {
  return (
    <div>
      <div class="banner">
        <img class="bannerimg"src={banner} alt="banner" />
        <h1>Zambrano</h1>
    <p>Agencia de transporte</p>
      </div>
      <div class="benefits">
        <h2>
          Beneficios
        </h2>
        <p>
          Estos son nuestros beneficios si decides rentar tu Auto con nosotros
        </p>
        <div class="cards">
          <div class="card">
            <img alt="Placeholder image for Gasolina" height="100" src={gasolina} />
            <h3>
              Gasolina
            </h3>
            <p>
              Te entregamos el vehículo con el tanque lleno!
            </p>
          </div>
          <div class="card">
            <img alt="Placeholder image for Aseo" height="100" src={aseo} width="100" />
            <h3>
              Aseo
            </h3>
            <p>
              Nuestros vehículos pasan por un proceso de alistamiento antes de ser entregados
            </p>
          </div>
          <div class="card">
            <img alt="Placeholder image for Mecanica" height="100" src={mecanica} width="100" />
            <h3>
              Mecanica
            </h3>
            <p>
              Los vehículos se entregan con revisión mecánica, para que no presentes ningún problema durante tu viaje!
            </p>
          </div>
          <div class="card">
            <img alt="Placeholder image for Sin Cargos Ocultos" height="100" src={cargos} width="100" />
            <h3>
              Sin Cargos Ocultos
            </h3>
            <p>
              Sabes exactamente que pagas, sin incrementos fantasmas
            </p>
          </div>
          <div class="card">
            <img alt="Placeholder image for Precios Adequibles" height="100" src={precios} width="100" />
            <h3>
              Precios Asequibles
            </h3>
            <p>
              Somos de las empresas con los precios más competitivos del mercado!
            </p>
          </div>
          <div class="card">
            <img alt="Placeholder image for Alquiler de carros cómodo y fácil" height="100" src={facil} width="100" />
            <h3>
              Alquiler de carros cómodo y fácil
            </h3>
            <p>
              Además de la rapidez y comodidad de alquilar un Rentcar, también puedes devolverlo, sin costo adicional. Además, puedes solicitar tu guía de viaje especializado sin pago adicional si lo necesitas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Principal
