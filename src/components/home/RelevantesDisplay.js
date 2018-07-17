import React from 'react';
import './Home.css';


export const RelevantesDisplay = () => {
    const options = {
        autoplay: true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    };
    return (
<div className={"relevantes"}>


</div>
    );
}