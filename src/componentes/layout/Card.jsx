import React from 'react'
import './Card.css'
import fotos from '../../imagens/teste.jpg'

export default function Card(props) {

    const cardStyle = {
        backgroundColor: '#696969',
        borderColor: '#000000',
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title" >
                {props.livroNome}
            </div>
            <div className="Content" >
                <img src={fotos}  alt="sdfsdfe"/>
                <div>
                    as
                </div>
            </div>
        </div>
    )
}