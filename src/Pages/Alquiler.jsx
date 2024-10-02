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
const Alquiler = () => {
    return (
        <div>
            <header class="caja">
                <div class="filters">
                    <h3>Filtros</h3>
                    <div class="filter">
                        <input type="checkbox" id="manual" checked />
                        <label for="manual">Manual</label>
                        <p class="description">Vehiculo de caja manual</p>
                    </div>
                    <div class="filter">
                        <input type="checkbox" id="automatico" checked />
                        <label for="automatico">Automático</label>
                        <p class="description">Vehiculo de caja automática</p>
                    </div>
                    <div class="filter range-filter">no funcional
                        <label for="precio">Precio</label>
                        <input type="range" id="precio" min="100" max="800" value="50" />
                        <span class="range-value">$100 - $800</span>
                    </div>
                </div>



                <div class="Productos">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img1} alt="Producto 1" />
                                <p>Nombre del Carro 1</p>
                                <a href="../Descripcion/index1.html" class="btn btn-primary">VER MAS</a>
                                <p> $1000</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img2} alt="Producto 2" />
                                <p>Nombre del Carro 2</p>
                                <a href="../Descripcion/index2.html" class="btn btn-primary">VER MAS</a>
                                <p>$2000</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img3} alt="Producto 3" />
                                <p>Nombre del Carro 3</p>
                                <a href="../Descripcion/index3.html" class="btn btn-primary">VER MAS</a>
                                <p>$3000</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img4} alt="Producto 4" />
                                <p>Nombre del Carro 4</p>
                                <a href="../Descripcion/index4.html" class="btn btn-primary">VER MAS</a>
                                <p>$4000</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img5} alt="Producto 5" />
                                <p>Nombre del Carro 5</p>
                                <a href="../Descripcion/index5.html" class="btn btn-primary">VER MAS</a>
                                <p class="precio">$5000</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img6} alt="Producto 6" />
                                <p>Nombre del Carro 6</p>
                                <a href="../Descripcion/index6.html" class="btn btn-primary">VER MAS</a>
                                <p class="precio">$6000</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img7} alt="Producto 7" />
                                <p>Nombre del Carro 7</p>
                                <a href="../Descripcion/index7.html" class="btn btn-primary">VER MAS</a>
                                <p class="precio">$7000</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="producto">
                                <img src={Img8} alt="Producto 8" />
                                <p>Nombre del Carro 8</p>
                                <a href="../Descripcion/index8.html" class="btn btn-primary">VER MAS</a>
                                <p class="precio">$8000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Alquiler
