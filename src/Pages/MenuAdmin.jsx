import React from 'react'
import '../CSS/MenuAdmin.css'
const MenuAdmin = () => {
  return (
    <div>
      <div class="container">
        <h1>Administrador de Alquiler de Autos</h1>
        <section id="add-car">
            <h2>Agregar Nuevo Auto</h2>
            <form id="add-car-form">
                <div class="form-group">
                    <label for="car-make">Marca:</label>
                    <input type="text" id="car-make" name="car-make" required/>
                </div>
                <div class="form-group">
                    <label for="car-model">Modelo:</label>
                    <input type="text" id="car-model" name="car-model" required/>
                </div>
                <div class="form-group">
                    <label for="car-year">Año:</label>
                    <input type="number" id="car-year" name="car-year" required/>
                </div>
                <div class="form-group">
                    <label for="car-price">Precio por Día:</label>
                    <input type="number" id="car-price" name="car-price" required/>
                </div>
                <div class="form-group">
                    <label for="car-image">Imagen:</label>
                    <input type="file" id="car-image" name="car-image" required/>
                </div>
                <button type="submit">Agregar Auto</button>
            </form>
        </section>
        <section id="rented-cars">
            <h2>Autos rentados actualmente</h2>
            <ul id="car-list">
            </ul>
        </section>
    </div>
    </div>
  )
}

export default MenuAdmin
