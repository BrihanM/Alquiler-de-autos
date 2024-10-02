import React from 'react'
import '../CSS/Reservas.css'
const Reservas = () => {
    return (
        <div>
           <div class="container">
        <h1 class="h1-tittle">Mis Reservas</h1>
        <table id="reservas-table">
            <div class="table">
                <thead>
                    <tr>
                        <th >ID Reserva</th>
                        <th >Auto</th>
                        <th >Fecha de Inicio</th>
                        <th >Fecha de Fin</th>
                        <th >Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button class="edit-btn">Editar</button>
                            <button class="cancel-btn">Cancelar</button>
                        </td>
                    </tr>
                </tbody>
            </div>
        </table>
    </div>
        </div>

    )
}

export default Reservas
