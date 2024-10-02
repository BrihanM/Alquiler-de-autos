import React from 'react'
import '../CSS/MenuAdmin.css'

const Contactanos = () => {
  return (
    <div>
     <div class="container">
        <h1>Datos del usuario</h1>
        <form id="user-form">
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="last-name">Apellido:</label>
                <input type="text" id="last-name" name="last-name" required/>
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="password">Contraseña actual:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="confirm-password">Contraseña nueva:</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>
            </div>
            <button type="submit" class="button-add">Guardar Cambios</button>
        </form>
    </div>
    </div>
  )
}

export default Contactanos
