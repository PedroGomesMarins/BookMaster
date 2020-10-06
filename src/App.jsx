import React from 'react'
import './App.css'
import ListaLivros from './componentes/ListaLivros'
import Menu from './componentes/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'reactstrap';

export default function App(props) {

    return (
        <div className="App">
            <Menu />

            <Jumbotron fluid className="titulo">
                <style>{`.titulo{
                            padding-top: 80px;
                            padding-bottom: 80px;
                            background-color: #000;
                            color: #fff;
                            margin-bottom: 0rem !important;
                        .centralizar{
                            margin: 0 auto !important;
                            float: none !important;
                        }`}</style>

                <Container className='text-center'>
                    <h1 className='display-4'>Livros do nosso catálogo</h1>
                    <p className='lead'>Selecione o livro desejado e pegue-o emprestado!</p>
                </Container>
            </Jumbotron>

            <ListaLivros  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}/>
        </div>
    );
}