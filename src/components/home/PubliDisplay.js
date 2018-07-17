import React from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

export const PubliDisplay = () => {

    return (
            <div className="box_publi">
                    <div className="publi ">
                        <div>
                            <h3>Prueba Tiny hoy mismo. </h3>
                            <p><FontAwesome name="tag"/> La integración del sistema a tu institución es fácil.</p>
                            <Link to="/bee-co" >
                                <button className="btn_mas">Comienza ya</button>
                            </Link>
                        </div>
                     </div>
            </div>
    );
}
