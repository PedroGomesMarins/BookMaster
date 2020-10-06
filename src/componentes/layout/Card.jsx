import React, { useState } from 'react'
import './Card.css'
import fotos from '../../imagens/teste.jpg'

export default function Card(props) {

    const cardStyle = {
        backgroundColor: '#696969',
        borderColor: '#000000',
    }

    const [alugado, setAlugar] = useState(false)

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title" >
                {props.livroNome}
            </div>
            <div className="Content" >
                <img src={fotos} alt="sdfsdfe" />
                <div>
                    <span> {alugado ? 'Alugado' : 'Disponivel'}</span>
                </div>
                <div>
                    <button onClick={
                        function (e) {
                            setAlugar(true)
                        }
                    }>Alugar
                    </button>
                </div>
                <div>
                    <button onClick={
                        function (e) {
                            setAlugar(false)
                        }
                    }>Devolver
                    </button>
                </div>
            </div>
        </div>
    )
}