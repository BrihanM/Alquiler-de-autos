import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/registro.css';

const Registro = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para manejar el formulario de registro
  };

  return (
    <div>
      <div className="containerR">
        <div className="register-form">
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required />

            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label for="celular">Celular:</label>
            <input type="tel" id="celular" name="celular" required />

            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />

            <label for="confirm-password">Confirmar contraseña:</label>
            <input type="password" id="confirm-password" name="confirm-password" required />

            <div className="terms">
              <input type="checkbox" id="terms" name="terms" required />
              <label for="terms">Acepto los términos y condiciones</label>
            </div>
            <Link to="/alquiler">
              <input type="submit" value="Registrarse" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;