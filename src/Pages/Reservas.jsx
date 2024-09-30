import React from 'react'
import '../CSS/Reservas.css'
const Reservas = () => {
    return (
        <div>
           <div class="container">
        <h1>Mis Reservas</h1>
        <table id="reservas-table">
            <thead>
                <tr>
                    <th>ID Reserva</th>
                    <th>Auto</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Fin</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button class="edit-btn">Editar</button>
                        <button class="cancel-btn">Cancelar</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Chevrolet Camaro</td>
                    <td>2023-11-10</td>
                    <td>2023-11-15</td>
                    <td>
                        <button class="edit-btn">Editar</button>
                        <button class="cancel-btn">Cancelar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        </div>

    )
}

export default Reservas
