import React from 'react';
import {Icon } from 'antd';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './Home.css';
import video from '../../assets/fondo.jpeg';
import { Parallax } from 'react-scroll-parallax';


export const SlideDisplay = () => {

    return (
        <div className="slide fondo">
                <div className="home_data">
                    <div >
                    <h3 className="bot">
                      Prioriza y soluciona problemas con tu
                            organización a la hora de hacer tus tareas.</h3>
                        <a href="#history">
                            <FontAwesome  className="fa_home top" name="chevron-down" size="2x" />
                        </a>
                    </div>


                </div>



        </div>
);
}
