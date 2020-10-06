import React from 'react'
import livros from '../componentes/data/livro'
import Card from '../componentes/layout/Card'
import { Container } from 'reactstrap';

export default function ListaAlunos() {

    const livrosLista = livros.map((livro) => {
        return (
            <Card livroId={livro.id} livroNome={livro.nome} livroFoto={livro.preco} >

            </Card>
        )
    })

    return (

        <Container className='text-center' >
            <div class='row'>
                {livrosLista}
            </div>
        </Container>

    )
}