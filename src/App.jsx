import Layout from './Layout/Layout';
import Registro from './Pages/Registro';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Layout />} />


      </Routes>
  );
}

export default App;
