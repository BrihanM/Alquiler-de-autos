
import Footer from '../components/Footer/Footer';
import Navegacion from '../components/Header/Navegacion';
import Routers from '../Routers/Routers';
import Home from '../Pages/Principal'

const Layout = () => {
  return (
    <>
      <Navegacion />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
