import React from 'react'
import '../CSS/Contactanos.css'

const Contactanos = () => {
  return (
    <div>
      <div>
        <section id="contact">
          <form>
            <h1 class="ss">Contactanos</h1>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Enviar</button>

            
            <section class="HORARIO">
                <h2> HORARIO DE SOPORTE :</h2>
                <p>LUNES A DOMINGO 8:00 AM HASTA 8:00 PM</p>
            </section>

            </form>
        </section>
      </div>
    </div>
  )
}

export default Contactanos
