import React from 'react'
import '../CSS/MenuAdmin.css'
const MenuAdmin = () => {
  return (
    <div>
      <div class="container">
        <h1 class="tittle">Administrador de Alquiler de Autos</h1>
        <section id="add-car">
            <h2 class="tittle">Agregar Nuevo Auto</h2>
            <form id="add-car-form">
                <div class="form-group">
                    <label for="car-make">Marca:</label>
                    <input type="text" id="car-make" name="car-make" required/>
                </div>
                <div class="form-group">
                    <label for="car-model" class="labels" >Modelo:</label>
                    <input type="text" id="car-model" name="car-model" required/>
                </div>
                <div class="form-group">
                    <label for="car-year" class="labels">Año:</label>
                    <input type="number" id="car-year" name="car-year" required/>
                </div>
                <div class="form-group">
                    <label for="car-price" class="labels">Precio por Día:</label>
                    <input type="number" id="car-price" name="car-price" required/>
                </div>
                <div class="form-group">
                    <label for="car-image" class="labels">Imagen:</label>
                    <input type="file" id="car-image" name="car-image" required/>
                </div>
                <button type="submit" class="button-add">Agregar Auto</button>
            </form>
        </section>
        <section id="rented-cars">
            <h2 class="tittle">Autos rentados actualmente</h2>
            <ul id="car-list">
            </ul>
        </section>
    </div>
    </div>
  )
}

export default MenuAdmin
