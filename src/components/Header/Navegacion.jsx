// Navegacion.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Sesion from './Sesion';
import '../../CSS/style.css'

import { Link } from 'react-router-dom';

const Navegacion = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/alquiler">Inicio</Link>
          <Link to="/reservas">Mis Reservas</Link>
          <Link to="/contactanos">Contactanos</Link>
          <Link to="/perfil">Mi perfil</Link>
          <Link to="/admin">Perfil ADMIN</Link>
          <Button className="profile" onClick={handleOpenModal}>
            Iniciar Sesion
          </Button>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Sesion />
            </Modal.Body>
          </Modal>
        </nav>
      </header>
    </div>
  );
};

export default Navegacion;
