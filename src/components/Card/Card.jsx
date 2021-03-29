import React from 'react';
import './Card.css'

function Card({ src, name, href, price }) {
    console.log("href -->", href)
    return (
        <a href={href} target={"_blank"}>
            <div className="container">
                <img src={src}/>
                <p>${price}</p>
                <div className="title">
                    <h3>{name}</h3>
                </div>
            </div>
        </a>
    )
}

export default Card