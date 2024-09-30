import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Principal'; 
import Alquiler from '../Pages/Alquiler' 
import Reservas from  '../Pages/Reservas' 
import MenuAdmin from '../Pages/MenuAdmin'
import Contactanos from '../Pages/Contactanos';
import Perfil  from '../Pages/Perfil';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/alquiler" element={<Alquiler />} /> 
      <Route path='/reservas' element={<Reservas />} />
      <Route path='/admin' element={<MenuAdmin />} />
      <Route path="/contactanos" element={<Contactanos />}/>
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  );
};

export default Routers;
