// Sesion.jsx
import '../../CSS/registro.css'
import Registro from  '../../Pages/Registro'
import { Link } from 'react-router-dom';
const Sesion = () => {
  return (
    <div>
      <div class="containerI">
        <div className="login-form">
          <h2>Iniciar sesion</h2>
          <form>
            <label for="username">Email:</label>
            <input type="text" id="username" name="username" required />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <input type="submit" value="Iniciar Sesión" />
          </form>
          <p>¿No tienes cuenta? <Link to="/registro">Registrate</Link></p></div>
      </div>
    </div>
  );
};

export default Sesion;
