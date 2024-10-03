import React from 'react'
import Img1 from '../Imagenes/reservas/1.png'
import Img2 from '../Imagenes/reservas/2.png'
import Img3 from '../Imagenes/reservas/3.png'
import Img4 from '../Imagenes/reservas/4.png'
import Img5 from '../Imagenes/reservas/5.png'
import Img6 from '../Imagenes/reservas/6.png'
import Img7 from '../Imagenes/reservas/7.png'
import Img8 from '../Imagenes/reservas/8.png'
import '../CSS/Alquiler.css'
import Des1 from '../Pages/Descripcion/C1'
import Des2 from '../Pages/Descripcion/C2'
import Des3 from '../Pages/Descripcion/C3'
import Des4 from '../Pages/Descripcion/C4'
import Des5 from '../Pages/Descripcion/C5'
import Des6 from '../Pages/Descripcion/C6'
import Des7 from '../Pages/Descripcion/C7'
import Des8 from '../Pages/Descripcion/C8'
import { Modal, Button } from 'react-bootstrap';
const Alquiler = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div class="fondo">
            <div class="caja">
                <div class="filters">
                    <h3>Filtros</h3>
                    <div class="filter">
                        <label for="manual">Manual </label>
                        <p class="description">Vehiculo de caja manual</p>
                    </div>
                    <div class="filter">
                        <label for="automatico">Automático</label>
                        <p class="description">Vehiculo de caja automática</p>
                    </div>
                </div>
            </div>

            <div class="Productos">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img1} alt="Producto 1" />
                            <p class="nombrecarro">SUZUKI SWIFT</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des1 />
                                </Modal.Body>
                            </Modal>
                            <p class="precio"> $1000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img2} alt="Producto 2" />
                            <p class="nombrecarro">ONIX TURBO</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des2 />
                                </Modal.Body>
                            </Modal>

                            <p class="precio">$2000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img3} alt="Producto 3" />
                            <p class="nombrecarro">MAZDA 3</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des3 />
                                </Modal.Body>
                            </Modal>

                            <p class="precio">$3000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img4} alt="Producto 4" />
                            <p class="nombrecarro">MERCEDES A200</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des4 />
                                </Modal.Body>
                            </Modal>

                            <p class="precio">$4000</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img5} alt="Producto 5" />
                            <p class="nombrecarro">TOYOTA PRADO XL</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des5 />
                                </Modal.Body>
                            </Modal>
                            <p class="precio">$5000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img6} alt="Producto 6" />
                            <p class="nombrecarro">RANGE ROVERS</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des6 />
                                </Modal.Body>
                            </Modal>
                            <p class="precio">$6000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img7} alt="Producto 7" />
                            <p class="nombrecarro">LOGAN FAMILY</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des7 />
                                </Modal.Body>
                            </Modal>
                            <p class="precio">$7000</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="producto">
                            <img src={Img8} alt="Producto 8" />
                            <p class="nombrecarro">CORVETTE</p>
                            <Button className="Info" onClick={handleOpenModal}>
                                Info
                            </Button>
                            <Modal show={showModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Des8 />
                                </Modal.Body>
                            </Modal>
                            <p class="precio">$8000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Alquiler
