import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

export const NosotrosDisplay = () => {

    return (
        <div id="nosotros" className="nosotros">
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
            <div className="nos_texto">
                <h2 className="desaper">Soluciones para desafíos comunes</h2>
                <h2 className="apere">
                    Soluciones para desafíos comunes
                </h2>
                <p className="texto">
                    Agregamos funciones nuevas de manera progresiva.
                Si tu institución necesita o le gustaría una función extra podemos agregarla a nuestro sistema.
                </p>
                <p className="texto">
                    <img
                        src="https://images.pexels.com/photos/1043506/pexels-photo-1043506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
                </p>
                <p className="texto">
                    Ten el mejor servicio y la mejor satisfación
                    Dales a tus alumnos una manera simple y segura de acceder a tu app.
                    Luego, supervisa el proceso de incorporación y descubre cómo mejorarlo.
                </p>
                <p className="texto">
                    <img
                        src="https://images.pexels.com/photos/1059114/pexels-photo-1059114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
                </p>

                <p className="texto">
                    Chatea en la app
                    Ten la función de
                    chat fácil de usar para que todos
                    puedan chatear en tiempo real.
                </p>
                <p className="texto">
                  <img
             src="https://images.pexels.com/photos/1059114/pexels-photo-1059114.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
                </p>

                <p className="texto">¿Listo para una nueva forma de organización?</p>
                <br/>
                <Link to="/catalogo">
                    <button className="btn_explore">Explorar</button>
                </Link>
            </div>
            </Parallax>
        </div>
    );
}