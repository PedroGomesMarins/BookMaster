import React, { useState } from 'react'
import './Card.css'
import './Botao.css'
import fotos from '../../imagens/foto2.jpg'

export default function Card(props) {

    const cardStyle = {
        backgroundColor: '#696969',
        borderColor: '#000000',
    }

    const [alugado, setAlugar] = useState(false)

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title" >
                <strong>{props.livroNome}</strong>
            </div>
            <div className="Content" >
                <img src={require("../../imagens/foto2.jpg")} alt="Erro!" />
                <div>
                    <span> {alugado ? 'Alugado' : 'Disponível'}</span>
                </div>
                <div>
                    <button class="myButton" onClick={
                        function (e) {
                            setAlugar(true)
                        }
                    }>Alugar
                    </button>
                </div>
                <div>
                    <button class="myButton" onClick={
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